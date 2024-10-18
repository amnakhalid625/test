import { useEffect, useState } from "react";
import { imgDB, txtDB } from "../config/firebaseConfig";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";

function StoreImageTextFirebase() {
  const [txt, setTxt] = useState("");
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);

  // Handle file upload
  const handleUpload = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      const imgs = ref(imgDB, `Imgs/${v4()}`);
      uploadBytes(imgs, e.target.files[0])
        .then((data) => {
          console.log(data, "imgs");
          getDownloadURL(data.ref).then((val) => {
            setImg(val);
          });
        })
        .catch((error) => {
          console.error("Error uploading file: ", error);
        });
    } else {
      console.error("No file selected");
    }
  };

  // Handle click to add data to Firestore
  const handleClick = async () => {
    if (txt && img) {
      const valRef = collection(txtDB, "txtData");
      await addDoc(valRef, { txtVal: txt, imgUrl: img });
      alert("Data added successfully");
    } else {
      alert("Please provide both text and image");
    }
  };

  // Fetch data from Firestore
  const getData = async () => {
    const valRef = collection(txtDB, "txtData");
    const dataDb = await getDocs(valRef);
    const allData = dataDb.docs.map((val) => ({ ...val.data(), id: val.id }));
    setData(allData);
    console.log(dataDb);
  };

  // Run getData only once after the component mounts
  useEffect(() => {
    getData();
  }, []);

  console.log(data, "datadata");

  return (
    <div>
      <input onChange={(e) => setTxt(e.target.value)} className="bg-slate-400" value={txt} />
      <br />
      <input type="file" onChange={(e) => handleUpload(e)} />
      <br />
      <br />
      <button onClick={handleClick}>Add</button>

      {data.map((value) => (
        <div key={value.id}>
          <h1>{value.txtVal}</h1>
          <img src={value.imgUrl} height="200px" width="200px" alt="uploaded" />
        </div>
      ))}
    </div>
  );
}

export default StoreImageTextFirebase;

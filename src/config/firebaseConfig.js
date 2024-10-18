// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {GoogleAuthProvider} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzR3fxfGvF5rN2ynu64RIhRSAuMBkxm58",
  authDomain: "saylani-test-188aa.firebaseapp.com",
  projectId: "saylani-test-188aa",
  storageBucket: "saylani-test-188aa.appspot.com",
  messagingSenderId: "408544576362",
  appId: "1:408544576362:web:54ff6815a13c437ba05b13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 const provider=new GoogleAuthProvider()
 const imgDB=getStorage(app)
 const txtDB=getFirestore(app)
 export {auth,provider,imgDB,txtDB}
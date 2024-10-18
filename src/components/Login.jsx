import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth, provider } from '../config/firebaseConfig';
import GoogleButton from 'react-google-button';
import { signInWithPopup, signOut } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState('');

  const handleSignIn = async () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    }).catch((error) => {
      console.error("Error during sign-in: ", error);
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('email');
      setValue('');
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setValue(storedEmail);
    }
  }, []);

  return (
    <>
      {value ? (
        <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
          <div className="bg-white w-96 shadow-xl rounded p-5">
            <h1 className="text-3xl font-medium text-center">Welcome</h1>
            <h2 className="text-center mt-2">Logged in as: {value}</h2>
            <button 
              onClick={handleLogout} 
              className="mt-5 text-center w-full bg-red-600 rounded-md text-white py-3 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
          <div className="bg-white w-96 shadow-xl rounded p-5">
            <h1 className="text-3xl font-medium text-center">Login</h1>
            <form className="space-y-5 mt-5">
              <input 
                type="text" 
                className="w-full h-12 border border-gray-800 rounded px-3" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <div className="w-full flex items-center border border-gray-800 rounded px-3">
                <input 
                  type="password" 
                  className="w-4/5 h-12" 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className="">
                <Link to='/signup' className="font-medium text-blue-900 hover:bg-blue-300 rounded-md p-2">SignUp</Link>
              </div>
              <button className="text-center w-full bg-blue-900 rounded-md text-white py-3 font-medium" type="button">
                Login
              </button>
              <GoogleButton onClick={handleSignIn} />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

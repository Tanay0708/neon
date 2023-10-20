import React, { useEffect, useState } from 'react';
import {auth} from '../config/firebase';
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { Navigate, useNavigate } from 'react-router-dom';


const Login = () => {


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [authUser,setAuthUser] = useState({})

  // onAuthStateChanged(auth,(currentUser) => {
  //   setUser(currentUser)
  // })

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth,(user) =>{
      if(user) {
        setAuthUser(user)
      }
      else {
        setAuthUser(null)
      }
    })
  })

  const login = async(e) => {
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(user)
      navigate("/allorders")
  
    }
    catch(err) {
      console.log(err)
      alert("wrong credentials")
    }

    console.log(email,password)
  }


  return (
   <>
     <div className='w-full h-screen bg-gray-200  flex justify-center items-center'>
        <div className='w-4/5 h-1/2 bg-white p-2 rounded-lg md:w-1/2 md:p-10'>
      <div className='w-full border-2 h-20 text-xl rounded-lg '>
      <input className='w-full h-full' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='w-full border-2 h-20 text-xl mt-10 rounded-lg'>

      
      <input className='w-full h-full' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='w-full border-2 h-20 text-xl mt-8 rounded-lg '>

      
    <button className='w-full h-full hover:bg-blue-500 hover:text-white'  onClick={login}>Login</button>
    </div>
  </div>
  </div>
     </>
  )
}

export default Login
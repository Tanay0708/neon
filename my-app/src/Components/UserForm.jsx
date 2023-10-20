import React, { useState } from 'react';
import { db } from '../config/firebase';
import {collection,addDoc} from 'firebase/firestore'


const UserForm = ({text,color,size,font,closeModal}) => {

    const [newName,setNewName] = useState("");
    const [newNumber,setNewNumber] = useState(0);
    

    const orderCollection = collection(db,"orders");

    const createOrder = async () => {

      if(newName !== "" && newNumber.length == 10) {
        await addDoc(orderCollection,{name:newName,number:newNumber,text:text,font:font,size:size,shipped:false,complete:false,color:color});
        alert("Thank you for your interest. We will contanct as soon as possible")
        closeModal(false)
      }
      else if(newName == "") {
        alert("Enter Name")
      }
      else if(newNumber.length !== 10) {
        alert("Enter correct Number")
      }
        
    }
console.log(text,color)

  return (
    <div className='w-screen fixed top-0 z-1000 bg-slate-200 h-screen flex align-center  border-2 m-auto'>
     <div className='align-center  md:w-1/2 h-80 rounded-lg p-1 md:h-auto m-auto md:p-10 bg-white  '>
      <div className='flex justify-end '>
    <button className='text-2xl' onClick={() => closeModal(false)}>X</button>
    </div>
        <div className='w-4/5  mb-5 mt-10  m-auto h-10 md:h-20'>
         
        <input className='w-full border-2 border-gray-500 rounded-lg  md:text-2xl h-full' type="text" placeholder='enter your name'  onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div className='w-4/5  mb-5 mt-5 m-auto h-10 md:h-20'>
        <input  className='w-full border-2 border-gray-500 rounded-lg  md:text-2xl h-full' type="number" placeholder='enter your number' required onChange={(e) => setNewNumber(e.target.value)} />
        </div> 
        <div className='w-4/5  mt-5 m-auto h-10 md:h-20'>
        <button  className='border-2  hover:bg-blue-500 hover:text-white rounded-lg text-3xl w-full border-blue-400 h-full ' onClick={createOrder} >Submit</button>
        </div>
    </div>

    </div>
  )
}

export default UserForm
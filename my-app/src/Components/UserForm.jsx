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
    <div className='w-screen p-5 fixed top-0 z-1000 md:p-10 bg-slate-200 h-screen md:flex align-center  border-2 m-auto'>
     <div className='align-center relative w-full md:w-full  rounded-lg p-1 pt-10  h-full md:h-full m-auto md:p-10 border-2 border-blue-400 bg-white md:flex '>
      <div className='flex justify-end absolute top-2 right-3 '>
    <button className='text-2xl' onClick={() => closeModal(false)}>X</button>
    </div>
    <div className='md:w-1/2  md:p-5'>

    
        {/* <div className='w-4/5  mb-5  h-10 md:h-20'>
         
        <input className='w-full border-2 border-gray-500 rounded-lg  md:text-2xl h-full' type="text" placeholder='enter your name'  onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div className='w-4/5  mb-5 mt-5 m-auto h-10 md:h-20'>
        <input  className='w-full border-2 border-gray-500 rounded-lg  md:text-2xl h-full' type="number" placeholder='enter your number' required onChange={(e) => setNewNumber(e.target.value)} />
        </div> 
        <div className='w-4/5  mt-5 m-auto h-10 md:h-20'>
        <button  className='border-2  hover:bg-blue-500 hover:text-white rounded-lg text-3xl w-full border-blue-400 h-full ' onClick={createOrder} >Submit</button>
        </div> */}

        <div className='w-1/2 h-20 m-auto'>
          <img src="/Image/logo.svg" className=' w-full lg:w-1/2 m-auto h-full' alt="" />
        </div>
        <div className='  w-full md:w-4/5 h-auto m-auto mt-5 md:mt-10 '>
          <p className='text-base lg:text-xl font-bold'>
           Please, fill in your details. <br /> We will contact you as soon as possible.
          </p>
        </div>
        <div className='mt-10 md:mt-2 lg:mt-10 text-left font-bold m-auto w-4/5'>
          <label >
            Name
          </label>
        </div>
        <div className='w-4/5  h-10 m-auto mt-2  '>
          <input type="text" placeholder='Enter your Email' className='border-b-2 w-full h-full' onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div className='mt-5 font-bold text-left m-auto w-4/5'>
          <label >
            Mobile No.
          </label>
        </div>
        <div className='w-4/5  h-10 m-auto mt-2 '>
          <input type="number" placeholder='Enter your Number' className='border-b-2 w-full h-full' onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div className=' w-4/5 m-auto mt-10   h-12'>
          <button className='w-full text-xl md:w-1/2 h-full text-white '  onClick={createOrder} style={{backgroundColor:"#03C5D3"}}>
            Submit
          </button>
        </div>
    </div>
    <div className=' h-full w-1/2 hidden md:block'>
      <img src="/Image/form.jpg" className='h-full w-full' alt="hello" />
    </div>
    </div>
    
    </div>
  )
}

export default UserForm
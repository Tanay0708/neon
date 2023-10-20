import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase';
import Dashboard from './Dashboard';

const Shipped = () => {

  const [orders,setOrders] = useState([]);
  const [ccomplete,setCcomplete] = useState(true);

  const collectionOrderRef = collection(db,"orders");



  useEffect(() => {
    
    const getOrders = async () => {

      try {
        const data = await getDocs(collectionOrderRef);
        const filterData = data.docs.map((doc) => ({...doc.data(),id:doc.id}))
        setOrders(filterData)
      }
      catch (err) {
        console.log(err)
      }

    }

    getOrders();
  },[]);


  const handleComplete= async (id,complete) => {
    setCcomplete(prev => !prev)

    const orderDoc = doc(db,"orders",id)
    const newField = {complete: ccomplete}
    console.log(newField)

    await updateDoc(orderDoc,newField)
    window.location.reload();
  }



  return (
    <>
    <Dashboard />
    <div className='border-2 w-full  overflow-x-auto' >
    <table className='min-w-full table-auto border-spacing-5   border'>
      <thead>
        <tr>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Name
        </th>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Mobile No.
        </th>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Coustom Text
        </th>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Color
        </th>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Font
        </th>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Size
        </th>
        <th className='border border-slate-600 text-base  md:text-2xl'>
          Competed
        </th>
        </tr>
      </thead>
      <tbody>
      {
        orders.filter((el) => {
          return  el.shipped == true && el.complete == false
        })
        .map((el) => {
          return   <tr className='text-xl border' key={el.id}>
              <td className='border text-base md:text-xl'>{el.name}</td>
              <td className='border text-base md:text-xl'>{el.number}</td>
              <td className='border text-base md:text-xl'>{el.text}</td>
              <td className='border text-base md:text-xl'>{el.color}</td>
              <td className='border text-base md:text-xl'>{el.font}</td>
              <td className='border text-base md:text-xl'>{el.size}</td>
              <td className='border text-base md:text-xl'>
                <button onClick={() => handleComplete(el.id,el.complete)} className='border-2 w-4/5 h-10 bg-blue-900 text-white '>Completed</button>
              </td>
            </tr>
         
        })
      }
       </tbody>
        </table>
  </div>
  </>
  )
}

export default Shipped
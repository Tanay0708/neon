import React, { useEffect, useState } from 'react';
import { db } from '../config/firebase'
import {getDocs,collection, updateDoc,doc } from 'firebase/firestore'
import { Link } from 'react-router-dom';

const Home = () => {

    const [orders,setOrders] = useState([]);
    const [ccomplete,setCcomplete] = useState(false)

    const orderCollectionRef = collection(db,"orders")

    useEffect(() => {

        const getOrders = async () => {
                //READ DATA
                try{
                    const data = await getDocs(orderCollectionRef);
                    const filterData = data.docs.map((doc) => ({...doc.data(),id:doc.id}))
                    setOrders(filterData)
                }
                catch(err) {
                    console.log(err)
                }
            
        }
        getOrders();
    },[]);

    const handleComplete = async (id,complete) => {

        setCcomplete(prev => !prev)


        const orderDoc = doc(db,"orders",id) 
        const newField = {complete: ccomplete}
        console.log(newField)

        await updateDoc(orderDoc,newField);
    }


  return (
    <div>
        {/* Navbar */}
        <div className='w-56 border-2 border-red-400 h-screen'>
            <ul>
                <Link to={"/allorders"}>
                <li className='text-2xl border-2 mb-2 '>
                    All Orders
                </li>
                </Link>
                <li className='text-2xl border-2 mb-2'>
                    Shipped
                </li>
                <li className='text-2xl border-2'>
                    Completed
                </li>
            </ul>
        </div>
        {
            orders.filter((el) => {
                return el.complete == false
            }).map((el) => {
                return <div key={el.id}>
                    <h1 >{el.name}</h1>
                    <h1>{el.complete == true ? "yes" : "No" }</h1>
                    <button className='border-2 w-24' onClick={() => handleComplete(el.id,el.complete)} >change</button>

                </div>
            })
        }


    </div>
  )
}

export default Home
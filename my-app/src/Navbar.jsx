import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-4/5 m-auto p-5 flex items-center justify-between border-2 h-24'>
        <img src="" alt="logo" />
       <Link to={"/login"}>
        <button className='w-24 h-10 text-white rounded-lg  text-2xl' style={{backgroundColor:"#5761FF"}}>
            Login
        </button>
        </Link>
    </div>
  )
}

export default Navbar
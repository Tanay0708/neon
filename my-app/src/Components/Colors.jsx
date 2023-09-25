import React, { useState } from 'react';
import './editor.css';

const Colors = ({yourColor}) => {


    const [color,setColor] = useState('white');

    const handelColor = (e) => {
        setColor(e.target.value);
        // console.log(e.target.value);
        yourColor(e.target.value)
    }


  return (
    <>
      <div className='colorHeading'>
                    <h2>Choose your color</h2>
                    <p>Digital mockups only colours may appear different in real life</p>
                </div>
    <div className='colorTypes'>
                    <button className='singleColor' onClick={handelColor} value="#FFFDCF" style={{backgroundColor:"#FFFDCF"}}>

                    </button>
                    <button value="#FFF97C"  onClick={handelColor}  style={{backgroundColor:"#FFF97C"}} className='singleColor'>

                    </button>
                    <button value="#FFD62E"  onClick={handelColor}  className='singleColor'style={{backgroundColor:"#FFD62E"}}  >

                    </button>
                    <button value="#FF8D02" onClick={handelColor} className='singleColor'style={{backgroundColor:"#FF8D02"}} >

                    </button>
                    <button value="#FF7575" style={{backgroundColor:"#FF7575"}}  onClick={handelColor} className='singleColor'>

                    </button>
                    <button value="#FF2A4D"style={{backgroundColor:"#FF2A4D"}} onClick={handelColor} className='singleColor'>

                    </button>
                    <button value="#FF90FF" style={{backgroundColor:"#FF90FF"}}  onClick={handelColor}  className='singleColor'>

                    </button>
                    <button value="#EAA4FF"style={{backgroundColor:"#EAA4FF"}}  onClick={handelColor} className='singleColor'>

                    </button>
                    <button value="#FF5CE8" style={{backgroundColor:"#FF5CE8"}} onClick={handelColor}  className='singleColor'>

                    </button>
                    <button value="#8C59FF"style={{backgroundColor:"#8C59FF"}} onClick={handelColor}  className='singleColor'>

                    </button>
                    <button value="#0274FC" style={{backgroundColor:"#0274FC"}}  onClick={handelColor} className='singleColor'>

                    </button>
                    
                </div>
                </>
  )
}

export default Colors
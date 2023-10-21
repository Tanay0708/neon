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
    <hr className='mb-10' />
      <div className='colorHeading'>
     
                    <h2>SELECT COLOR</h2>
                    <p>Digital mockups only colours may appear different in real life</p>
                </div>
    <div className='colorTypes'>
   
                    <button className='singleColor' onClick={handelColor} value="#FFFFFF" style={{backgroundColor:"#FFFFFF"}}>
          White
                    </button>
                 
                    <button value="#FFF67F"  onClick={handelColor}  style={{backgroundColor:"#fff67f"}} className='singleColor'>
        Warm White
                    </button>
                    <button value="#FFD62E"  onClick={handelColor}  className='singleColor'style={{backgroundColor:"#FFD62E"}}  >
        Yellow
                    </button>
                    <button value="#FF8D02" onClick={handelColor} className='singleColor'style={{backgroundColor:"#FF8D02"}} >
        Orange
                    </button>
                    <button value="#FF0000" style={{backgroundColor:"#FF0000"}}  onClick={handelColor} className='singleColor'>
        Red
                    </button>
                    <button value="#FF5CE8"style={{backgroundColor:"#FF2A4D"}} onClick={handelColor} className='singleColor'>
        Deep Pink
                    </button>
                    <button value="#0274fc" style={{backgroundColor:"#0274fc"}}  onClick={handelColor}  className='singleColor'>
        Deep Blue
                    </button>
                    <button value="#24B7DE"style={{backgroundColor:"#24B7DE"}}  onClick={handelColor} className='singleColor'>
        Ice Blue
                    </button>
                    <button value="#0BD748" style={{backgroundColor:"#0BD748"}} onClick={handelColor}  className='singleColor'>
        Deep Green
                    </button>
                    <button value="#AEDE0C"style={{backgroundColor:"#AEDE0C"}} onClick={handelColor}  className='singleColor'>
        Lemon Green
                    </button>
                    
                    
                </div>
                </>
  )
}

export default Colors
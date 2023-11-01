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
   
                    <button className={color == "#FFFFFF" ? 'singleSelected' : `singleColor` } onClick={handelColor} value="#FFFFFF" style={{backgroundColor:"#FFFFFF"}}>
        
                    </button>
                 
                    <button className={color == "#FFF67F" ? 'singleSelected' : `singleColor` } value="#FFF67F"  onClick={handelColor}  style={{backgroundColor:"#fff67f"}} >
      
                    </button>
                    <button className={color == "#FFD62E" ? 'singleSelected' : `singleColor` } value="#FFD62E"  onClick={handelColor}  style={{backgroundColor:"#FFD62E"}}  >
        
                    </button>
                    <button  value="#FF8D02" onClick={handelColor} className={color == "#FF8D02" ? 'singleSelected' : `singleColor` }style={{backgroundColor:"#FF8D02"}} >
        
                    </button>
                    <button value="#FF0000" style={{backgroundColor:"#FF0000"}}  onClick={handelColor} className={color == "#FF0000" ? 'singleSelected' : `singleColor` }>
       
                    </button>
                    <button value="#FF5CE8"style={{backgroundColor:"#FF2A4D"}} onClick={handelColor} className={color == "#FF2A4D" ? 'singleSelected' : `singleColor` }>
   
                    </button>
                    <button value="#0274fc" style={{backgroundColor:"#0274fc"}}  onClick={handelColor}  className={color == "#0274fc" ? 'singleSelected' : `singleColor` }>
       
                    </button>
                    <button value="#24B7DE"style={{backgroundColor:"#24B7DE"}}  onClick={handelColor} className={color == "#24B7DE" ? 'singleSelected' : `singleColor` }>
        
                    </button>
                    <button value="#0BD748" style={{backgroundColor:"#0BD748"}} onClick={handelColor}  className={color == "#0BD748" ? 'singleSelected' : `singleColor` }>
        
                    </button>
                    <button value="#AEDE0C"style={{backgroundColor:"#AEDE0C"}} onClick={handelColor}  className={color == "#AEDE0C" ? 'singleSelected' : `singleColor` }>
       
                    </button>
                    
                    
                </div>
                </>
  )
}

export default Colors
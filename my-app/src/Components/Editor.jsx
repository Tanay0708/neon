import React, { useEffect, useState } from 'react'
import './editor.css';
import Fonts from './Fonts';
import Input from './InputDIv';
import InputDiv from './InputDIv';
import Colors from './Colors';

const Editor = () => {


    const [font,setFont]  = useState("input");
    const [tat,setTat] = useState("Your text");
    const [type,setType] = useState("Alexa");
    const [color,setColor] = useState("white");
    const [image,setImage] = useState("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape4.jpg");





    const handleColor = (color) => {
        setColor(color);
        console.log(color);
    }

    
    const handleChange = (tat) =>{
        console.log(tat)
        setTat(tat);
    }

    const handleClick = (type) => {
        setType(type)
        console.log(type)
    }


  


  return (
    <>
    <div className='heading'>
        <h1>CUSTOMIZE YOUR NEON SIGN</h1>
    </div>
    <div className='mainDiv' >
       <div className='imageDiv'>
            <div className='sideImage'>
                <div className='sideCard'>
                    <img onClick={() => setImage("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape3.jpg")} style={{height:"100%",width:"100%",borderRadius:"15px"}} src="https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape3.jpg" alt="" />
                </div>
                <div className='sideCard'>
                <img onClick={() => setImage("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape2.jpg")} style={{height:"100%",width:"100%",borderRadius:"15px"}} src="https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape2.jpg" alt="" />
                </div>
                <div className='sideCard'>
                <img onClick={() => setImage("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape5.jpg")} style={{height:"100%",width:"100%",borderRadius:"15px"}} src="https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape5.jpg" alt="" />
                </div>
                <div className='sideCard'>
                <img onClick={() => setImage("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape6.jpg")} style={{height:"100%",width:"100%",borderRadius:"15px"}} src="https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape6.jpg" alt="" />
               </div>
               <div className='sideCard'>
               <img onClick={() =>setImage("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape4.jpg")} style={{height:"100%",width:"100%",borderRadius:"15px"}} src="https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape4.jpg" alt="" />
               </div>
            </div>
            <div className='mainImage'>
                <div className='preview'>
                   <h1 style={{fontFamily:type,color:"#FFFFFF",textShadow:`0 0 10px ${color},  0 0 20px red,
    0 0 140px ${color},
    0 0 160px ${color},
    0 0 160px ${color} `}}>
                    {tat}
                   </h1>
                </div>
                <div className='mainCard'>
                    <img style={{height:"100%",width:"100%",borderRadius:"25px"}} src={image} alt="" />
                </div>
            </div>
       </div>

    {/* 
    
    RESPONSIVE CONTENT DIV  ---------------------------------------------------------------------------------------------------------------
    
    */}

    <div className='resContent'>
            <div className='directions'>
                <button onClick={() => setFont("input")} className={font== 'input' ? 'selectedButton' : null}>
                   Type here
                </button>
                <button onClick={() => setFont("font") } className={font== 'font' ? 'selectedButton' : null} >
                    Fonts
                </button>
                <button onClick={() => setFont("color") } className={font== 'color' ? 'selectedButton' : null}>
                    Colors
                </button>
            </div>
            <div className='resDiv'>
                {font == "input" ? <InputDiv change={handleChange} /> : null}
              { font == "font" ? <Fonts click={handleClick} /> : null }
              {font == "color" ? <Colors yourColor={handleColor} /> : null}
            </div>
    </div>

    {/* --------------------------------------------------------------------------------------------------------------------------------- */}
       <div className='contentDiv'>
           
            <InputDiv   change={handleChange} />
            <div className='fontDiv'>
                  
                    <Fonts click={handleClick} />
            </div>
            <div className='colorDiv'>
             
                <Colors yourColor={handleColor} />
            </div>
            
       </div>
       
    </div>
 
    </>
  )
}

export default Editor
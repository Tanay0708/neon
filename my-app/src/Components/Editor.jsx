import React, { useEffect, useState } from 'react'
import './editor.css';
import Fonts from './Fonts';
import Input from './InputDIv';
import InputDiv from './InputDIv';
import Colors from './Colors';
import {toPng} from 'html-to-image';
import download from "downloadjs";
import Sizes from './Sizes';
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';
import UserForm from './UserForm';


let initial = 800;

const Editor = () => {


let location = useLocation()




    const [openModal,setOpenModal] = useState(false)
    const [font,setFont]  = useState("input");
    const [tat,setTat] = useState("Your text");
    const [type,setType] = useState("Alexa");
    const [color,setColor] = useState("red");
    const [image,setImage] = useState("https://customneon.com/create-neon-sign/images/background/liquid-layout/landscape4.jpg");
    const [isChecked, setIsChecked] = useState(true);
    const [price,setPrice] = useState(initial);
    const [size, setSize] = useState("Small");
   
    let link = `https://wa.me/916260512625?text=${type}`;

useEffect(() => {
 
    if(tat.length > 3) {
      if(size == "Small") {
        setPrice(initial + (tat.length-3)*150)
      }
      else if(size == "Medium") {
        setPrice(1000 + (tat.length-3)*200)
      }
      else if(size == "Large") {
        setPrice(1500 + (tat.length-3)*250)
      }
      else if(size == "X-Large") {
        setPrice(2500 + (tat.length-3)*300)
      }
      // setPrice(initial + (tat.length-3)*175)
    }
    else if(tat.length <= 3 && tat.length != 0) {
      if(size == "Small") {
        setPrice(initial )
      }
      else if(size == "Medium") {
        setPrice(1000)
      }
      else if(size == "Large") {
        setPrice(1500)
      }
      else if(size == "X-Large") {
        setPrice(2500)
      }
    }
    else if(tat.length == 0) {
      setPrice(0)
    }
  
    if(tat.length == 35) {
      alert("Contact us for sign containing more than 35 words")
    }

  
},[tat,size])


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
      }

      
    const node = document.getElementById('image-download');

    function downloadImage() {
        toPng(node)
        .then(dataURL => {
            download(dataURL,"custom-sign.png")
        })
        .catch(() => console.log("ERROR"))
    }



    const handleColor = (color) => {
        setColor(color);
   
    }

    
    const handleChange = (tat) =>{
        setTat(tat)
    
    }

    const handleClick = (type) => {
        setType(type)
      
    }

    const handleSize = (size) => {
      setSize(size)
    
    }

  


// document.getElementById("whatsapplink").href = link;

  return (
    <>
    <div className='heading mb-5 h-16 '>
       <div className='w-1/2 h-full m-auto mt-2'>
        <img src="/Image/logo.svg" className='w-full h-full' alt="" />
       </div>
       
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
            <div className='mainImage' id='image-download'>

                <div className='preview'>
                   <h1    style={ isChecked ? {fontFamily:type , color:"#FFFFFF",textShadow:`0 0 10px ${color},  0 0 20px ${color},
    0 0 140px ${color},
    0 0 160px ${color}
   `} :{fontFamily:type,color:color,textShadow:'none'}  }>
                    {tat}
                   </h1>
                   
                </div>
                <div  className='mainCard'>
                    <img style={{height:"100%",width:"100%",borderRadius:"15px"}} src={image} alt="" />
                </div>
            
            </div>
            <div className='priceMain'>
              ₹{price}
            </div>
            <div className='onOff'>
            <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-14 rounded-full `} style={isChecked ? {backgroundColor:"#03BBC9"}: {backgroundColor:"gray"}}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
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
                <button onClick={() => setFont("size")} className={font== 'size' ? 'selectedButton' : null}>
                  Sizes
                </button>
            </div>
            <div className='resDiv'>
                {font == "input" ? <InputDiv change={handleChange} /> : null}
              { font == "font" ? <Fonts click={handleClick} /> : null }
              {font == "color" ? <Colors yourColor={handleColor} /> : null}
              {font == "size" ? <Sizes handleSize = {handleSize} /> : null}
           
            </div>
            <div>
               <button className=' items-center  mt-10 rounded-lg right-2  w-20 fixed bottom-2 h-12 text-base text-white' style={{backgroundColor:"#03BBC9"}} onClick={() =>setOpenModal(true)}>
                Buy Now
               </button>
              
             
             {/* <button className=' items-center  mt-10 rounded-lg right-2 border-black w-40 fixed bottom-2 h-16' > 
             <a aria-label="Chat on WhatsApp" href="https://wa.me/916260512625?text=hello">
           <img onClick={downloadImage} src="data:image/png;base64,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" alt="" />
             </a>
             </button> */}
             
            
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
            <div>
                <Sizes handleSize = {handleSize} />
            </div>
            <div className='h-auto w-full p-0 mt-10 items-center flex md:p-5 justify-between mb-10 '>
            
             {/* <div className='border-2 w' >

           
         
             <a aria-label="Chat on WhatsApp" href="https://wa.me/916260512625?text=hello">
           <img onClick={downloadImage} className='w-full h-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAACECAMAAACgerAFAAABDlBMVEX///9Aw1H4+PsvwEMqv0DP7dLr9+zO19v7+f7//P8+w087w01Bw1LM1dr++v86w0wwuEP19/iy0Lfd6OBItlbX3+LU2uFRw18xvENeuWm92sPw9fPs8PGj3avk8uh4v4Fou3Ok0Kjg5ujV69pjy3D3/fiCw4ms1bOo3LDj9uXF58pPxl3W2uOP15h404PA6sVtz3nS5NeV2Z2B1YuUy5wuskFDuVJWuWBfzG2LwZmBv46f36bb893L4dBkxHDb6d+xyL591Ye4577C088ZvTSXxaR1vIOkx7GX0Z+GwJRywnzn5OlQrlxev2ru7PC708C0src6skq327xouHaAyoiox7UAuSM9qkwXpSxjimXgkwgZAAAbz0lEQVR4nO1di3/itpYeLJMY2bHwBIITG5IAgQQa8uTRTCAdNm1ZbrN3k2Zv7/7//8jqSDJIfoAh6bYz4fTxC7Yl25+k7zx0JH/6tJGNbGQjG9lIGtEc369Wq0Um9A/fd7S/+pk+iPgU9e0Yoe3g/NXP9p2LUw2Q36H/BgI/gjbYNMGfJX41gH4HujplHN+h4gMP0QGxs7NpgT9Ngn5Pka/6sfg6/mxobFrgfcUvBrj6C6+bN0Fx0wDvJQz8nbR9OhgnxcUttZF04q+O5hpFNhIrTpFp1FXJ3OFqeqMD3iZVRjvroBg0wPs/04cRh9k66yLoVHc2DPQGYV3/LSYMZ67NAFhHHGbvvLHv+m9twY8qHLiks1vZ8fnXzuVgMKhfdr6ej7NbCRdqbABsCGhFAd6O7/on918u20jXXUKISYWYxNV11K6X70/irvc3BLSyMK0ZwxknFx0LIRPjTEgwNhFqdy5iWsDZWEArSjGeeO5vLEQiyEttQFD75j5SjBFQIo9tJCzFOHPz5GKA3AXYixZApB4dAjCYitkPIUlKMLVoxRhleTIuIXMZ9sEQGIzDDUDx3/vR1dF3L3q7Pvhy/5Y2iEO/NUgJPhMTDbKhCqgC3vs5v3TwfPuCMSa6VV97FMSgf3aDyGoPYeo3ofsD/j9+APiZUDvEumydrYF+NWpwji20+hO4mYtQxRT/uxVb8RsW2gIk3AXXQX/rRl+r02L95iRc9fbRx8GfacEVG8CP2Dz37TW6Phd9oBqhtP//R38FFfLtCyaPrRXQBw9JNdDHq6jckFiEqARU3N77qfdR+F+IPgiR8AIBtascKOtvujfWT5Xqtqn5477Te30rgvXz2GBMVKrhSMP5o/XGm+tluT46uvZ++Uj0zwSVUuHvh9Xuuf5W9Cn+X5RbUPovfDD6oQPgcZwC/jDxvwf6Yfwp/f+6iH4w0kFmIwSzn3Pbi7CfKIPUw3930ZfjD4EZ+feXNzOPuLXCP4vpB1u7jud52kRcggs5+tPx2gJocqrB75aepZc5TuqBhCE0bv6FrRVSglFxQtQzfpvWnQvWZd0P9LPA+nFfbE3T7AMxQkgDfmrGkbC/0BB+5+70rAGHU8PfOwKp/43xL6rUc7+2uR8RjGT3u7iz92Ny3WSaA1x3LY4U+czgt095CZz34KfT5/BraeE393OGYdjlv1LrqyQQFpiUkqyerfY7+kdmW1L9zs72XjJsuOcArlqfXYGxz2A2hnle0b5oHLQy/NCIfyn8GC3Cv6i6u19RiPixCXOLa45edCNVXd1ZpH3JFQBrNxhSuK9x8UvszmTCYGy63yD8lITDYWCp86sOV5j4McrULy/rA7zemLBk+l/c/ckxQ+qFNRCZ2AJ/Tv7kn4B67pB8i/BncLL9X1SmY88s9b0wut46Ofl0cnJWWg9/jKXYE3T/RCDMI8YvD+wJ3BeDo587JpkZFzklPIcfE4QQUZ4KBiocJGKwYkwE/AiLWerZJXhRQRa9Z0UwnJCunh03SaSWZCHtdJ3/q6obMZqZrfdr8o9MP9r2gu6P84z8PWAbbPkCfk7+uM+a5grP4DfdUqPZbN6N8rMGwKg3ujumB4/vRl0ABpdKJabQ7VP6F6uXiEtuX0vuvKAbHG2M8gLREhN6/SE9cTwtIdF6wXHr6JYePwyOL0UhwfxRO38rZJkgyWm4WTNmIxNfdXvvPxO7PxoKggk4g8HPyJ9cM6v01M3Mev+xb+TsXE4bjkSFpHS8q+Vytg1HH24tM4Navu9xDULlBWXM3q24xM75B7OChSY/msvlnIe7DACav4Iiv+qNXXZC8245LZDPcPzKnT5o7EZ+s5eO1x5j6cdRgj0nA2UsW+haujSbdqSFhNSl2y2y/YV6PUbBn/8wAvJ3D1jL7JsB/L8NjYCd/BHXDlMvJw5Bq+Wu2nSk2LMDmt1C5uBBusR2uJZHr75ScAhA53fpodzn2+CMYQ/Zc6PPOTDA7rzguPHwlIqViQyl1B3lzj9WrR5yqTTZ5Xr6y3qUtG9x+4dfkh4X923GMJRtXBgIuWOwhXK3hPZHQMPwKDAC/n/k5oA9AD2ZI435YwZlMHZF7gDgF40Etn8LWUNGYYbmsMOGM6VvREY2L8j/owWbpoBf+y+bFeXNfAXNwuBn5Q1xwt5NpxX1uPi/2vlDJj9S7aXxmv6YOZi3or+z91PiINI9wTa4zTrf0y10taErzFBjSDIB/BRiSgLizymMjwcG4lXjsvM65G3TRxeVWoUdrtRqlbHeYOhXGp3R64EWtDQH2hg2Rp0GLwgRDX4UblM7qPmiWVAAPzRd7WDo5UQ7p0EBl6Lo+4rDG8JXsdlZ66zHPpbc8LS9+0nVIG5dHpmC+vMdgzcHYcDZkzn8xtWo2+02nAAXc5+NnKFLXRTiBkoE6TrT2faXR11HqMXjFYheoh+zakamcLZbCArmh+IBAviNqycX6T3WWNTlxgH8xu6Ri9Azr0SbpqKFmO6vulwq82cizsL1mt2fXM7rqG7/cJc0WLmCpWxDWLe/0p89jpHbZCQO85UCfi9DNRHWb3nPRRlagvILU9u0nldbU3Q4t/vzzK/TenB7XPKh5B2h3gYU5FPRvJnn8Bs+s6uwUD3UBhbwe31mDutNJU61WPBgMfdkVXRlzuBytq7vq8+nfp0F7IMLrAtnXUH9RAfAqC62GPX7oPs5/Llj9qxmnYFY0Sn1n1O55uMTxcPv1nhjdRGhpnsXhN5zKhechOB/5f3afHLEfTj84vYiEmUIz3yZPC7mno46htzzSGt11nQeZQuKtnii6a8DUxvVXhvY1p6aBEa3kUUleHv7M3QyDr/BrR3cZe1CYclQvwkSr8FJ0o92jTj40QsnDu+f1/t5FHhYUkE09VXy8briSXnLOc9YqN5REIflg2G0nvGj2D0noezlmImC1pqhaCxF3qo7PxwmtaJ4mzqn/i42v7Je3ztkGLKuqAYd8jP4waXSu/3z289DYYBG4Md9R+hTat9fHe+7wdQC0Z+fzo/nBQP4jYfgfRELiBhPJjc8q4HxTM5Ze6XMYgrb/kWZe8LRnpg40cmakQfZhqK2z6/5hMvIK3ubhqD+DBbkf8rI5JkZ3knwk+7trgOekBFYnmH4afW+HVj4Rs7YbfDw0vNxqOAM/mFAx+TO5iaWsPuDF6DmLtdW6VBQla+jBBzCZj2KSZUrrzcLaUlEpm1v/2QlsA8uMI4dCuqnzwCDPvffe8zYYFgkwY+E12WAj3oVSz4UxV5z1wh8AdoCTYo/OXRmBZ0HhXyMAxV++5pw+B/Wg5+odO7LufwnmRAmKCZPaysJuCUis09xgempP8z8T+PGDKKgDqP+5iL4zX1GLLZz9VKe9qaxqheeg+D98tDXhDNLLR/ziHX5HC/IdXZi7z8Ken9APmbHWAF+rEJalc3ObJjX43r/SX1N9iFn0l1/+D3pcTnc3MoGrjG/Bj81m0eeE+BnNhLtrgUTlj4lwM+CldQtsPYnD9xHfnAJN3FeSrSgyWc45/BXZtzPLMyA+7WZqbMa92d0hfyL8hzvddh41aOrVdb2vOSIn7+992PS45rTGTcztYd7QeRTc/iAj4cfP7MyV3lmzpDzWPitHogFzYBwg2kV/7nACg55+JOEDM/ZtEJetXxmjhZiDoF2mbJTqrbPnqx5I/1aj8mRK4enwtKKO/egqcb5KclPEbpWEy6+IH8OLSeCBPgLPK4srmlG4KcnzEsIVooAHdY5oD12PifyK/h0v2T3N3n3J0fBI3D4aXOx+5sFZvfvps2fNOU4gqp5I9eiaIwuPBmTXmQfDnRv0nU86Azv9Mr7Y8BGtuDXBPj7InTAOr/layr8FC5q1Q98CJQ1GXJYlHT5+RfWbqTEC0pBh6luYhMVrgKKD2I+ty6hNGbyIMVL2lC8Ketexek6i5j0cqhAUM/l2mma2Jprne1FQecAbodfYnYC6hdx3QT4uzxYNs0j5JZYToo6cVBrvpRddty47dFrek1W6QEq8CDCERSsD40Q/JrWHJUGtzycB508gN95mZYGh9xQ8NJ5XSEUAP4FmjeDzbDpc7Mu9YDJMdckVOXsJ8HPLTmgfuHWB+TvCVtvsep1hq1m1udRfhsUIi6J+uxcS58y68iotpotzi3Ok0keRMGX5lDcyqbtFvR+Laf5wXQA1BfAr9mG74sA9XH6WIAuz7zKhs9pBH4rnB/05S0JQGiuSYoLTB/c9WXqD9z9uQmeZHgecSwMMOsNVod9ylzdA4GXcYHILcdfmP4GpZAMt5KUgqAJRNDhYGaIGVqTxTx40CEYG3D1wQqMHIJ/bvicR7ENsc+bkt8sKdeFWp7J2YbogOVF5V6DmUCISBpG7jywNWAKxTZm8NOzOeZ2TYQxTy8eFjw43AK8zNKVwWqwqWIgDc+YOV3C60W3GneFDVs76Du0duDyoF0PRKvmnFs8m+2ihmfTsUWZl94Ktngi/HHRNDXssOZklxDJ7/UXJXuSwwMmgclnjtTf5Fj+mW/CD6Y40dNBhbpnTuWgkUc/w+HPzEo2rdfPtQoVsG5IrzH0wIlzvOGdmKWlBcF+oQVfXcLq+2wFmll3X2s+nHt54nPqAfxoygp5B9OUc+1cZPgpBzsLwXW/vhv3ZMiNDP8CP4XwZbKzlzJDv4nyk/8SF3YLo1EhD8vv5YsgIWWWO01/5AtPo6dCd75KnxV8ogVNUR/Bc1Yj6PlpxM+BzNwuE473uysuAUqEP9adVWYbw1ORqwnppIT/LYJTZePhSMozjhSUvF56cn5O8nrh+Kp2eCL8gzhsSV32ksNZKCuJpEj+PPjfT0JBh5mEgg6rymrwh2L+bzA8qc+5gX9l+DGR424npfVR28APshr3qzlSnz7dL9/YJEm+OfIBa3UrDn5wD94d/iSzEikLtC7Wtv3/X1Tv+0l+uEvlKqLtyM/s+HvAr9j9iVa9q8Sd15zuUkKe/s7fH37MXjPGn006nq5WOdFcgf9rUjRNWaDy6dP1mvhLo2ih1/t3kSCRPP7EmpUqEU8F/uQUKldNdotfdLps9YUl5UpXd5JjPnGy7IXfAkhSfe9YnSRKvF8JuS1g9VBu+nX0Sou0S2SxWpZm+YvbPxyt5MHlqUCIPu/GpUhY/PS7CavvfVbWhkVZ5KXE++8XKFWkTjuWI4ua0eXWCey2hxOfGuO5BVtcbX27O4GwjmX2j2+PD6MTBbgNcZrXWO5kS7HN1aA0e3fHt7e/LbzGMtdb2q3M9Toy/CcLXFplgRCMlIz6sjjDzm99aSeGQHA73XRL3DPXbMM2Su7tp5ztDSKsReo528i9xPQenJmeUon3aBKF1DU7l2ss5B+zM169YtDnMvyaMtm4aBKdhNI9zy6Vpp9FRmkD6An+w9zsh7neVciCz8pS+HPUD4o6fhQuTbPjuBPnh7CQZcXEYDLwINNrIfz6KVQcE6NfUrWa56MkuS3K37TQZSg/rpyZBR0tednwSbkU2wDSxDG1O/9nlUnLAP67nGHXomE/Dn/cZATOQx6Ccb5aqIQMnBTw26tXHMkdUUyf00VtaemhXP9PZzcu17VWaBnASTmOgiTNW02xtYy8lljAb5auz68vucWNTTjPEZLgDxmLpoBfny1zJNLSReV2WKovgB+m0qUFjSwTl1+COfw3K4X6IYIT2WNtbvqcLRxKlh7Jd852IKJuufXwiZPTdrh3C+3ApLi9t8Twwa5bOLp5KvAGDuBHj4+PbGRhkn8e3XT6zyw5R4IfTJb8TP1TC+aFw8/sGNPtPd3cjP7IR5eoYfe5fzOl9cEpAb+L3P7XQleAQlyr/9QZPfXgEpzXywx+fbX9MUlocbuaX744gyoG/0/359S0aMcs2Tv5Gure8rzlUs1rdicVT7MdrzKBBO+AfF5r97UWVb04v5+lpw2vku3T95/D/wyTWlvDZ145GVUqfKVqxaubtFCt4hi2tls7ClvIqNeqeIbhVLL7LrY4/IfdcW3XeKg1AGGc77cqjmM4TqV2lCf1SsUTFTdW0b6R/H5ldcXNYk0S5R8qW+UvsTv2haYG5JnepZqXlGoiD9mwHwrmDP6mTSG6JNi9doJpde0ujwP4sfsAk+XOoajc7cxTaTtufqIFhYyWgj92p96svgsdM/iNY6gMjgD++d+d4IkMbeJ2tFnFt6tsMRtJ3CnK+6Yu28nE0sP6N1nCMzOunOK59/Mi6sfPfP0he+HcQwEH8B/TAe/VSX4STIzD/w9dAf+jfgFM4836NunkxNx77tOlK7anYQdsBX93xNMe2P2oBcXgZ+sWeQbKgJhHLEEiZ/PVGb9dBnPzubS5tUyiSZvqstJl+ZsWKqXdnPJChV/mniU+L86zRKvc1mTM8GjpKvzoN8jGMZyXU4/BXUcAv9H6Vwvo2DmaaR3cazQeWJpy4zZfYi3q1LIsQcGWNhU1LbZE165NaiwJ60bn8Hut0xb8kTvMu2zNjdbQD3n+invYGLL080bjj/TkH+38oTTDpXPpFsHJW3MoUlaqUvbV2ElO72dPWfdYcj9Vfb9BLrfXV+HXYam0Ufk3Qv+GzCrjFwE/ZNUa3r6k8zFhK+KM60fC1jQaV88IdQ/gurO5znS/ssSdr7rrMnOm9sjg9/YRcmGTiVwzn3Goke/8jshjE6ppEfLILR99lYXmjzEZy0qO89bykYTV8H+i3ChVybl1sLhl0UOjcwC9ZpmUlJuao3mdRwX+PHRFpwBrHM/hw50Ntz6jFa+vWFzC7r9GOM80JVWsGfIMres9B4+AMWTV2pBkZvaoetU4/EaFPgBzwIxa2y1TH3f6SC2nGocfB3Z/evAzsXv6qOyTGHSW8a+n2B9azUO35DYD7lnUzC7sJGNPmBf13KfSU3t/HyDxwOLG7HSBcT/XhA/P6v4mAfwZl3V+MKMwz5qbrcTFFjSnx7bYtQpQnwvw26fUwjfb9FoKPzV59cHr5PiKrwlYC34cMXtAVPa5T+NHELJsb7jwElV5SzHY1GER93DqF2/GtsFTVe/gCeC/cIPTBM/hp62m2jSz3t9ntILYswAP2TNyxG1A9IpnqrFd94Tdb2bm8OfPD6jNGhg/a8GP4llbYZ90iWw4ukd/WNQABpI8BrB7FhlrONOcvxkELJEZA/+Yww/ZU0TAz/Zk8JSNomfwm08MfjcTBz/Tzhx+qA/Ngw4B/OiYVW7bmqPAv8RSlyWaLR7AIXteKafSTdSJ0SNzCcUvJKuT7SmwEP78LZAPm1PA/YvxRbkUA38FnhN3Jxfj8VcOf67JFPFQ9kND5FNjdbpZ5gnPycdhqeOMfF7H44trPQy/xdejDsennReF+19Twx9j9XBRN5RZ5nrNXsx1O61EJ2CscJgl76YKO2os9lRcWNdvtCiMmAJOe1xI9RZAdTpA8mgKW+rccstnN//KxsC5bPrMVS/UUIEVAmaXqe5ZF8CYNcdEt6jq9Wh9lX+F4c9cs8br6vrj2FbIJ23eAY5bpxXX/c/CyxsThaDSl/hKv6jzEEqQG3LLl8DfYQ59wyXuH0ydFlTVy1Sn8fJISJcZ31OduV3NR36iIk3kCPjLj4gtUTIOuojop+yq7tzwvGOWVg8Rl8HcepwFnAX8uAzHT3XT/PdQ6f3UOE7l9GKUvJd8qPuvsHG5icjlOGIG3V+qNSi7+cBOqkvCVDjfZOZ+6+iaOQAvbsju5708+zrlcJeQCDqQPl8TPOdP4cF5tUrpiKnN2mTC6hK7JfK3YMPJqJSPXpgOGUXIJwNutvHwh1U4UFSv5tRq0zQppQvQD2+iutrKUaKTzlj+ZN39OSJqENztKPdanuPgPvEteBww84zdPgkHHdgWVbAlEgPSnYXc8qcM42t39gAu3w7RyHXyTUNEEpiHK3cB95bVZ/CVFy2XhHu/dRRE7owAfhRUnCLmsxj9cPe/WGkKx8JER6Xz8cX92Vn24vQShUsrK5Sg83eX9hd3VAnWjhi71I1l8BsU/hzFqE7Mdna+QuK4Sw1PMGVedErjlZD1Qy45YnYHWa1ZnMxQ52xwtzmvLwshPMcwbA5/xYCr860gWMd6xBl96RJf1WUvh38J+mH2L6+exmwi2KsIyduPz0RZnZqm80OwoPDiOfCyTqtPqcTNao7jldwJ7X+1OsmYVqPCOrJzdkgbk/ZW6qyC20qO6F+OJq1SczvgyGrGiOBuo+JAKcebWCHM3Jvg1CmtnNQhbj1l8Le8ylarTawWP1/5310HHoU6xE8PbKn90oDzUvSX7OyQTqzZ/1RBykpKYP40tZnu89HpuDz9g82nWFabisV3fmGLQkl+fzI+nfRd/jNvWT0Lbk7/oBdb8+fAxGo/HTb2IU2FdH+7Pj2d7EenW7Dp9hv01JHF15wG9+F/wfLIfP+1fDp5cvMZuAPUj632Pq94oRBzaZDMl9N90ps+aQTJM2HwAYv9lJsfiC1Sg1lCPoVIbVHxcHwP02AqcD7FGE1N49OIQSEXJUw2ij1R57UEpcUtYbsfKCrdypxVnCx6kr2vUILk+K5G/UuEKDNh1SXfT/juxEzx6YSQ6j1/R4BMJT3ow309RL9M8/E6ZcL3ZOXUoWQxTfn2QD1/+7zm9xOMHtN9ObC6I6c7rLlTbVQsklHuX1ywidV3Jxgl7dkcEYX6190pNSKW21bQp9btR6Ee6gqZacEPmZ0pJlxSiYUGyrQwfLU0cQO970ko9u3rFT5YqmwotrXubknhhwh9NBOIP3ELpe9FYKd/vXS+lTodBETZQD77LtxjmaGJTUD/Z/17l/r5zfhkJew/hdbXhXIdMFmnx2K9pLp68A3yvdrW9y6rIi86phTwkcKd1BNH1mVn9c+WEhT+UGRxJ/oN8o0wUVIdtrhDbWETIbN+fkG158VAT16yEiOmXg9HOeK+AL8RLtGIAyaIDG7GZ6ILQ754an1solLEz96gnyxOKMmWINS+Kd8r7AFLVlJlQBBUKocJEG4Q/gL8RgJRIw4Zq1POxuWLn9bRsiGAkXs5jpQF9Dd9P1GUtaUnreQM2ux5m+qDhCYAXdG+jpl4h+8RbtBPlmLoI9UL5CT7ZQBR8XA8nfoaZPAlbtCwD9Gmrv8DihP+QvsSObsod9oEzV0NRNqd8kX8oHHA4Cxu0E+Waugr1ank5D6bbV2MxxcX2exZsq/Bun418fRGwhme7ynO9ob2l8qfRs3AOxviWSL+Qu5x/OKavbe66fpppJpIzhR66i7Rf9bAkIG/U910/WUST/2OTwGE7guys70ajg7v+euOm48kMWan41WLAfbFapVR+E56LGHMbMBPKcpE1yfoucVZny/yTs/xpENgOaAwaLZXa62PLfKOGo4fQA/dXgKQHheDwU9mIceZXZaioTbCZFtMdDGyD0CuRlCeDwo46zuaepaWls5vFG5acSjgAH0x0LMx0AeXzmmJKdYi1QtUMxQFNW2wX0NgnlHu14vBkzt5gPjOduriG4nIDLy02NEmqM5bTADPCOlPftLvUvyInk0lDqV7Ic4G9zcIBXKD30Y2spGNfCT5PxwULBUImRhFAAAAAElFTkSuQmCC" alt="" />
             </a>
            
             </div>    */}
            
             <div className='w-full' >

                <button style={{backgroundColor:"#03BBC9"}} className='  text-white rounded-lg text-xl w-full md:w-40 md:h-12 mt-3' onClick={() => setOpenModal(true)}>
                  BUY NOW
                </button>
                </div>
            </div>
       </div>
       
    </div>
   {/*                 
   
   
   
   
   
   
   */}

         
        {
        openModal &&  <UserForm text={tat} color={color} size ={size} font={type} closeModal={setOpenModal}/>

        }


    </>
  )
}

export default Editor
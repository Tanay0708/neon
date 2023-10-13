import React, { useState } from 'react';
import './editor.css';

const InputDiv = ({change}) => {


  const [text,setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    change(e.target.value)
    
  }

  return (
    
          <div className='inputDiv'>
                <h2 >Enter your text</h2>
             
                <input maxLength={35} type="text" value={text} placeholder='enter your text here' onChange={handleChange} />
            </div>
  
  )
}

export default InputDiv;
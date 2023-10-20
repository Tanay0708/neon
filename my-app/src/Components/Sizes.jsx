import React, { useState } from 'react';
import './sizes.css';

const vari = [{
  type: "Small",
  base: 800,
  letter: 150
},
{
  type: "Medium",
  base: 1000,
  letter:  200
},
{
  type: "Large",
  base: 1500,
  letter: 250
},
{
  type: "X-Large",
  base: 2500,
  letter: 300
},

]

const Sizes = ({handleSize}) => {

  const [shape,setShape] = useState("");


  const handleShape = (e) => {
    setShape(e.target.value)
    handleSize(e.target.value)
  }


  return (
    <>
    <hr className='mt-10' />
    <div className='sizeHeader'>
      <h1>Choose Size</h1>
    </div>
    <div className='sizeType'>
        {
          vari.map((el) => {
          return  <button value={el.type} onClick={handleShape} className={el.type == shape ? `selectedSFont` : 'singleSFont'}>
              {el.type}
              <br />
              
            </button>
          })
        }
    </div>
    </>
  )
}

export default Sizes
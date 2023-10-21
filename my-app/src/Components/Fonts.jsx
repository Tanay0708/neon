import React, { useState } from 'react'
import './editor.css';

const Fonts = ({click}) => {


    const [type,setType] = useState("");

    const family = [{
        
        font: 'Amanda'
    },
    {
        font: 'Alexa'
    },
    {
        font: "Amsterdam"
    },
    {
        font: ' Austin'
    },
    {
        font: 'Barcelona'
    },
    {
        font: 'Bayview'
    },
   
    {
        font: 'Beachfront'
    },
    {
        font: 'Bellview'
    },
    {
        font: 'Buttercup'
    },
    
    {
        font: 'Chelsea'
    },
    {
        font: 'Classic'
    },
    {
        font: 'Freehand'
    }
    ,
    {
        font: 'Freespirit'
    },
    {
        font: 'Greenwood'
    },
    {
        font: 'LoveNeon'
    }
    ,
    {
        font: 'LoveNote'
    },
    {
        font: 'Marquee'
    },
    {
        font: 'Mayfair'
    },
    {
        font: 'Melbourne'
    },
    {
        font: 'Monaco'
    },
    {
        font: 'NeonGlow'
    },
    {
        font: 'NeonLite'
    },
    {
        font: 'Neonscript'
    },
    {
        font: 'Neontrace'
    },
    {
        font: 'NeoTokyo'
    },
    {
        font: 'Nevada'
    }, {
        font: 'NewCursive'
    }, {
        font: 'NorthShore'
    }, {
        font: 'Photogenic'
    }, {
        font: 'Rocket'
    }, {
        font: 'Royalty'
    },
    {
        font: 'SciFi'
    },
    {
        font: 'Signature'
    },
    {
        font: 'Sorrento'
    },
    {
        font: 'TypeWritter'
    },
    {
        font: 'Venetian'
    },
    {
        font: 'Vintage'
    },
    {
        font: 'Waikiki'
    },
    {
        font: 'WildScript'
    }

    ]

const handleClick = (e) => {
    setType(e.target.value)
    click(e.target.value)
}

  return (
    <>
    <hr className='mt-10 mb-10 hidden md:block' />
    <div className='fontDiv'>
                    <div className='fontHeading'>
                        CHOOSE FONTS
                    </div>
                    <div className='fontTypes'>
                       {
                        family.map((el,ind) => (
                            <button key={ind} value={el.font}  onClick={handleClick} className={el.font == type ? `selectedFont` : 'singleFont'} style={{fontFamily:el.font}}>
                                {el.font}
                            </button>
                        ))
                       }

                    </div>
                   
            </div>
           
            </>
  )
}

export default Fonts
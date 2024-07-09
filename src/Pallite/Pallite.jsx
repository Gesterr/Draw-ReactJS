import React from 'react'
import './Pallite.css'

export default function Pallite({onClick}) {
  const colors = [
    'red','blue','green','aqua','black','white','#c7870f','yellow'
  ]

  return (
    <div className='Pallite-container'>     
        {colors.map((color) =>
          <div onClick={() => onClick(color)} id={color} key={color} className="Pallite-box" style={{backgroundColor:color}}></div>
      )}   
    </div>
  )
}

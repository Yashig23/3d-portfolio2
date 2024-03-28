import React from 'react'
import galaxy from '../../assets/galaxy.jpg'

const StarsCanvas = () =>{
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <img src={galaxy} alt="galaxy"/>
    </div>
  )
}

export default StarsCanvas;
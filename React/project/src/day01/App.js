import React from 'react'
import { useState } from 'react'
import { FaBeer , FaCloudsmith , FaDribbble } from 'react-icons/fa';
import { BiAdjust } from "react-icons/bi";

const App = () => {
  return (
    <div className='Main'> 
       <FaBeer />
       <FaCloudsmith />
       <FaDribbble />
       <BiAdjust />
    </div>
  )
}

export default App
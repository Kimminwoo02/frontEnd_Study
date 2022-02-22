import React from 'react'
import { useState } from 'react'

const NameChange = () => {
    const  [name, setName] = useState('로그인');
    return (
      <div>
          <h1 id="name"> { name } </h1>
          <button onClick={()=>{ setName(name === '로그인' ? 'react' : '로그인')}}> click </button>
      </div>
    )
}

export default NameChange
import React from 'react'
import { useState } from 'react';

const Section = ({img, name, onclick}) => {
  const[count, setcount] = useState(0)

  let increment=()=>{
    setcount(count + 1) 
  };
  let myname = "rate: "
  myname += (count === 0) ? "low" : "good";
  return (
    <div className='section'>
        <h1>{name}</h1>
        <img src={img} alt="timelock" />
        <button className='btn' onClick={increment}>like {count}</button>
        <h1>{myname}</h1>

    </div>
  )
}

export default Section
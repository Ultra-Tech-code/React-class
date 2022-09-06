import React from 'react'
import img1 from  '../images/Nft-rare.jpg'
import Section from "./Section.js"

// let count = 0;
// function increase(){
//     count++;
// }

const Body = () => {
  return (
    <div className='bodyElement'>
        <h1>Five <span className="smart">Smart contract</span> to write on as a beginner</h1>
        <div>
            <Section img = {img1} name = "Time lock" />
            <Section img = {img1} name = "Counter App" />
            <Section img = {img1} name = "Token contract" />
            <Section img = {img1} name = "Todo app" />
        </div>
    </div>
  )
}

export default Body
import React from 'react'
import './about.css';
import '../App.css'

export default function About({abt , set}) {

  function close(){
   set();
  }



  return (    
    <div className={"content"} > 
      <div  style={{'display' :  abt}} id="myModal" className={"modal"} >
    <div className={"modal-content"}>
      <div className='header'>
      <h1 className='fontFamily fontColor headerText '>About me</h1>
      <button onClick={close} className={"close"}>&times;</button>
      </div>
    <div>
    <p className='hiddenText'>Text</p>
    </div>
</div>
   
    </div>
</div>
  )
}

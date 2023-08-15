import React from 'react'
import About from '.././menu/about.js'
import { useState } from 'react';

export default function Mainpage() {
  const [abt, setAbt] = useState('none');

  function setAbout(){
    if (abt === 'none'){
    setAbt('block');
    } else {
      setAbt('none');
    }
  }

  return (
    <div className=' d-flex justify-content-center'>
    {abt === 'block' && <About  abt={abt} set={setAbout}></About>}
      <div id='content'>
      <div className='logo prevent-select'> Dextwelwe</div>
      <div className='menuMainPage prevent-select'>
      <button  className='btnView' onClick={setAbout}> About me</button>
      <button className='btnView'> Projects </button>
      <button className='btnView'>Photography</button>
      <button className='btnView '>Contact me </button>
      </div>
      </div>
      </div>
  )
}

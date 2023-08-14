import React from 'react'



function aboutMe() {
  return null;
}

export default function Mainpage() {
  return (
    <div className=' d-flex justify-content-center'>
      <div id='content'>
      <div className='logo prevent-select'>Dextwelwe</div>
      <div className='menuMainPage prevent-select'>
      <button  className='btnView' onClick={aboutMe()}> About me </button>
      <button className='btnView'> Projects </button>
      <button className='btnView'>Photography</button>
      <button className='btnView '>Contact me </button>
      </div>
      </div>
      </div>

  )
}

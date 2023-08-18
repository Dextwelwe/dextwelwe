import { useRef } from "react";
import React from 'react'
import '../menu/about.css'



export default function Projects({projects, set}) {
    const modal = useRef('');
    const text = useRef('');

    async function closeModal(){
        modal.current.style.setProperty("animation-name", "disapear");
        text.current.style.setProperty("animation-name", "removeText");
        }
      
      function close(){
      closeModal().then(setTimeout(set, 500));
      }
  return (
    <>
      <div  style={{'display' :  projects}} id="myModal" className={"modal"} >
    <div ref={modal}  className={"modal-content"}>
    <div ref={text} className='textContent'>
      <div className='header'>
      <h1 className='fontColor'>Projects</h1>
      <button onClick={close} className={"close"}>&times;</button> 
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

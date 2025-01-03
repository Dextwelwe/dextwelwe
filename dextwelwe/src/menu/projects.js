import { useRef } from "react";
import React from 'react'
import '../menu/about.css'
import "../menu/project.css"
import screen from '../images/other/screen.jpg'
import screenGrocery from '../images/other/screenGrocery.jpg'



export default function Projects({projects, set}) {
    const modal = useRef('');
    const text = useRef('');

    async function closeModal(){
        modal.current.style.setProperty("animation-name", "disapearProject");
        text.current.style.setProperty("animation-name", "removeText");
        }
      
      function close(){
      closeModal()
      setTimeout(set, 400);
      }
  return (
    <div  style={{'display' :  projects}} id="myModal" className={"modal fontFamily"} >
    <div ref={modal}  className={"modal-content-project modalProjet"}>
    <div ref={text} style={{overflow:'hidden'}} className='textContentProject'>
      <div className='headerApp p-0'>
      <h1 className='fontColor'>Applications</h1>
      <button onClick={close} className={"close"}>&times;</button> 
    </div>
   
    <div className="skillBoxProject skillBoxProject padding10">
      <div className="row">
      <img src={screenGrocery} className="imgProject col-lg-4 col-sm-12 col-md-6 mt-1 pt-0 " alt="website"/>
     <div className="infoApps col-lg-6 col-md-12 col-sm-12 mt-1">
      <div>
     <h6 className="fontColor ">Grocery app for android with user authentication, group groceries and offline access</h6>
    <h6>Dart &nbsp; Flutter &nbsp; Firebase &nbsp; Sqflite </h6>
    </div>
    <div className="buttonLink">
    <a className="fontColor btn borderProject buttonProject" href="https://github.com/Dextwelwe/grocery-app" target="_blank"  rel="noopener noreferrer"> Grocery App <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg></span></a>
     </div>
    </div>
      </div>
      </div>
  
    <div className="skillBox skillBoxProject padding10 mt-2">
      <div className="row">
      <img src={screen} className="imgProject col-lg-4 col-sm-12 col-md-6 mt-1 pt-0" alt="website"/>
     <div className="infoApps col-lg-6 col-md-12  col-sm-12 mt-1">
      <div>
     <h6 className="fontColor">Website build from scratch using</h6>
     <h6>React &nbsp; Javascript &nbsp; CSS &nbsp; Bootstrap </h6>
     </div>
     <div  className="buttonLink">
     <a className="fontColor btn borderProject  buttonProject" href="https://github.com/Dextwelwe/dextwelwe" target="_blank"  rel="noopener noreferrer">Personal website <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z"/></svg></span></a>
     </div>
     </div>
      </div>
     </div>
    </div>
    </div>
    </div>
  )
}

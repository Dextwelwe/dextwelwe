import React from 'react'
import {useState} from 'react';
import About from '.././menu/about.js'
import Projects from '../menu/projects.js';
import Contactme from '../menu/contactme.js';
import {Link } from "react-router-dom";

export default function Mainpage() {
  const [abt, setAbt] = useState('none');
  const [projects, setProjects] = useState('none');
  const [contact, setContact] = useState('none');
  const [invisible, setInvisible] = useState('no')

  function setAbout(){
    if (abt === 'none'){
      setAbt('block');
      setInvisible('yes')
    } else {
        setAbt('none');
        setInvisible('no')
      }
  }

  function setProject(){
    if(projects === 'none'){
        setProjects('block');
        setInvisible('yes')
    } else {
        setProjects('none');
        setInvisible('no')
      }
  }

  function setContactMe(){
    if(contact === 'none'){
        setContact('block');
        setInvisible('yes')
    } else {
        setContact('none');
        setInvisible('no')
      }
  }


  return (
    <div className='bg'>
      <div className='d-flex justify-content-center vh-100 overflow-hidden'>
        {abt === 'block' && <About  abt={abt} set={setAbout}></About>}
        {contact === 'block' && <Contactme contact={contact} set={setContactMe}></Contactme>}
        {projects === 'block' && <Projects projects={projects} set={setProject}></Projects>}
        {invisible === 'no' && 
        <div id='content' className='bgSmScr'>
          <h4 className='logo prevent-select'> Dextwelwe</h4>
        <div className='menuMainPage prevent-select'>
          <button  className='btnView' onClick={setAbout}> About me</button>
          <button className='btnView' onClick={setProject}> Applications </button>
        <Link className='btnView text-decoration-none' to="/photography">Photography</Link>
          <button className='btnView' onClick={setContactMe}>Contact me</button>
      </div>
      </div>} 
      </div>
      </div>)
}

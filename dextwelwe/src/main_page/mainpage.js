import React from 'react'
import {useState} from 'react';
import About from '.././menu/about.js'
import Projects from '../menu/projects.js';
import Contactme from '../menu/contactme.js';

export default function Mainpage() {
  const [abt, setAbt] = useState('none');
  const [projects, setProjects] = useState('none');
  const [contact, setContact] = useState('none');

  function setAbout(){
    if (abt === 'none'){
    setAbt('block');
    } else {
      setAbt('none');
    }
  }

  function setProject(){
    if(projects === 'none'){
      setProjects('block');
    } else {
      setProjects('none');
    }
  }

  function setContactMe(){
    if(contact === 'none'){
      setContact('block');
    } else {
      setContact('none');
    }
  }

  return (
    <div className='d-flex justify-content-center'>
    {abt === 'block' && <About  abt={abt} set={setAbout}></About>}
    {contact === 'block' && <Contactme contact={contact} set={setContactMe}></Contactme>}
    {projects === 'block' && <Projects projects={projects} set={setProject}></Projects>}
    
      <div id='content' className='bgSmScr'>
      <h4 className='logo prevent-select'> Dextwelwe</h4>
      <div className='menuMainPage prevent-select'>
      <button  className='btnView' onClick={setAbout}> About me</button>
      <button className='btnView' onClick={setProject}> Projects </button>
      <button className='btnView' onClick={()=>alert('Coming soon')}> Photography</button>
      <button className='btnView' onClick={setContactMe}>Contact me</button>
      </div>
      </div>
      </div>
  )
}

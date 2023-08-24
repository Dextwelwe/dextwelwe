import React from 'react'
import About from '.././menu/about.js'
import { useState} from 'react';
import Projects from '../menu/projects.js';

export default function Mainpage() {
  const [abt, setAbt] = useState('none');
  const [projects, setProjects] = useState('none');

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

  return (
    <div className='d-flex justify-content-center'>
    {abt === 'block' && <About  abt={abt} set={setAbout}></About>}
    {projects === 'block' && <Projects projects={projects} set={setProject}></Projects>}
      <div id='content'>
      <h4 className='logo prevent-select'> Dextwelwe</h4>
      <div className='menuMainPage prevent-select'>
      <button  className='btnView' onClick={setAbout}> About me</button>
      <button className='btnView' onClick={setProject}> Projects </button>
      <button className='btnView'>Photography</button>
      <button className='btnView '>Contact me </button>
      </div>
      </div>
      </div>
  )
}

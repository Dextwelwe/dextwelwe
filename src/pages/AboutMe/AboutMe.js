import React from 'react'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import abt from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={[abt.mainWrapper, 'defaultPadding'].join(" ")}>
      <Navbar></Navbar>
      <div style={{color : 'white'}}></div>
    </div>
  )
}

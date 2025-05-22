import React from 'react'
import Navbar from '../../components/Navigation/Navbar/Navbar'
import abt from './AboutMe.module.css'

export default function AboutMe() {
  return (
    <div className={abt.mainWrapper}>
      <Navbar></Navbar>
    </div>
  )
}

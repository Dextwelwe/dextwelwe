import React, {useRef, useState,useMemo} from 'react'
import { useNavigate } from "react-router-dom"
import './ph.css'
import Images from './Images';

export default function Ph() {
  const navigate = useNavigate()
  const modal = useRef('');
  const text = useRef('');
  const [highlightedButton, setHighlightedButton] = useState('Hawaii');
  const [backgroundPh, setBackgroundPh] = useState('bg');
  let rootPH = useRef();

  async function closeModal(){
    modal.current.style.setProperty("animation-name", "disapear");
    text.current.style.setProperty("animation-name", "removeText");
  }

  async function close(){
     await closeModal().then(()=> setTimeout(()=> {navigate("/")}, 400))
  }

  function highlight(el){
    setHighlightedButton(el);
/*
    if (el == "Hawaii"){
      setBackgroundPh('bgPhotographyGradient')
    } else
    if (el == "Montreal"){
      setBackgroundPh('bgPhotographyGradientStreet')
    } else {
      setBackgroundPh('bg')
  }
*/
  }

  return (
    <div ref={rootPH} id="rootPH" className={backgroundPh}>
      <div  ref={modal} className= 'main-div'>
      <div style={{height:'100%'}} className="textContent"ref={text}>
      <div className='headerPh bg-transparent'>
      <div className='navTopPh'>
      <h1>Photography</h1>
      <button onClick={close} className={"close"}><span style={{marginTop:'-2px'}}>&times;</span></button>
      </div>
      <div  className='buttonNavPhWrapper'>
        <button onClick={(e)=>highlight('Hawaii')}  className={`buttonNavPh ${highlightedButton === 'Hawaii' ? 'selectedPh' : ''}`}>Hawaii</button>
        <button onClick={(e)=>highlight('Montreal')}  className={`buttonNavPh ${highlightedButton === 'Montreal' ? 'selectedPh' : ''}`}>Montreal</button>
      </div>
      </div>
      <div className='photosPH'>
       <Images type={highlightedButton}></Images>
      </div>
      </div>
      </div>
      </div>
  )
}

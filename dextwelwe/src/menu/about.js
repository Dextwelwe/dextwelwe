import React, {useRef} from 'react'
import './about.css';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from '../iconAndre.png'



export default function About({abt , set}) {
  const modal = useRef('');
  const text = useRef('');


  function close(){
  countt().then(setTimeout(set, 500));
  }

 async function countt(){

  modal.current.style.setProperty("animation-name", "disapear");
  text.current.style.setProperty("animation-name", "removeText");

  }



  return (    
    <div className={"fontFamily"} > 
      <div  style={{'display' :  abt}} id="myModal" className={"modal"} >
    <div ref={modal}  className={"modal-content "}>
      <div ref={text} className='textContent'>
      <div className='header'>
      <h1 className='fontColor'>About me</h1>
      <button onClick={close} className={"close"}>&times;</button>
      </div>
    <div style={{padding : '10px', paddingTop : '10px'}}>
    <h4 className='fontColor'>Hey There!</h4>
  <h5>My name is Danil Moskalenko. I am Computer Science student living in Montréal, Canada</h5>
    </div>
    <div className='container flex-column'>
    <div className='row'>
    <div className='col-lg-8 col-md-8 col-sm-12'>
      <h4 className='fontColor'>I studied at</h4>
      <div className='studies'>
      <img src={img} className='img' alt='Andre Laurendeau'/>
      <div>
      <h3 className='px-2'>Cégep André-Laurendeau</h3>
      <h6 className='px-2 lh-1'>-Computer Science 2021-2024</h6> 
      </div>
    </div>
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12'>
    <h4 className='fontColor px-lg-0 px-md-0 px-sm-0'>I speak</h4>
    <ul className='h5 px-lg-0 px-md-0 px-sm-3'>
      <li>English</li>
      <li>French</li>
      <li>Russian</li>
    </ul>
    </div>
    <h3 className='fontColor'>My skills</h3>
    <div className='container '>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-12 skillBox'>
    <h4 className= 'padding10 pt-3'>Programming</h4>
      <ul>
      <li>Java</li>
      <li>C++</li>
      <li>C#</li>
      <li>Dart</li>
      </ul>
    </div>

    <div className='col-lg-6 col-md-6 col-sm-12 skillBox '>
    <h4 className='padding10 pt-3'>Web</h4>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>TypeScript</li>
    </ul>
    </div>
    </div>
  
    <div className='row '>
    <div className='col-lg-6 col-md-6 col-sm-12 skillBox'>
    <h4 className='padding10 pt-3'>Databases</h4>
    <ul>
    <li>SQL</li>
      <li>NoSQL</li>
      <li>PL/SQL</li>
      <li>ORACLE</li>
      <li>PostgreSQL</li>
      </ul>
    </div>
    <div className='col-lg-6 col-md-6 col-sm-12 skillBox '>
    <h4 className='padding10 pt-3'>Frameworks & other</h4>
    <ul>
      <li>Angular</li>
      <li>React</li>
      <li>Spring</li>
      <li>Flutter</li>
      <li>JQuery</li>
      </ul>
    </div>
    </div>
    </div>
    </div>
    </div>

    <h4 className='mt-2 padding10 fontColor'>My Interests</h4>
    <ul className='h5'>
      <li>Cycling</li>
      <li>Photography</li>
      <li>Technology</li>
    </ul>
</div>
    </div>
</div>
</div>
  )
}

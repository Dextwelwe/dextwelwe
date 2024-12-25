import React, {useRef} from 'react'
import './about.css';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import img from '../icons/iconAndre.png'
import hello from '../icons/hello.png'
import cyframe from '../icons/cyframe_logo.jpg'

export default function About({abt , set}) {
  const modal = useRef('');
  const text = useRef('');

    function closeModal(){
    modal.current.style.setProperty("animation-name", "disapear");
    text.current.style.setProperty("animation-name", "removeText");
    }
  
  function close(){
  closeModal()
  setTimeout(set, 400);
  }

  return (    
    <div className={"fontFamily"} > 
      <div  style={{'display' :  abt}} id="myModal" className={"modal"} >
     
    <div ref={modal}  className={"modal-content modal-about"}>
 
      <div ref={text} className='textContent'>
      <div className='header'>
      <h1 className='fontColor'>About me</h1>
      <button onClick={close} className={"close"}>&times;</button>
      </div>
    <div className='Hey' style={{padding : '10px', paddingTop : '10px'}}>
    <h4 className='fontColor'>Hey There! &nbsp;<span><img src={hello} alt="waving at you :)" width={30} height={30} /></span></h4>
  <h4>My name is Danil Moskalenko. I am a Full Stack Web Developper and amateur Photographer living in Montréal, Canada.</h4>
  <h5> I’ve got a thing for both tech and photography. I love exploring new ideas, learning as I go, and finding that perfect mix of creativity and problem-solving.</h5>
  <h5> Whether I'm working on a project or just out with my camera, I'm always up for trying something new and challenging myself.</h5>
  
    </div>
    <div className='container flex-column'>
    <div className='row'>
    <div className='col-lg-12 col-md-12 col-sm-12'>
      <h4 style={{textDecoration : 'underline'}} className='fontColor mt-1'>I studied at</h4>
      <div className='studies'>
      <img src={img} className='img' alt='Andre Laurendeau'/>
      <div>
     <h4 className='px-2 m-0'>Cégep André-Laurendeau</h4>
     <ul>
     <li><h5 className='px-2 lh-1 m-0'> Computer Science 2021-2024</h5> </li>
     <li><h5 className='px-2 lh-1'>Specialisation in <strong> Web </strong>  & <strong> Software Developpement</strong></h5></li>
      </ul>
     </div>
    </div>
    </div>
    <div className='col-lg-4 col-md-4 col-sm-12'>
    </div>
     <h4 style={{textDecoration : 'underline'}} className='fontColor mt-1'>I work at</h4>
      <div className='studies'>
      <img src={cyframe} className='imgCyframe' alt='CyFrame'/>
      <div className=''>
      <h4 className='px-2 m-0'>CyFrame</h4>
      <ul>
      <li><h5 className='px-2 lh-2 m-0'>Full Stack Web Developper</h5></li>
      <li><h5 className='px-2 lh-2 m-0'>Developing an ERP System for the Plastic Industry</h5></li>
      <li><h5 className='px-2 lh-2 m-0'>My current Tech stack is:</h5>
      </li>
      <p style={{marginLeft:'10px'}}><strong>Express.js · Node.js · Crystal Reports · Git ·</strong><strong> ASP Classic · VBScript · Oracle</strong></p>
      </ul>
      </div>
      </div>
   
    <h4 style={{textDecoration : 'underline'}} className='fontColor mt-1'>My skills</h4>
    <div className='container '>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-12 skillBox'>
    <h4 className= 'padding10 pt-3 '>Programming</h4>
      <ul className='h5 lh-2 fontColor'>
      <li>Object Oriented Programming</li>  
      <li>Datastructures & Algorithms</li>
      <li>Design Patterns</li>
      <li>Unit / Mock testing</li>
      <li>Java &nbsp; C# &nbsp; Python &nbsp;</li>
      </ul>
    </div>

    <div className='col-lg-6 col-md-6 col-sm-12 skillBox '>
    <h4 className='padding10 pt-3'>Web</h4>
    <ul className='h5 fontColor'>
      <li>HTML / CSS</li>
      <li>Javascript</li>
      <li>TypeScript</li>
      <li>ASP</li>
    </ul>
    </div>
    </div>
  
    <div className='row '>
    <div className='col-lg-6 col-md-6 col-sm-12 skillBox'>
    <h4 className='padding10 pt-3'>Databases</h4>
    <ul className='h5 fontColor'>
      <li>PL/SQL</li>
      <li>PostgreSQL</li>
      <li>Oracle</li>
      <li>Firebase</li>
      
      
      </ul>
    </div>
    <div className='col-lg-6 col-md-6 col-sm-12 skillBox '>
    <h4 className='padding10 pt-3'>Frameworks & Libraries</h4>
    <div className='row'>
      <div className='col'>
    <ul className='h5 fontColor'>
      <li>React</li>
      <li>Flask</li>
      <li>Java Spring</li>
      <li>Bootstrap</li>
      <li>JQuery</li>
      </ul>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className=' padding10' >
    <h4 style={{textDecoration : 'underline'}} className=' fontColor'>My Interests</h4>
    <h5 > User Experience &nbsp; · New Technologies &nbsp; · Web Design &nbsp; ·  Cycling &nbsp; ·  Photography</h5> 
    </div>
</div>
    </div>
</div>
</div>
  )
}

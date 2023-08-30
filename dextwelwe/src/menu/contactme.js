import React , {useRef} from 'react'
import '../menu/contactme.css'
import '../App.css'
import './about.css';
import 'bootstrap/dist/css/bootstrap.css';
import ig from '../icons/instagram.png'
import gh from '../icons/github.png'
import gm from '../icons/gmail.png'
import li from '../icons/linkedin.png'

export default function Contactme({contact, set}) {
    const modal = useRef('');
    const text = useRef('');

        async function closeModal(){
        modal.current.style.setProperty("animation-name", "disapearContactMe");
        text.current.style.setProperty("animation-name", "removeText");
        }

       function close(){
        console.log('c')
        closeModal().then(setTimeout(set, 500));
      }

  return (
    <>
    <div>
       <div  style={{'display' :  contact}} id="myModal" className={"modal fontFamily"} >
    <div ref={modal}  className={"modal-contentContactMe"}>
    <div ref={text} className='textContent'>
      <div className='header'>
      <h2 className='fontColor px-2'>Contact me</h2>
      
      <button onClick={close} className={"close mx-2"}>&times;</button> 
      </div>
    
      <div className=' skillBoxContactMe mt-2 p-3 mx-3'>
     <a className='textLink' target="_blank"  rel="noopener noreferrer" href='https://github.com/Dextwelwe'><span><img src={gh} alt='github' className='imgLogo'></img> Github</span> </a>
     <br></br>
     <a className='textLink' href='\\'><span><img src={li} alt='linkedin' className='imgLogo'></img> LinkedIn</span></a>
     <br></br>
      <a className='textLink' target="_blank"  rel="noopener noreferrer" href='https://www.instagram.com/dextwelwe/' ><span><img src={ig} alt='instagram' className='imgLogo'></img> Instagram</span></a>
     <br></br>
     <a className='textLink' target="_blank"  rel="noopener noreferrer" href='https://mail.google.com/mail/u/?view=cm&to=dextwelwe@gmail.com'><span><img src={gm} alt='gmail' className='imgLogo'></img> Gmail</span></a>
     <br></br>
     <h6 className='textLink'>Dextwelwe@gmail.com</h6>
    </div>
    <p></p>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

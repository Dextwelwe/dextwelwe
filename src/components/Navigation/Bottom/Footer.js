import btm from './Footer.module.css'
export default function Footer() {
  return (
       <footer className={[btm.bottom].join(' ')}>
      <h5>&copy; {new Date().getFullYear()} DEXTWELWE - DANIL MOSKALENKO</h5>
      </footer>
  )
}

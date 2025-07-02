import btm from './Footer.module.css'
export default function Footer() {
  return (
       <footer className={[btm.bottom].join(' ')}>
      <h6>&copy; {new Date().getFullYear()} DEXTWELWE - DANIL MOSKALENKO</h6>
      </footer>
  )
}

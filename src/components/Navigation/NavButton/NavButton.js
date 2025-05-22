
import nb from './Navbutton.module.css'
export default function NavButton({title}) {
  return (
    <div className={nb.navButtonWrapper}>
        {title}
    </div>
  )
}

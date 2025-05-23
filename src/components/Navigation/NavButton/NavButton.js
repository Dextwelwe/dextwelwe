import nb from './Navbutton.module.css'
import { Link } from 'react-router';
export default function NavButton({title, url}) {
  
  return (
    <Link to={url} className={nb.navButtonWrapper}>
        {title}
    </Link>
  )
}

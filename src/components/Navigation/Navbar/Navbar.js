import LangSelect from "../../LangSelect/LangSelect";
import nav from './Navbar.module.css'
import NavButton from "../NavButton/NavButton";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router";
import {useRef, useState} from 'react'
import iconMenu from  '../../../assets/images/menuWhite1.png'
import iconClose from '../../../assets/images/close.png'
import ContactMeButton from "../ContactMeButton/ContactMeButton";

export default function Navbar() {

  const {t} = useTranslation();
  const nv = useRef(null);  
  const [burgerMenuTitle, setBurgerMenuTitle] = useState('MENU')
  const [styleIconBurgerMenu, setStyleIconBurgerMenu] = useState(nav.iconMenu)
  const [iconBurgerMenu, setIconBurgerMenu] = useState(iconMenu)

     function toggleBurgerMenu() {
    if (nv.current.classList.contains(nav.responsive)) {
      nv.current.classList.remove(nav.responsive);
      setIconBurgerMenu(iconMenu)
      setBurgerMenuTitle('MENU')
      setStyleIconBurgerMenu(nav.iconMenu)
    } else {
      nv.current.classList.add(nav.responsive);
      setBurgerMenuTitle('CLOSE')
      setIconBurgerMenu(iconClose)
      setStyleIconBurgerMenu(nav.iconClose)
    }
  }

  return (
      <div ref={nv} className={nav.wrapper}>
      <nav className={nav.content}>
        <div className={nav.titleWrapper}>
        <Link className={nav.link} to={"/"}><h1>DEXTWELWE</h1></Link>
        <div className={nav.burgerIconWrapper} role="button" tabIndex={0}  aria-label={burgerMenuTitle} onClick={toggleBurgerMenu}>
            { burgerMenuTitle === 'MENU' ?
           ( <h1 className={nav.title}>{t('MENU')}</h1> ) : (<h1 className={nav.title}>{t('CLOSE')}</h1>)}
            <img alt='menu' src={iconBurgerMenu} className={styleIconBurgerMenu} />
          </div>
          </div>
          <div className={nav.menuWrapper}>
        <li className={nav.menu}>
        <NavButton title={t('ABOUT_ME')} to={'/about-me'}/>
        <NavButton title={t('APPLICATIONS')}to={'/about-me'}/>
        <NavButton title={t('PHOTOGRAPHY')} to={'/photography'}/>
        </li>
        <ContactMeButton />
        </div>
        <div className={nav.selectLanguageWrapper}><LangSelect /></div>
      </nav>
      </div>
  )
}

import LangSelect from "../../LangSelect/LangSelect";
import nav from './Navbar.module.css'
import NavButton from "../NavButton/NavButton";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router";
import {useRef, useState, useEffect} from 'react'
import iconMenu from  '../../../assets/images/menuWhite1.png'
import iconClose from '../../../assets/images/close.png'
import ContactMeButton from "../ContactMeButton/ContactMeButton";
import { useLocation } from 'react-router';

export default function Navbar() {

  const {t} = useTranslation();
  const nv = useRef(null);  
  const location = useLocation();
  const [burgerMenuTitle, setBurgerMenuTitle] = useState('MENU')
  const [styleIconBurgerMenu, setStyleIconBurgerMenu] = useState(nav.navIconMenu)
  const [iconBurgerMenu, setIconBurgerMenu] = useState(iconMenu)

     function toggleBurgerMenu() {
    nv.current.classList.contains(nav.responsive) ? clearResponsive() : setResponsive();
  }

  useEffect(() => {
    clearResponsive();
  }, [location]);

  const clearResponsive = () => {
      nv.current.classList.remove(nav.responsive);
      setIconBurgerMenu(iconMenu)
      setBurgerMenuTitle('MENU')
      setStyleIconBurgerMenu(nav.navIconMenu)
      document.body.classList.remove('responsiveMenu');
  }

  const setResponsive = () => {
      nv.current.classList.add(nav.responsive);
      setBurgerMenuTitle('CLOSE')
      setIconBurgerMenu(iconClose)
      setStyleIconBurgerMenu(nav.navIconClose)
      document.body.classList.add('responsiveMenu');
  }

  return (
      <div ref={nv} className={[nav.navWrapper, "defaultPadding"].join(" ")} >
      <nav className={nav.navMainContent}>
        <div className={nav.navTitleWrapper}>
        <Link className={nav.navTitle} to={"/"}><h1>DEXTWELWE</h1></Link>
        <div className={nav.navBurgerIconWrapper} role="button" tabIndex={0}  aria-label={burgerMenuTitle} onClick={toggleBurgerMenu}>
             <p className={nav.navTitle}>{t(burgerMenuTitle === 'MENU' ? 'MENU' : 'CLOSE')}</p>
            <div>
            <img alt='menu' src={iconBurgerMenu} className={styleIconBurgerMenu} />
            </div>
          </div>
          </div>
          <div className={nav.navMenuWrapper}>
        <li className={nav.navMenu}>
        <NavButton  title={t('ABOUT_ME')} url='/about-me' />
        <NavButton  title={t('APPLICATIONS')} url='/applications'/>
        <NavButton  title={t('PHOTOGRAPHY')} url='/photography'/>
        </li>
        <ContactMeButton onClick={clearResponsive} />
        </div>
        <div className={nav.navSelectLanguageWrapper}><LangSelect /></div> 
      </nav>
      </div>
  )
}

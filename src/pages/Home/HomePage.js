import hs from './HomePage.module.css';

import {useRef, useState} from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import LangSelect from '../../components/LangSelect/LangSelect';

import contactMe from '../../assets/images/contactMe.png'
import iconMenu from  '../../assets/images/menuWhite1.png'
import iconClose from '../../assets/images/close.png'

function HomePage() {
  const hsr = useRef(null);  
  const [burgerMenuTitle, setBurgerMenuTitle] = useState('MENU')
  const [iconBurgerMenu, setIconBurgerMenu] = useState(iconMenu)
  const [styleIconBurgerMenu, setStyleIconBurgerMenu] = useState(hs.iconMenu)
  const {t} = useTranslation();

  function toggleBurgerMenu() {
    if (hsr.current.classList.contains(hs.responsive)) {
      hsr.current.classList.remove(hs.responsive);
      setIconBurgerMenu(iconMenu)
      setBurgerMenuTitle('MENU')
      setStyleIconBurgerMenu(hs.iconMenu)
    } else {
      hsr.current.classList.add(hs.responsive);
      setBurgerMenuTitle('CLOSE')
      setIconBurgerMenu(iconClose)
      setStyleIconBurgerMenu(hs.iconClose)
    }
  }

  return (
    <div ref={hsr} className={hs.homeScreenRoot}>
      <div className={hs.selectLanguageWrapper}> <LangSelect/></div>
      <header className={hs.homeScreenContent}>
          <div className={hs.titleWrapper}>
          <h1 className={hs.title}>DEXTWELWE</h1>
          <div className={hs.burgerIconWrapper} role="button" tabIndex={0}  aria-label={burgerMenuTitle} onClick={toggleBurgerMenu}>
            { burgerMenuTitle === 'MENU' ?
           ( <h1 className={hs.title}>{t('MENU')}</h1> ) : (<h1 className={hs.title}>{t('CLOSE')}</h1> )}
            <div className={hs.iconBurgerMenuWrapper}>
            <img alt='menu' src={iconBurgerMenu} className={styleIconBurgerMenu} />
            </div>
          </div>
          </div>
          <div  className={hs.menuWrapper}>
            <ul className={hs.menu}>
            <span className={hs.vl1}></span>
            <Link className={hs.menuItem} to="/about-me">{t("ABOUT_ME")}</Link>
            <span className={hs.vl2} ></span>
            <Link className={hs.menuItem} to="/applications">{t('APPLICATIONS')}</Link>
            <span className={hs.vl3}></span>
            <Link className={hs.menuItem} to="/photography">{t('PHOTOGRAPHY')}</Link>
            <span className={hs.vl4}></span>
            <Link className={[hs.menuItem, hs.abt].join(' ')} to="/about-me">
              <div className={hs.contactMe}>
                <p>{t('CONTACT_ME')}</p>
                <img alt='contact me' className={hs.imgContactMe} src={contactMe} />
              </div>
              </Link>
            </ul>
          </div>
          <div className={hs.bottom}>DEXTWELWE</div>
      </header>
    </div>
  );
}

export default HomePage;

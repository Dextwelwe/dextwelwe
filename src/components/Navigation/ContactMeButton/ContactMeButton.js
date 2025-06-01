import nav from '../Navbar/Navbar.module.css'
import { useTranslation } from 'react-i18next';
import contactMe from '../../../assets/images/contactMe.png'
import { Link } from 'react-router';

export default function ContactMeButton({onClick}) {
  const {t} = useTranslation();
  
  return (
        <Link onClick={onClick} className={nav.navAbt} to="/contact-me">
          <div className={nav.navContactMe}>
            <p style={{width : "max-content"}}>{t('CONTACT_ME')}</p>
            <img alt='contact me' className={nav.navImgContactMe} src={contactMe} />
          </div>
        </Link>
  )
}

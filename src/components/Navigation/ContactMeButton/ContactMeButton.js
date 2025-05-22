import nav from '../Navbar/Navbar.module.css'
import { useTranslation } from 'react-i18next';
import contactMe from '../../../assets/images/contactMe.png'
import { Link } from 'react-router';

export default function ContactMeButton() {
  const {t} = useTranslation();

  return (
        <Link className={nav.abt} to="/contact-me">
          <div className={nav.contactMe}>
            <p style={{width : "max-content"}}>{t('CONTACT_ME')}</p>
            <img alt='contact me' className={nav.imgContactMe} src={contactMe} />
          </div>
        </Link>
  )
}

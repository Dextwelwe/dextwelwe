import { useTranslation } from 'react-i18next';
import Background from '../../components/Background/Background';
import cm from './ContactMe.module.css'
import bgImg from '../../assets/images/abtMeBg.webp'
import Footer from '../../components/Navigation/Bottom/Footer';

export default function ContactMe() {
  const {t} = useTranslation();
  return (
    <>
      <Background imgSrc={bgImg} />
        <div className={[cm.content , 'defaultPadding' , 'content'].join(" ")}>
       <h1 className={cm.title}>{t("THANK_YOU")} </h1>
       <h1 className={cm.title}>{t("FOR_YOUR_TIME")} :) </h1>
       <div className={cm.links}>
          <a href='https://github.com/Dextwelwe' target='_blank' rel='noreferrer'>GITHUB</a>
          <a href='https://linkedin.com/in/danil-moskalenko-a94391282' target='_blank' rel='noreferrer'>LINKEDIN</a>
          <a href='mailto:dextwelwe@gmail.com' target='_blank' rel='noreferrer'>GMAIL</a>
       </div>
          <h1 className={cm.title}>{t("OR")} </h1>
       <div className={cm.bottom}>
        <div className={cm.bottomTxt}>
          <h1 className={cm.title}>{t("LETS_TALK")} ... </h1>
        </div>
        <div className={cm.formWrapper}>
          <form className={cm.form} action="https://formsubmit.co/dextwelwe@gmail.com" method="POST">
            <input name='name' type='text' placeholder={t("NAME") + ":"} required></input>
            <input name='email' type='email' placeholder={t("EMAIL") + ":"} required></input>
            <input name='phoneNumber' type='tel' placeholder={t("PHONE_NUMBER") + ":"}></input>
            <div className={cm.msg}>
              <label>Message</label>
              <textarea name="message" placeholder={t('TEXT_HERE') + "..."} required></textarea>
            </div>
            <div className={cm.buttonWrapper}>
              <button className={cm.buttonSend}>{t('SEND')}</button>
            </div>
          </form>
        </div>
       </div>
       <Footer />
        </div>
    </>
  )
}

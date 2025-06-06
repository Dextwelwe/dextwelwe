import { useTranslation } from 'react-i18next';
import Background from '../../components/Background/Background';
import cm from './ContactMe.module.css'
import bgImg from '../../assets/images/abtMeBg.webp'
import Footer from '../../components/Navigation/Bottom/Footer';
import { useRef } from 'react';
import { useRollUp } from '../../hooks/useRollUp';
import { Helmet } from 'react-helmet'
import { useViewportSize } from '../../hooks/useViewportWidth';

export default function ContactMe() {
  const {t} = useTranslation();
  const contentRef = useRef(null);
  const firstRollElem = useRef(null);
  const {height} = useViewportSize();
  useRollUp(firstRollElem, contentRef, height*0.25)
  return (
    <>
      <Helmet>
          <title>Dextwelwe |  {t('CONTACT_ME').toLowerCase()}</title>
          <link rel="canonical" href="https://dextwelwe.com/contact-me" />
      </Helmet>
      <Background imgSrc={bgImg} />
        <div ref={contentRef} className={[cm.content , 'defaultPadding' , 'content'].join(" ")}>
          <section ref={firstRollElem}>
         <header>
        <h1 className={cm.title}>{t("THANK_YOU")}</h1>
        <h2 className={cm.title}>{t("FOR_YOUR_TIME")} :)</h2>
        </header>
       <nav className={cm.links} aria-label="External Links">
          <a href='https://github.com/Dextwelwe' target='_blank' rel='noreferrer'>GITHUB</a>
          <a href='https://linkedin.com/in/danil-moskalenko-a94391282' target='_blank' rel='noreferrer'>LINKEDIN</a>
          <a href='mailto:dextwelwe@gmail.com' target='_blank' rel='noreferrer'>GMAIL</a>
       </nav>
          <h2 className={cm.title}>{t("OR")}</h2>

      <section className={cm.bottom}>
        <div className={cm.bottomTxt}>
          <h2 className={cm.title}>{t("LETS_TALK")} ...</h2>
        </div>

        <div className={cm.formWrapper}>
          <form className={cm.form} action="https://formsubmit.co/dextwelwe@gmail.com" method="POST">
            <input name='name' type='text' placeholder={t("NAME") + ":"} required></input>
            <input name='email' type='email' placeholder={t("EMAIL") + ":"} required></input>
            <input name='phoneNumber' type='tel' placeholder={t("PHONE_NUMBER") + ":"}></input>

            <div className={cm.msg}>
              <label htmlFor='message'>Message</label>
              <textarea name="message" placeholder={t('TEXT_HERE') + "..."} required></textarea>
            </div>

            <div className={cm.buttonWrapper}>
              <button className={cm.buttonSend}>{t('SEND')}</button>
            </div>

          </form>
        </div>
       </section>
       <Footer />
        </section>
        </div>
    </>
  )
}

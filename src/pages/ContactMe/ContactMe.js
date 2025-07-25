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
  useRollUp(firstRollElem, contentRef, height*0.25,20)
  return (
    <>
      <Helmet>
          <title>Dextwelwe |  {t('MENU.CONTACT_ME').toLowerCase()}</title>
          <link rel="canonical" href="https://dextwelwe.com/contact-me" />
      </Helmet>
      <Background imgSrc={bgImg} />
        <div ref={contentRef} className={[cm.content , 'defaultPadding' , 'content'].join(" ")}>
          <section ref={firstRollElem}>
         <header>
          <h1 className={cm.title} > {t("CONTACT_ME.THANK_YOU")} <br/> {t("CONTACT_ME.FOR_YOUR_TIME")} :) </h1>
        </header>
       <nav className={cm.links} aria-label="External Links">
          <a href='https://github.com/Dextwelwe' target='_blank' rel='noreferrer'>GITHUB</a>
          <a href='https://linkedin.com/in/danil-moskalenko-a94391282' target='_blank' rel='noreferrer'>LINKEDIN</a>
          <a href='mailto:dextwelwe@gmail.com' target='_blank' rel='noreferrer'>GMAIL</a>
       </nav>
          <h1 className={cm.title2}>{t("CONTACT_ME.OR")}</h1>
      <section className={cm.bottom}>
        <div className={cm.bottomTxt}>
          <h1 className={cm.title2}>{t("CONTACT_ME.LETS_TALK")} ...</h1>
        </div>

        <div className={cm.formWrapper}>
          <form className={cm.form} action="https://formsubmit.co/dextwelwe@gmail.com" method="POST">
            <input name='name' type='text' placeholder={t("CONTACT_ME.NAME") + ":"} required></input>
            <input name='email' type='email' placeholder={t("CONTACT_ME.EMAIL") + ":"} required></input>
            <input name='phoneNumber' type='tel' placeholder={t("CONTACT_ME.PHONE_NUMBER") + ":"}></input>

            <div className={cm.msg}>
              <label htmlFor='message'>Message</label>
              <textarea name="message" placeholder={t('CONTACT_ME.TEXT_HERE') + "..."} required></textarea>
            </div>

            <div className={cm.buttonWrapper}>
              <button className={cm.buttonSend}>{t('CONTACT_ME.SEND')}</button>
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

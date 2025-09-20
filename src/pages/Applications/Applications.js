import { useRollUp } from '../../hooks/useRollUp';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Helmet } from 'react-helmet'


import AppCard from '../../components/Applications/AppCard/AppCard';
import Background from '../../components/Background/Background';

import app from './Applications.module.css'
import bgImg from '../../assets/images/applicationsBg.webp';
import Footer from '../../components/Navigation/Bottom/Footer';
import { useViewportSize } from '../../hooks/useViewportWidth';

export default function Applications() {
  const {t} = useTranslation();
   const firstRollElem = useRef(null); 
   const contentRef = useRef(null);
   const {height} = useViewportSize();
   const contentClasses = [app.content , 'defaultPadding' , 'content'].join(" ");
   useRollUp(firstRollElem,contentRef, height * 0.25, 10);

   return (
    <>
      <Helmet>
          <title>Dextwelwe |  {t('MENU.APPLICATIONS').toLowerCase()}</title>
          <link rel="canonical" href="https://dextwelwe.com/applications" />
      </Helmet>
        <Background imgSrc={bgImg} / >
        <div ref={contentRef} className={contentClasses}>
        <div ref={firstRollElem}>
        <h1 className={app.title}>{t('MENU.APPLICATIONS')}</h1>
        <AppCard title={t('APPLICATIONS.GROCERY_APP')} desc={t('APPLICATIONS.GROCERY_APP_DESC')} stack={t('APPLICATIONS.GROCERY_APP_STACK')} gh={"https://github.com/Dextwelwe/GroceryApp"} preview={'https://dextwelwe.github.io/GroceryApp/'}   />
        </div>
        <AppCard title={t('APPLICATIONS.PERSONAL_WEBSITE')} desc={t('APPLICATIONS.PERSONAL_WEBSITE_DESC')} stack={t('APPLICATIONS.PERSONAL_WEBSITE_STACK')} gh={"https://github.com/Dextwelwe/dextwelwe"} />
      <Footer />
      </div>
    </>
  )
}

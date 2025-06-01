import { useRollUp } from '../../hooks/useRollUp';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import AppCard from '../../components/Applications/AppCard/AppCard';
import Background from '../../components/Background/Background';

import app from './Applications.module.css'
import bgImg from '../../assets/images/applicationsBg.webp';
import Footer from '../../components/Navigation/Bottom/Footer';

export default function Applications() {
  const {t} = useTranslation();
   const firstRollElem = useRef(null); 
   const contentRef = useRef(null);
   const contentClasses = [app.content , 'defaultPadding' , 'content'].join(" ");
   useRollUp(firstRollElem,contentRef);

   return (
    <>
        <Background imgSrc={bgImg} / >
        <div ref={contentRef} className={contentClasses}>
        <div ref={firstRollElem}>
        <h1 className={app.title}>{t('APPLICATIONS')}</h1>
        <AppCard title={t('GROCERY_APP')} desc={t('GROCERY_APP_DESC')} stack={t('GROCERY_APP_STACK')} gh={"https://github.com/Dextwelwe/GroceryApp"} preview={"https://dextwelwe.github.io/GroceryApp/"} />
        <AppCard title={t('PERSONAL_WEBSITE')} desc={t('PERSONAL_WEBSITE_DESC')} stack={t('PERSONAL_WEBSITE_STACK')} gh={"https://github.com/Dextwelwe/dextwelwe"} />
        </div>
      <Footer />
      </div>
    </>
  )
}

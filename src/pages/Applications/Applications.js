import { useRollUp } from '../../hooks/useRollUp';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Helmet } from 'react-helmet'


import AppCard from '../../components/Applications/AppCard/AppCard';
import Background from '../../components/Background/Background';

import app from './Applications.module.css'
import bgImg from '../../assets/images/applicationsBg.webp';
import grocery from '../../assets/images/Projects/Grocery/grocery.webp';
import grocery2 from '../../assets/images/Projects/Grocery/grocery2.webp';
import grocery3 from '../../assets/images/Projects/Grocery/grocery3.webp';
import ufc1 from '../../assets/images/Projects/UfcStats/ufc1.webp';
import ufc2 from '../../assets/images/Projects/UfcStats/ufc2.webp';
import ufc3 from '../../assets/images/Projects/UfcStats/ufc3.webp';
import Footer from '../../components/Navigation/Bottom/Footer';
import { useViewportSize } from '../../hooks/useViewportWidth';

const groceryScreenshots = [grocery, grocery2, grocery3];
const ufcScreenshots = [ufc1, ufc2, ufc3];

export default function Applications() {
  const {t} = useTranslation();
   const firstRollElem = useRef(null); 
   const contentRef = useRef(null);
   const {height} = useViewportSize();
   const contentClasses = [app.content , 'defaultPadding' , 'content'].join(" ");
   useRollUp(firstRollElem,contentRef, height * 0.25, 50);

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
        <AppCard title={t('APPLICATIONS.UFC_FIGHT_NIGHT_STATS')} desc={t('APPLICATIONS.UFC_FIGHT_NIGHT_STATS_DESC')} stack={t('APPLICATIONS.UFC_FIGHT_NIGHT_STATS_STACK')} preview={'https://ufcstats.dextwelwe.com'} screenshots={ufcScreenshots} />
        </div>
        <AppCard title={t('APPLICATIONS.GROCERY_APP')} desc={t('APPLICATIONS.GROCERY_APP_DESC')} stack={t('APPLICATIONS.GROCERY_APP_STACK')} gh={"https://github.com/Dextwelwe/GroceryApp"} preview={'https://dextwelwe.github.io/GroceryApp/'} screenshots={groceryScreenshots}   />
        <AppCard title={t('APPLICATIONS.PERSONAL_WEBSITE')} desc={t('APPLICATIONS.PERSONAL_WEBSITE_DESC')} stack={t('APPLICATIONS.PERSONAL_WEBSITE_STACK')} gh={"https://github.com/Dextwelwe/dextwelwe"} />
        <Footer />
      </div>
    </>
  )
}


import { useTranslation } from 'react-i18next';
import { useRef} from 'react';
import { useRollUp } from '../../hooks/useRollUp';
import { Helmet } from 'react-helmet'

import Background from '../../components/Background/Background';
import BoxSection from '../../components/AboutMe/BoxSection/BoxSection';
import ArticleSection from '../../components/AboutMe/ArticleSection/ArticleSection'

import abt from './AboutMe.module.css'
import bgImg from '../../assets/images/abtMeBg.webp'
import Footer from '../../components/Navigation/Bottom/Footer';

export default function AboutMe() {

   const {t} = useTranslation();
   const introRef = useRef(null); 
   const contentRef = useRef(null);
   useRollUp(introRef, contentRef);
   const stackItems = ["Express.js", "Node.js", "ASP Classic", "VBScript", "Oracle DB", "PL-SQL", "CSS", "JQuery", "Tailwind", "Crystal Reports", "Git" , "Tourtoise SVN"];
   const interests = [ t('INTEREST_USER_EXPERIENCE'), t('INTEREST_NEW_TECH'),t('INTEREST_PROGRAMMING_TECHNIQUES'),t('INTEREST_CYCLING'),t('INTEREST_PHOTOGRAPHY')];
   const contentClasses = [abt.content , 'defaultPadding' , 'content'].join(" ")
  return (
      <div ref={contentRef} className={contentClasses}>
        <Helmet>
          <title>Dextwelwe |  {t('ABOUT_ME').toLowerCase()}</title>
          <link rel="canonical" href="https://dextwelwe.com/about-me" />
      </Helmet>
      <Background imgSrc={bgImg} />
      <ArticleSection ref={introRef} title={t('TITLE_INTRO')} desc={t('TITLE_INTRO_DESC')} />
      <BoxSection title={t('CURRENT_STACK')} items={stackItems} />
      <ArticleSection title={t('MY_SKILLS')} desc={t('MY_SKILLS_DESC')} />
      <BoxSection title={t('PERSONAL_INTERESTS')} items={interests} />
      <Footer />
      </div>
  )
}

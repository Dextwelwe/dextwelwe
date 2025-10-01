
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
   useRollUp(introRef, contentRef,0,50);

   const stackItems = [
    "JavaScript (ES6+)",
    "Typescript",
    "Node.js",
    "NestJS",
    "Express.js",
    "React",
    "Jest",
    "Firebase (Firestore, Auth, Hosting)",
    "Oracle DB",
    "SQL / Stored Procedures",
    "Git" ,
    "CSS",
    "ASP Classic",
    "VBScript",
    "JQuery",
    "Crystal Reports",
    "Tortoise SVN" 
  ];

   const interests = [ t('ABOUT_ME.INTEREST_USER_EXPERIENCE'), t('ABOUT_ME.INTEREST_NEW_TECH'),t('ABOUT_ME.INTEREST_PROGRAMMING_TECHNIQUES'),t('ABOUT_ME.INTEREST_CYCLING'),t('ABOUT_ME.INTEREST_PHOTOGRAPHY')];
   const skillsBulletPoints = [t('SKILLS.BUILD_MAINT_APPS'),t('SKILLS.DESIGN_IMPL_BACKEND'),t('SKILLS.DATABASES'), t('SKILLS.TECHNICAL'), t('SKILLS.UI/UX'), t('SKILLS.DEPLOY'), t('SKILLS.COLLAB')]
   const contentClasses = [abt.content , 'defaultPadding' , 'content'].join(" ")
  return (
      <div ref={contentRef} className={contentClasses}>
        <Helmet>
          <title>Dextwelwe |  {t('MENU.ABOUT_ME').toLowerCase()}</title>
          <link rel="canonical" href="https://dextwelwe.com/about-me" />
      </Helmet>
      <Background imgSrc={bgImg} />
      <ArticleSection ref={introRef} title={t('ABOUT_ME.TITLE_INTRO')} desc={t('ABOUT_ME.TITLE_INTRO_DESC')} />
      <ArticleSection title={t('ABOUT_ME.MY_SKILLS')} bulletPointsArr={skillsBulletPoints}  />
      <BoxSection title={t('ABOUT_ME.CURRENT_STACK')} items={stackItems} />
      <BoxSection title={t('ABOUT_ME.PERSONAL_INTERESTS')} items={interests} />
      <Footer />
      </div>
  )
}

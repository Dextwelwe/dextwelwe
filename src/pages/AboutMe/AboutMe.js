
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
import MyStackSection from '../../components/AboutMe/MyStackSection/MyStackSection';

export default function AboutMe() {

   const {t} = useTranslation();
   const introRef = useRef(null); 
   const contentRef = useRef(null);
   useRollUp(introRef, contentRef,0,50);

   const stackItems = {
    Languages : ["C#", "JavaScript", "TypeScript", "Bash"],
    FrameworksLibraries : ["Node.js", "Express.js", "React", ".NET", "ASP.NET Core", "SignalR", "Razor Pages"],
    Databases : ["Oracle (PL/SQL, Stored Procedures)", "PostgreSQL", "Firebase (NoSQL)"],
    AiAgentic : ["Cursor", "Cline", "Agentic Development"],
    ToolsOthers : ["Git", "GitHub", "Docker", "Linux", "Nginx", "Jira", "Crystal Reports", "Tortoise SVN"]
   };

   const interests = [ t('ABOUT_ME.INTEREST_STREET_PHOTOGRAPHY'), t('ABOUT_ME.INTEREST_CYCLING'),t('ABOUT_ME.INTEREST_HOMELAB'),t('ABOUT_ME.INTEREST_AGENTIC_AI')];
   const skillsBulletPoints = [t('SKILLS.ERP_FULL_CYCLE'),t('SKILLS.BACKEND_SERVICES'),t('SKILLS.LEGACY_MODERNIZATION'), t('SKILLS.DATABASE_PROGRAMMING'), t('SKILLS.AUTOMATION_REALTIME'), t('SKILLS.UI_DASHBOARDS')]
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
      <MyStackSection title={t('ABOUT_ME.CURRENT_STACK')} items={stackItems} />
      <BoxSection title={t('ABOUT_ME.PERSONAL_INTERESTS')} items={interests} />
      <Footer />
      </div>
  )
}

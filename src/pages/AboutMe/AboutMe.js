
import Navbar from '../../components/Navigation/Navbar/Navbar'
import abt from './AboutMe.module.css'
import ArticleSection from '../../components/AboutMe/ArticleSection/ArticleSection'
import { useTranslation } from 'react-i18next';
import BoxSection from '../../components/AboutMe/BoxSection/BoxSection';

export default function AboutMe() {
  const {t} = useTranslation();
  const stackItems = ["Express.js", "Node.js", "ASP Classic", "VBScript", "Oracle DB", "PL-SQL", "CSS", "JQuery", "Tailwind", "Crystal Reports", "Git" , "Tourtoise SVN"];
   const interests = [ t('INTEREST_USER_EXPERIENCE'), t('INTEREST_NEW_TECH'),t('INTEREST_PROGRAMMING_TECHNIQUES'),t('INTEREST_CYCLING'),t('INTEREST_PHOTOGRAPHY')];
  
  return (
    <>
      <div class={abt.bgFixed}></div>
      <Navbar />
      <div className={[abt.content , 'defaultPadding' , 'content'].join(" ")}>
      <ArticleSection title={t('TITLE_INTRO')} desc={t('TITLE_INTRO_DESC')} />
      <BoxSection title={t('CURRENT_STACK')} items={stackItems} />
      <ArticleSection title={t('MY_SKILLS')} desc={t('MY_SKILLS_DESC')} />
      <BoxSection title={t('PERSONAL_INTERESTS')} items={interests} />
      <div className={abt.bottom}>
      <h5>@2025 DEXTWELWE &nbsp;&nbsp;&nbsp; DANIL MOSKALENKO</h5>
      </div>
      </div>
    </>
  )
}

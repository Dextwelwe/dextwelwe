
import ss from './MyStackSection.module.css';
import { useTranslation } from 'react-i18next';

export default function MyStackSection({title, items}) {
  const {t} = useTranslation();
  return (
      <section className={['abtWrapper', ss.wrapper].join(" ")}>
      <header className='abtTitle'>
      <h1>{title}</h1>
      </header>
      <div className={ss.stackContainer}>
      <h3 className={ss.stackTitle}>{t('ABOUT_ME.PROGRAMMING_LANGUAGES').toUpperCase()}</h3>
      <ul className={ss.stackItems}>
      {items.Languages.map((item, index) => (
        <li key={index} className={ss.item}>{item}</li>
      ))}
    </ul>
      <h3 className={ss.stackTitle}>{t('ABOUT_ME.FRAMEWORKS_LIBRARIES').toUpperCase()}</h3>
      <ul className={ss.stackItems}>
      {items.FrameworksLibraries.map((item, index) => (
        <li key={index} className={ss.item}>{item}</li>
      ))}
    </ul>
      <h3 className={ss.stackTitle}>{t('ABOUT_ME.DATABASES').toUpperCase()}</h3>
      <ul className={ss.stackItems}>
      {items.Databases.map((item, index) => (
        <li key={index} className={ss.item}>{item}</li>
      ))}
    </ul>
      <h3 className={ss.stackTitle}>{t('ABOUT_ME.TOOLS_OTHERS').toUpperCase()}</h3>
      <ul className={ss.stackItems}>
      {items.ToolsOthers.map((item, index) => (
        <li key={index} className={ss.item}>{item}</li>
      ))}
    </ul>
      </div>
    </section>
  )
}

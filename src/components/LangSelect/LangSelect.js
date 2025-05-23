import {useRef, useEffect } from 'react';
import { useTranslation} from 'react-i18next';
import ls from './LangSelect.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

const LangSelect = () => {
  const { i18n } = useTranslation();
  const lang = useRef(null);
  const [language,setLanguage] = useLocalStorage('language','EN');
  const options = ["EN","FR"].filter(lang => lang !== language)[0];

  const handleOptionClick = () =>  setLanguage(lang.current.innerText)

   useEffect(() => {i18n.changeLanguage(language);}, [language,i18n]);

  return (
    <div ref={lang} className={ls.customSelect} onClick={handleOptionClick}>{options}</div>
  );
};

export default LangSelect;

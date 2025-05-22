import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './locales/en.json';
import FR from './locales/fr.json';

const language = localStorage.getItem("language") || "EN";
i18n.use(initReactI18next).init({
  resources: {
    EN: { translation: EN },
    FR: { translation: FR }
  },
  lng: language,
  fallbackLng: 'EN',
  interpolation: {escapeValue: false},
  react: {useSuspense: false }
});

export default i18n;


import HomePage from '../src/pages/Home/HomePage'
import AboutMe from '../src/pages/AboutMe/AboutMe'
import Applications from '../src/pages/Applications/Applications'
import ContactMe from '../src/pages/ContactMe/ContactMe'
import Photography from './pages/Photography/Photography';
import NotFound from './pages/NotFound/NotFound';

import { BrowserRouter , Routes, Route} from "react-router";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet'
import RouteNavWrapper from './pages/RouteNavWrapper/RouteNavWrapper';
import PreloadBackgrounds from './components/Background/PreloadBackgrounds';

export default function App() {
  const { i18n } = useTranslation();

  
 useEffect( ()=> {
   i18n.changeLanguage(i18n.language)}
   ,[i18n])

  return (
    <>
      <Helmet>
        <title>Dextwelwe | {i18n.t('Web Developer')}</title>
        <meta name="description" content={i18n.t('WEBSITE_DESC')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dextwelwe" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://dextwelwe.com/"  />
      </Helmet>
      <BrowserRouter>
            <PreloadBackgrounds />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route element={<RouteNavWrapper />}>
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/contact-me" element={<ContactMe />} />
              <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
      </BrowserRouter>
</>
)
}

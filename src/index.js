import ReactDOM from 'react-dom/client';
import HomePage from '../src/pages/Home/HomePage'
import AboutMe from '../src/pages/AboutMe/AboutMe'
import Applications from '../src/pages/Applications/Applications'
import ContactMe from '../src/pages/ContactMe/ContactMe'
import Photography from './pages/Photography/Photography';
import NotFound from './pages/NotFound/NotFound';

import { BrowserRouter , Routes, Route} from "react-router";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/contact-me" element={<ContactMe />} />
       <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
);

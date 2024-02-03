import Mainpage from './main_page/mainpage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Ph from './photography/ph'
import './menu/about'
function App() {
  return (
    <Router>
      <Routes>
    <Route index element={<Mainpage />} />
    <Route path="photography" element={<Ph />} />
    </Routes>
    </Router>
  );
}

export default App;

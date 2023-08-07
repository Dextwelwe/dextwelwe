import Mainpage from './main_page/mainpage';
import './App.css';
import MetaTags from 'react-meta-tags';


function App() {
  return (
    <>
    <div className='bg'>
    <MetaTags>
    <title>Dextwelwe</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </MetaTags>
    <Mainpage> </Mainpage>
    </div>
    </>
  );
}

export default App;

import Background from "../../components/Background/Background";
import { useTranslation } from 'react-i18next';
import ph from './Photography.module.css';
import { useState , useRef , useEffect} from "react";
import CurrentImageFooter from "../../components/Photography/CurrentImageFooter/CurrentImageFooter";
import getImgData from './PhotoData';
import ImageMain from "../../components/Photography/Image/ImageMain";
import Image from "../../components/Photography/Image/Image.js";
import { Helmet } from 'react-helmet'
import Footer from '../../components/Navigation/Bottom/Footer';
const imgData = getImgData();

const categories = [
  {title : "HAWAII",     index : 0, data : imgData.hawaii.data , desc : imgData.hawaii.descId},
  {title : "NEW YORK",   index : 1, data : imgData.newYork.data,  desc : imgData.newYork.descId},
  {title : "MONTREAL",   index : 2, data : imgData.montreal.data,  desc : imgData.montreal.descId}
];

export default function Photography() {

  const {t} = useTranslation();
  const [currCategory, setCurrCategory] = useState(categories[0]);
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const [oldImgIndex, setOldImgIndex] = useState(null);
  const [direction, setDirection] = useState('+');
  const [isAnimating, setIsAnimating] = useState(false);
  const contentClasses = [ph.content , 'defaultPadding' , 'content'].join(" ");
  const isFirstRender = useRef(true);

  function setCategory(category) {
    setCurrCategory(categories[category]);
    setCurrImgIndex(0);
    setOldImgIndex(null);
    setDirection('+');
  }

function changeImg(dir) {
  if (isAnimating) return;
  const lastIndex = currCategory.data.length - 1;
  let nextIndex;

  if (dir === '+') {
    nextIndex = currImgIndex === lastIndex ? 0 : currImgIndex + 1;
  } 
  if (dir === '-') {
    nextIndex = currImgIndex === 0 ? lastIndex : currImgIndex - 1;
  }

  setIsAnimating(true);
  setDirection(dir);
  setCurrImgIndex(nextIndex);
  setOldImgIndex(currImgIndex);
  
  setTimeout(() => {
    setIsAnimating(false);
    setOldImgIndex(null);
  }, 600);
}

useEffect(() => {
  if (isFirstRender.current) {
    window.scrollTo(0, 0);
    isFirstRender.current = false;
  }
}, []);



return (
  <div  className={contentClasses}>
      <Helmet>
          <title>Dextwelwe |  {t('MENU.PHOTOGRAPHY').toLowerCase()}</title>
          <link rel="canonical" href="https://dextwelwe.com/contact-me" />
      </Helmet>
    <Background imgSrc={null} />
    <div className={ph.mainContent}>
     <div className={ph.currentImage}>
      <div className={ph.imageWrapper}>
      {oldImgIndex !== null && 
        <ImageMain src={currCategory.data[oldImgIndex]}  key={`curr-${oldImgIndex}`} className={`${ph.image} ${ph.imageSwipe} ${direction === '+' ? ph.swipeOutLeft : ph.swipeOutRight}`}/>
      }
        <ImageMain src={currCategory.data[currImgIndex]} key={`curr-${currImgIndex}`} className={`${ph.image} ${isFirstRender.current ? ph.swipeRightSlow : (direction === '+' ? ph.swipeRight : ph.swipeLeft)}`}
 />
      </div>
        <span className={ph.imageIndex}>{currImgIndex + 1} / {currCategory.data.length}</span>
        <CurrentImageFooter desc={currCategory.data[currImgIndex].descId.trim() === "" ? t(currCategory.desc) : t(currCategory.data[currImgIndex].descId.trim())} category={currCategory.title} categories={categories} changeCategory={setCategory} buttonAction={changeImg}/>
      </div>
    </div>
    <div className={ph.allImagesScrollWrapper}>
      {
        currCategory && currCategory.data &&
        currCategory.data.map((photo, index) => (
          <Image src={photo} key={`curr-${index}`} alt={currCategory.data[currImgIndex].descId.trim() === "" ? t(currCategory.desc) : t(currCategory.data[currImgIndex].descId.trim())} />
        ))
      }
        </div>
        <Footer />
  </div>
  )
}

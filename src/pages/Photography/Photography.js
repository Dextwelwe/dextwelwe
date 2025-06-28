import Background from "../../components/Background/Background";
import { useTranslation } from 'react-i18next';
import ph from './Photography.module.css';
import { useState} from "react";
import CurrentImageFooter from "../../components/Photography/CurrentImageFooter/CurrentImageFooter";
import getImgData from './PhotoData';
import ImageObj from "../../components/Photography/Image/Image";

const imgData = getImgData();

const categories = [
  {title : "HAWAII",     index : 0, data : imgData.hawaii},
  {title : "NEW YORK",   index : 1, data : imgData.newYork},
  {title : "MONTREAL",   index : 2, data : imgData.montreal}
 ];

export default function Photography() {

  const {t} = useTranslation();
  const [currCategory, setCurrCategory] = useState(categories[0]);
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const [oldImgIndex, setOldImgIndex] = useState(null);
  const [direction, setDirection] = useState('+');
  const [isAnimating, setIsAnimating] = useState(false);
  const contentClasses = [ph.content , 'defaultPadding' , 'content'].join(" ");

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
    setOldImgIndex(null);
    setIsAnimating(false);
  }, 500);
}


return (
  <div  className={contentClasses}>
    <Background imgSrc={null} />
    <div className={ph.mainContent}>
     <div className={ph.currentImage}>
      <div className={ph.imageWrapper}>
  {oldImgIndex !== null && (
      <ImageObj src={currCategory.data[oldImgIndex].src}  key={`prev-${oldImgIndex}`} className={`${ph.image} ${ph.imageSwipe} ${direction === '+' ? ph.swipeOutLeft : ph.swipeOutRight}`}/>
  )}
      <ImageObj src={currCategory.data[currImgIndex].src} key={`curr-${currImgIndex}`} style={{display : oldImgIndex === null ? 'block' : 'none'}} className={oldImgIndex !== null ? (`${ph.image} ${direction === '+' ? ph.swipeRight : ph.swipeLeft}`):''}/>
      <span className={ph.imageIndex}>{currImgIndex + 1} / {currCategory.data.length}</span>
    </div>
    <CurrentImageFooter desc={t(currCategory.data[currImgIndex].descId)} category={currCategory.title} categories={categories} changeCategory={setCategory} buttonAction={changeImg}/>
      </div>
    </div>
    <div>
    </div>
  </div>
)}

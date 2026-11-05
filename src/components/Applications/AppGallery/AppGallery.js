import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import prevIcon from '../../../assets/images/prev.png';
import nextIcon from '../../../assets/images/nextIcon.png';
import closeIcon from '../../../assets/images/close.png';

import gallery from './AppGallery.module.css';

const SWIPE_MS = 600;

export default function AppGallery({ title, images, onClose }) {
  const [index, setIndex] = useState(0);
  const [oldIndex, setOldIndex] = useState(null);
  const [direction, setDirection] = useState('+');
  const [isAnimating, setIsAnimating] = useState(false);
  const {t} = useTranslation();

  const showImage = useCallback((dir) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(dir);
    setOldIndex(index);
    setIndex((index + (dir === '+' ? 1 : -1) + images.length) % images.length);

    setTimeout(() => {
      setIsAnimating(false);
      setOldIndex(null);
    }, SWIPE_MS);
  }, [index, images.length, isAnimating]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') showImage('-');
      if (event.key === 'ArrowRight') showImage('+');
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, showImage]);

  return (
    <div className={gallery.overlay} onClick={onClose}>
      <div className={gallery.wrapper} onClick={(event) => event.stopPropagation()}>
        <header className={gallery.header}>
          <h1 className={gallery.title}>{title}</h1>
          <button type='button' className={gallery.button} onClick={onClose} aria-label={t('MENU.CLOSE')}>
            <img className={gallery.closeIcon} src={closeIcon} alt='' />
          </button>
        </header>

        <div className={gallery.viewer}>
          {oldIndex !== null && 
          <img key={`previous-${oldIndex}`} className={`${gallery.screenshot} ${direction === '+' ? gallery.swipeOutLeft : gallery.swipeOutRight}`} src={images[oldIndex]} alt='' />
          }
          <img key={`current-${index}`} className={`${gallery.screenshot} ${direction === '+' ? gallery.swipeRight : gallery.swipeLeft}`} src={images[index]} alt={`${title} ${index + 1}`} />
        </div>

        <footer className={gallery.nav}>
          <button type='button' className={gallery.button} onClick={() => showImage('-')} aria-label={t('APPLICATIONS.PREVIOUS')}>
            <img className={gallery.navIcon} src={prevIcon} alt='' />
          </button>
          <span className={gallery.counter}>{index + 1} / {images.length}</span>
          <button type='button' className={gallery.button} onClick={() => showImage('+')} aria-label={t('APPLICATIONS.NEXT')}>
            <img className={gallery.navIcon} src={nextIcon} alt='' />
          </button>
        </footer>
      </div>
    </div>
  );
}

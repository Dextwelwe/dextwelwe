import app from './AppCard.module.css'
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

import AppGallery from '../AppGallery/AppGallery';
import galleryIcon from '../../../assets/images/gallery.svg';

const AppCard = React.forwardRef((props, ref) => {
  const { title, desc, stack, gh, preview, screenshots } = props;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const {t} = useTranslation();
  return (
    <div ref={ref} className={app.wrapper}>
      <header className={app.header}>
      <h1> {title}</h1>
      {screenshots && 
      <button type='button' className={app.galleryButton} onClick={() => setIsGalleryOpen(true)} aria-label={t('APPLICATIONS.OPEN_GALLERY')}>
        <img className={app.galleryIcon} src={galleryIcon} alt='' />
      </button>
      }
      </header>
      <p className={app.desc}>{desc}</p>
      <div className={app.footer}>
        <div className={app.stack}>
          {
            stack.split(',').map((item, index)=>(
              <span key={index}>{item}</span>
            ))}
          
          </div>
        <div className={app.links}>
        {gh && 
        <a href={gh} target='_blank' rel='noreferrer'>GITHUB</a>
      }
        {preview && 
        <a href={preview} target='blank' rel='noreferrer'>{t('APPLICATIONS.LIVE_DEMO')}</a>
      }
        </div>
      </div>
      {isGalleryOpen && <AppGallery title={title} images={screenshots} onClose={() => setIsGalleryOpen(false)} />}
    </div>
  )
})

export default AppCard;

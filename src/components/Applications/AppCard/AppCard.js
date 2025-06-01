import app from './AppCard.module.css'
import { useTranslation } from 'react-i18next';
import React from 'react';

const AppCard = React.forwardRef((props, ref) => {
  const { title, desc, stack, gh, preview } = props;
  const {t} = useTranslation();
  return (
    <div ref={ref} className={app.wrapper}>
      <h1 className={app.title}> {title}</h1>
      <p className={app.desc}>{desc}</p>
      <div className={app.footer}>
        <div className={app.stack}>
          {
            stack.split(',').map((item, index)=>(
              <span key={index}>{item}</span>
            ))}
          
          </div>
        <div className={app.links}>
        <a href={gh} target='_blank' rel='noreferrer'>GITHUB</a>
        {preview && 
        <a href={"$"} style={{cursor : "not-allowed"}} target='_self' rel='noreferrer'>{t('TRY')}</a>
}
        </div>
      </div>
    </div>
  )
})

export default AppCard;

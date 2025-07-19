import cif from './CurrentImageFooter.module.css'
import nextIcon from '../../../assets/images/nextIcon.png'
import prevIcon from '../../../assets/images/prev.png'
import ImageCategories from '../ImageCategories/ImageCategories'
import { useTranslation } from 'react-i18next';

export default function CurrentImageFooter({desc, buttonAction, categories, changeCategory}) {
  const {t} = useTranslation();
  
  return (
    <div className={cif.rootWrapper}>
      <div className={cif.curentImageWrapper}>
        <div className={cif.header}>
        <h1>{t('MENU.PHOTOGRAPHY')}</h1>
        <ImageCategories options={categories} onChange={changeCategory}  />
        </div>
        <p className={cif.desc}>{desc}</p>
        <div className={cif.nav}>
          <img onClick={()=>buttonAction('-')} src={prevIcon} alt=""></img>
          <img onClick={()=>buttonAction('+')} src={nextIcon} alt=""></img>
        </div>
      </div>
    </div>
  )
}

import { useTranslation } from 'react-i18next';
import Background from '../../components/Background/Background';

import nf from './NotFound.module.css'

export default function NotFound() {
  const {t} = useTranslation();
  return (
    <>
      <Background imgSrc={null} />
      <div className={nf.wrapper}>
      <h1>{t('PAGE_NOT_FOUND')}</h1>
      </div>
    </>
  )
}

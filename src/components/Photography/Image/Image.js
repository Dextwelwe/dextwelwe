

import im from './Image.module.css'
import { useState , useEffect, useRef} from 'react';
import loading from '../../../assets/images/loadingGif.gif'

export default function Image({src, alt, className}) {
const [isLoaded, setIsLoaded] = useState(false);
const [showLoader, setShowLoader] = useState(false);
 
    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
      }, 300); 
      return () => clearTimeout(loaderTimeout); 
    }, [src]);

     return (
      <div className={`${className}`}>
       {!isLoaded && showLoader && <div className={im.loadingWrapper}>
        <img alt={alt}  className={` ${im.image} ${im.loading}`}  src={loading} />
        </div>
       }
        <picture className={`${im.singlePicture}`} style={{ display: isLoaded ? 'flex' : 'none' }} onLoad={() => setIsLoaded(true)} >
          <source className={`${im.singlePicture}`} media="(max-width: 740px)" srcSet={src.srcSM} />
          <source className={`${im.singlePicture}`} media="(max-width: 1100px)" srcSet={src.srcLG} />
          <img className={`${im.singlePicture}`} src={src.srcXL} alt={alt} />
        </picture>
      </div>
  )
}

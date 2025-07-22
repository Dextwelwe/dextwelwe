
import im from './Image.module.css'
import { useState , useEffect, useRef} from 'react';
import loading from '../../../assets/images/loadingGif.gif'

export default function ImageMain({src, alt, className}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
 
    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
      }, 300); 
      return () => clearTimeout(loaderTimeout); 
    }, [src]);

     return (
      <div className={`${className} ${im.wrapper}`}>
       {!isLoaded && showLoader && <div className={im.loadingWrapper}>
        <img alt={alt}  className={` ${im.image} ${im.loading}`}  src={loading} />
        </div>
       }
        <picture load='lazy' className={`${im.image} ${im.picture}`} style={{ display: isLoaded ? 'flex' : 'none' }} >
          <source className={`${im.image}`} media="(max-width: 740px)" srcSet={src.srcSM} />
          <source className={`${im.image}`} media="(max-width: 1100px)" srcSet={src.srcLG} />
          <img className={`${im.image}`} src={src.srcXL} alt={alt} onLoad={() => setIsLoaded(true)} />
        </picture>
      </div>
      );
}

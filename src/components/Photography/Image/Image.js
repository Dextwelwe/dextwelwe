
import im from './Image.module.css'
import { useState , useEffect, useRef} from 'react';
import loading from '../../../assets/images/loadingGif.gif'

export default function ImageObj({src, alt, className}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
 
    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
      }, 300); 
      return () => clearTimeout(loaderTimeout); 
    }, [src]);

     return (
      <div className={`${className} ${im.wrapper}`} >
       {!isLoaded && showLoader && <div className={im.loadingWrapper}>
        <img alt={alt}  className={` ${im.image} ${im.loading}`}  src={loading} />
        </div>
       }
        <img
        className={`${im.image}`}
        src={src} alt={alt}
        onLoad={() => setIsLoaded(true)}
        style={{ display: isLoaded ? 'block' : 'none' }} />
      </div>
      );
}

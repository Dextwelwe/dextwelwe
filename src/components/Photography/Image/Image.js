

import im from './Image.module.css'
import {useState , useEffect, useRef} from 'react';
import loading from '../../../assets/images/loadingGif.gif'

export default function Image({src, alt,clickAction}) {
const [isLoaded, setIsLoaded] = useState(false);
const [hasFailed, setHasFailed] = useState(false);
const [showLoader, setShowLoader] = useState(false);
const imageRef = useRef(null);

    useEffect(() => {
      const loaderTimeout = setTimeout(() => {
      setShowLoader(true);
      }, 300); 
      return () => clearTimeout(loaderTimeout); 
    }, [src]);

    useEffect(() => {
      if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
        setIsLoaded(true);
      }
    }, [src]);

     return (
      <div className={im.imageScrollWrapper}>
       {!isLoaded && !hasFailed && showLoader && <div className={im.loadingWrapper}>
        <img alt=''  className={` ${im.image} ${im.singlePicture} ${im.loading}`}  src={loading} />
        </div>
       }
        <picture className={`${im.singlePicture}`} style={{ display: isLoaded ? 'flex' : 'none' }} >
          <source media="(max-width: 740px)" srcSet={src.srcSM} />
          <source media="(max-width: 1100px)" srcSet={src.srcLG} />
          <img ref={imageRef} className={`${im.singlePicture}`} src={src.srcXL} alt={alt} onLoad={() => setIsLoaded(true)} onError={() => setHasFailed(true)} onClick={()=>clickAction()}/>
        </picture>
      </div>
  )
}

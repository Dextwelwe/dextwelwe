import React, {useState, useEffect} from 'react'
import getPictures from './importImages'
export default function Images(type) {

  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        const pictureList = await getPictures(type.type);
        const imagesArray = pictureList.keys().map((imagePath, index) => {
          return {
            id: index + 1,
            vertical: imagePath.split('_')[1] ? imagePath.split('_')[1].startsWith("vertical") : false, 
            src: pictureList(imagePath),
          };
        });
        setImages(imagesArray); 
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {

        setLoading(false);
      }
    };
    loadImages();
  }, [type]);

  return (
    <div>
      {!loading ? (
       images.map((image) => (
          <div className='imgWrapper'>
            {!image.vertical ?(
          <img loading='lazy' alt="Picture From Hawaii" className='picturePH' src={image.src}/>) :  (<img loading='lazy' alt="Picture From Hawaii" className='picturePHVertical' src={image.src}/>)
            }
          </div>   
        ))) : <div>loading...</div>}
    </div>
  )
}

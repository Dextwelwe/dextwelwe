import { useEffect } from 'react';
import bg1 from '../../assets/images/background.webp';
import bg2 from '../../assets/images/abtMeBg.webp';
import bg3 from '../../assets/images/applicationsBg.webp';

export default function PreloadBackgrounds() {
  useEffect(() => {
    [bg1, bg2, bg3].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
}
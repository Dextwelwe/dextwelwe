import { useEffect } from 'react';
import { useViewportSize } from './useViewportWidth';

export function useRollUp(introRef, contentRef,  minPaddingTop=0, offset=10) {
 const {height} = useViewportSize(); 

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0 });
        });
    }
  }, []);

 useEffect(() => {
  const content = contentRef.current;
  const intro = introRef.current;
 
  if (!content || !intro) return;

  const applyPadding = () => {
    const sumHeight = intro.getBoundingClientRect().height;
    let pxValue = window.innerHeight - sumHeight - offset;
    // 100 is ~ navbar height and generally a point that content shouldn't be able to reach
    if (pxValue < 100){
      pxValue = minPaddingTop
    }
    const finalPaddingVh = (pxValue / window.innerHeight) * 100;
    content.style.paddingTop = `${finalPaddingVh}vh`;
  };
    
  content.style.transition = 'padding-top 1s ease';
   const timeout = setTimeout(() => {
      applyPadding();
    }, 100);

  window.addEventListener('resize', applyPadding);

  return () => {
    clearTimeout(timeout);
    window.removeEventListener('resize', applyPadding);
  } 
}, [introRef, contentRef, offset, height, minPaddingTop]);

}

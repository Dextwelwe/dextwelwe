import { useEffect,useRef} from 'react';
import { useViewportSize } from './useViewportWidth';
let prevHeight = window.innerHeight;
export function useRollUp(introRef, contentRef,  minPaddingTop=0, offset=10) {
  const { height } = useViewportSize();   
  const prevHeightRef = useRef(window.innerHeight);
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0 });
        });
    }
  }, []);

  

   useEffect(() => {
    const intro = introRef.current;
    const content = contentRef.current;
    if (!intro || !content) return;

    const onResize = () => {
      const currH = window.innerHeight;
      const diff = Math.abs(currH - prevHeightRef.current);

      // bail if change is less than 50px
      if ((diff < 150 && window.innerWidth < 800) && diff != 0) return;

      // calculate padding in px
      const introH = intro.getBoundingClientRect().height;
      let padPx = currH - introH - offset;
      if (padPx < 100) padPx = Math.max(padPx, minPaddingTop);

      content.style.transition = 'padding-top 1s ease';
      content.style.paddingTop = `${padPx}px`;

      // update for next comparison
      prevHeightRef.current = currH;
    };

    // initial application
    onResize();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [introRef, contentRef, offset, minPaddingTop]);

}

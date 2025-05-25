import { useEffect } from 'react';

function useScrollbarWidth() {
  useEffect(() => {
    const setScrollbarWidth = () => {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    };

    setScrollbarWidth();
    window.addEventListener('resize', setScrollbarWidth);

    return () => {
      window.removeEventListener('resize', setScrollbarWidth);
    };
  }, []);
}

export default useScrollbarWidth;
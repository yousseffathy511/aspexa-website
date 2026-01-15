import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from './animations';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const { scrollTo, lenis } = useLenis();

  useEffect(() => {
    // If there is no hash, scroll to top
    if (!hash) {
      // Use Lenis scrollTo if available, with immediate option for route changes
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      // If there is a hash, wait a moment for render then scroll to element
      const timeoutId = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          scrollTo(element, { offset: -100 });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, hash, lenis, scrollTo]);

  return null;
};

export default ScrollToTop;
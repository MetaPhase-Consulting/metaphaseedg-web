import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Reset scroll to the top on every route change so client navigations (e.g. footer
// links) land at the top of the page like a standard page load, instead of keeping
// the previous scroll position.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

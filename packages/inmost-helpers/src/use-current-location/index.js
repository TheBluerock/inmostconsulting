import { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

const useCurrentLocation = (linkPath) => {
  const [isActive, setIsActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize both paths by removing trailing slashes and then compare
    const normalizedLinkPath = linkPath.replace(/\/+$/, ''); // Remove trailing slashes
    const normalizedPathname = pathname.replace(/\/+$/, ''); // Remove trailing slashes

    setIsActive(normalizedPathname === normalizedLinkPath);
  }, [linkPath, pathname]);

  return isActive;
};

export default useCurrentLocation;

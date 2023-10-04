import { useEffect, useState } from 'react';

interface IThrottle {
  isBlocked: boolean;
  setBlock: () => void;
}

function useThrottle(timeout: number = 1000): IThrottle {
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const setBlock = () => {
    setIsBlocked(true);
  };

  useEffect(() => {
    if (isBlocked) {
      const timer = setTimeout(() => {
        setIsBlocked(false);
      }, timeout);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isBlocked]);

  return { isBlocked, setBlock };
}

export default useThrottle;

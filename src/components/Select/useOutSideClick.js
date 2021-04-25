import { useEffect } from 'react';

const useOutSideClick = (handleClick) => {
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};

export default useOutSideClick;

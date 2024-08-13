import React from "react";
import { useState , useEffect} from "react";

export const usePropWindow = () => {
    const [windowSize, setWindowSize] = useState<{
      width: number;
      height: number;
    }>({
      width: 0,
      height: 0,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
        });
      }
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return windowSize;
  };
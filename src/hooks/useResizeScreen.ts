import { useState, useEffect } from "react";

// const MOBILE_SCREEN = 320;
const TABLET_SCREEN = 768;
const DESKTOP_SCREEN = 1312;

export const useResizeScreen = () => {
  const [isMobile, setMobile] = useState(true);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth < TABLET_SCREEN);
    setTablet(window.innerWidth < DESKTOP_SCREEN);
    setDesktop(window.innerWidth >= DESKTOP_SCREEN);
  };

  useEffect(() => {
    setMobile(window.innerWidth < TABLET_SCREEN);
    setTablet(window.innerWidth < DESKTOP_SCREEN);
    setDesktop(window.innerWidth >= DESKTOP_SCREEN);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMobile, isTablet, isDesktop };
};

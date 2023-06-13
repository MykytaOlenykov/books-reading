import { useState, useEffect } from "react";

const MOBILE_SCREEN = 320;
const TABLET_SCREEN = 768;
const DESKTOP_SCREEN = 1280;

export const useResizeScreen = () => {
  const [isMobile, setMobile] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isDesktop, setDesktop] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth <= MOBILE_SCREEN);
    setTablet(window.innerWidth <= TABLET_SCREEN);
    setDesktop(window.innerWidth <= DESKTOP_SCREEN);
  };

  useEffect(() => {
    setMobile(window.innerWidth <= MOBILE_SCREEN);
    setTablet(window.innerWidth <= TABLET_SCREEN);
    setDesktop(window.innerWidth <= DESKTOP_SCREEN);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return { isMobile, isTablet, isDesktop };
};
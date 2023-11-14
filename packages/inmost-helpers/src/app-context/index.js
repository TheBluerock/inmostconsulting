import React, { createContext, useState, useContext, useEffect } from "react";
import theme from "@theme";
// Step 1: Create a context and provider
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Step 2: Define the state and functions
  const [selectedLocale, setSelectedLocale] = useState("it");
  const [isDevice, setIsDevice] = useState(null);
  const [footerQuote, setFooterQuote] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);

  // MENU OPEN

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  //Type of Device

  const toggleLocale = () => {
    const nextLocale = selectedLocale === "it" ? "en" : "it";
    setSelectedLocale(nextLocale);
  };

  const setDeviceBasedOnWidth = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        // Desktop
        setIsDevice("desktop");
      } else if (screenWidth >= 768) {
        // Tablet
        setIsDevice("tablet");
      } else {
        // Mobile
        setIsDevice("mobile");
      }
    }
  };

  function handleScrolled() {
    // Check if the 'window' object exists and is not 'undefined'
    if (typeof window !== "undefined") {
      // Add an event listener for the 'scroll' event
      window.addEventListener("scroll", function () {
        // Get the current scroll position
        var scrollY = window.scrollY;

        // Check if the scroll position is greater than 54 pixels
        if (scrollY > 1) {
          // The page has been scrolled for more than 54 pixels
          setIsScrolled(true);
          // You can perform any desired actions here.
        } else {
          setIsScrolled(false);
        }
      });
    }
  }

  const setTheme = (t) => {
    setCurrentTheme({
      ...theme,
      t,
    });
  };

  useEffect(() => {
    console.log(currentTheme);
    handleScrolled();
    setDeviceBasedOnWidth();
    // Listen for window resize and update isDevice
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setDeviceBasedOnWidth);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", setDeviceBasedOnWidth);
      };
    }
  }, []);

  // Step 3: Create a context value object
  const contextValue = {
    isMenuOpen,
    toggleMenu,
    selectedLocale,
    toggleLocale,
    isDevice,
    isScrolled,
    currentTheme,
    setTheme,
  };

  return (
    // Step 4: Provide the context value to children
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Custom hook to access the context
const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };

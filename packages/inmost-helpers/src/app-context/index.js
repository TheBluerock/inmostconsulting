import React, { createContext, useState, useContext, useEffect } from "react";

// Step 1: Create a context and provider
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  
  // Step 2: Define the state and functions
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState("it");
  const [isDevice, setIsDevice] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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

  useEffect(() => {
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
  };

  return (
    // Step 4: Provide the context value to children
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Custom hook to access the context
const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };

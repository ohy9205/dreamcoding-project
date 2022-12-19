import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode((mode) => !mode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setDarkMode((mode) => !mode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    // 현재 다크모드인지 아닌지부터 확인
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleModeHandler }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const updateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

//외부에서 간편하게 사용할 수 있게 훅을 만들어준다
export const useDarkMode = () => useContext(DarkModeContext);

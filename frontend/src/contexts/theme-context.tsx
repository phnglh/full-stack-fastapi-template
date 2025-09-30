import { createContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system"

interface ThemeContextProps {
  theme: Theme;                 
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark"; 
}
const ThemeContext = createContext<ThemeContextProps | null>(null) 


const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Theme>(
    () => localStorage.getItem("theme") as Theme || "system"
  )

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(()=> {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

     const updateResolvedTheme = () => {
      const systemTheme = media.matches ? "dark" : "light";
      setResolvedTheme(theme === "system" ? systemTheme : (theme as "light" | "dark"));
    };

    updateResolvedTheme();
    media.addEventListener("change", updateResolvedTheme);

    return () => media.removeEventListener("change", updateResolvedTheme);
  }, [theme])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, resolvedTheme]);

  return (
     <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}


export {ThemeContext, type Theme, type ThemeContextProps, ThemeProvider}

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

// The initial theme is applied by an inline script in index.html (before paint) to avoid a flash.
function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f7f5f0" : "#0b0e14");
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable (private mode); the theme still applies for this visit.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}

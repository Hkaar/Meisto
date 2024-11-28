import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { 
  Sun,
  Moon,
} from "lucide-react";

interface Props {
  className?: string;
}

export default function ThemeToggle(props: Props) {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    const root = document.querySelector("html") as HTMLHtmlElement;
    const newTheme = root.classList.contains("dark") ? 'light' : 'dark';

    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);

    setTheme(newTheme);
  };

  const loadStoredTheme = () => {
    const stored = localStorage.getItem('theme');
    const root = document.querySelector("html") as HTMLHtmlElement;

    if (!stored) {
      return null;
    }

    if (stored === 'dark') {
      root.classList.add('dark');
    }

    return stored;
  };

  useEffect(() => {
    const root = document.querySelector("html") as HTMLHtmlElement;
    setTheme(root.classList.contains("dark") ? 'dark' : 'light');

    const stored = loadStoredTheme();

    if (stored) {
      setTheme(stored);
    }
  }, []);

  return (
    <Button
      className="py-1 px-2"
      variant={"ghost"}
      onClick={() => handleThemeChange()}
    >
      {theme === "light"
        ? (
          <Moon />
        )
        : (
          <Sun />
        )}

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

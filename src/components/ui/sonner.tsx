// import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  // const { theme = "system" } = useTheme()
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored && ["dark", "light"].includes(stored)) {
      setTheme(stored);
      return;
    }

    const root = document.querySelector("html") as HTMLHtmlElement;
    root.classList.contains("dark") ? setTheme("dark") : setTheme("light");
  }, []);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      richColors
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

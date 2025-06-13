import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";

function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored) return stored;
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
        }
        return "light";
    });
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);


    return (
        <div className="flex w-fit bg-sidebar rounded-xl border-2 border-border p-1 ">
            <Button
                variant={theme === "light" ? "default" : "secondary"}
                className={`flex items-center bg-sidebar gap-2 rounded-lg px-4 py-2 transition-colors ${theme === "light" ? "bg-sidebar-primary" : ""
                    }`}
                onClick={() => setTheme("light")}
                aria-pressed={theme === "light"}
            >
                <Sun className="w-5 h-5" />
                Light
            </Button>
            <Button
                variant={theme === "dark" ? "default" : "secondary"}
                className={`flex items-center bg-sidebar gap-2 rounded-lg px-4 py-2 transition-colors ${theme === "dark" ? "bg-sidebar-primary" : ""
                    }`}
                onClick={() => setTheme("dark")}
                aria-pressed={theme === "dark"}
            >
                <Moon className="w-5 h-5" />
                Dark
            </Button>
        </div>
    );
}

export default ThemeToggle;
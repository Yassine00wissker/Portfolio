import React, { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )

    useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-md border border-gray-500 text-sm
                 bg-gray-200 dark:bg-gray-800
                 text-black dark:text-white
                 transition-colors duration-500">
            {theme === "dark" ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-gray-500" />}
        </button>
    )
}

export default ThemeToggle
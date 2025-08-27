import {useState} from 'react';
import {Sun} from "lucide-react";

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  return <button>{ isDarkMode ? <Sun /> }</button>
}

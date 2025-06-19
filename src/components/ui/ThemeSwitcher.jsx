import {ReactComponent as Moon} from '../../assets/images/icon-moon.svg';
import {ReactComponent as Sun} from '../../assets/images/icon-sun.svg';
import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeSwitcher() {
    const {theme, toggleTheme} = useTheme();
    return (
        <>
            <button 
                className="btn-theme-switcher"
                onClick={toggleTheme}
                aria-label="Theme switcher"
                type='button'
            >
                {theme &&
                    theme === 'light' ? <Moon /> : <Sun />
                }
            </button>
        </>
    )
};
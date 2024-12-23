import { useContext } from 'react'
import { Theme, UseThemeResult } from './TTheme'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext'

export function useTheme(): UseThemeResult {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
	};

	return {theme, toggleTheme}
};



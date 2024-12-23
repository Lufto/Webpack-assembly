import { FC, useState } from 'react'
import { Theme, ThemeProviderProps } from './TTheme'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext'

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
	const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || isDarkTheme ? Theme.DARK : Theme.LIGHT;
	
	const [theme, setTheme] = useState<Theme>(defaultTheme);
	
	return (
		<ThemeContext.Provider value={{
			theme, 
			setTheme
		}}>
			{children}
		</ThemeContext.Provider>
	)
};

export default ThemeProvider

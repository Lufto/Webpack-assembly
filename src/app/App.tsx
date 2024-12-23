import { Link, Route, Routes } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'

import './styles/index.scss'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>hgfhgf</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>Вторая</Link>
			<Suspense fallback={<div> load... </div>}>
				<Routes>
					<Route path='/about' element={<AboutPage/>}></Route>
					<Route path='/' element={<MainPage/>}></Route>
				</Routes>
			</Suspense>
		</div>
	)
};

export default App

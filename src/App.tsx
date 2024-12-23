import { Link, Route, Routes } from 'react-router-dom'

import { Suspense } from 'react'
import { classNames } from './halpers/classNames/classNames'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'

const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>hgfhgf</button>
			<Link to='/'>Главная</Link>
			<Link to='/about'>Вторая</Link>
			<Suspense fallback={<div> load... </div>}>
				<Routes>
					<Route path='/about' element={<AboutPageAsync/>}></Route>
					<Route path='/' element={<MainPageAsync/>}></Route>
				</Routes>
			</Suspense>
		</div>
	)
};

export default App

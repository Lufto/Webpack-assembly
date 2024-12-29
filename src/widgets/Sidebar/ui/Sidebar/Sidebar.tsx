import { classNames } from 'shared/lib/classNames/classNames'

import { useState } from 'react'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface SidebarProps {
className?: string;
}

export const Sidebar = ({className} : SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}

	return (
		<div className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className])}>
			<button onClick={onToggle}>gfd</button>
			<div className={classNames(cls.switches)}>
				<ThemeSwitcher/>
				<LanguageSwitcher/>
			</div>
		</div>
	)
};

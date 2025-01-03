import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './AppLink.module.scss'

export const enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	children: ReactNode;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		className, 
		children, 
		to, 
		theme = AppLinkTheme.PRIMARY, 
		...otherProps
	} = props
	
	return (
		<Link 
			to={to} 
			className={classNames(cls.AppLink, {}, [className, cls[theme]])} 
			{...otherProps}
		>
			{children}
		</Link>
	)
};

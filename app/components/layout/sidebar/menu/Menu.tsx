import { FC } from 'react'
import { IMenuItem } from '@/app/components/layout/sidebar/menu/interfaces/menu.interface'

import styles from './Menu.module.scss'
import cn from 'classnames'
import MenuItem from '@/app/components/layout/sidebar/menu/MenuItem'
import Line from '@/app/components/ui/line/Line'
import { useAuth } from '@/app/hooks/useAuth'
import { formatMenuItems } from '@/app/utils/array/format-menu-items'

interface IMenu {
	title: string
	items: IMenuItem[]
	isScroll?: boolean
	isHidden?: boolean
}

const auth = ['/auth']

const Menu: FC<IMenu> = ({ items, title, isScroll, isHidden }) => {
	const { user } = useAuth()

	const menuItems = formatMenuItems({ menuItems: items, user })

	return (
		<nav
			className={cn(styles.mnu_sidebar, {
				[styles.mnu_sidebar_hidden]: isHidden,
			})}
		>
			<h3>{title}</h3>
			<ul
				className={cn({
					[styles.scroll]: isScroll,
				})}
			>
				{menuItems.map((menuItem) =>
					auth.includes(menuItem.link) && user ? null : (
						<MenuItem item={menuItem} key={menuItem.link} />
					)
				)}
			</ul>
			<Line />
		</nav>
	)
}

export default Menu

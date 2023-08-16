import { FC } from 'react'

import styles from './Sidebar.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { IoMdClose } from 'react-icons/io'
import { useAuth } from '@/app/hooks/useAuth'
import Button from '@/app/components/ui/buttons/button/Button'
import Menu from '@/app/components/layout/sidebar/menu/Menu'
import {
	authMenu,
	dashboardDocumentMenu,
	dashboardMenu,
	menu,
} from '@/app/components/layout/sidebar/menu/menu.data'
import { useActions } from '@/app/hooks/useActions'
import { HiLogout } from 'react-icons/hi'
import Line from '@/app/components/ui/line/Line'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'

const Sidebar: FC<{
	isOpenSidebar: boolean
	setIsOpenSidebar: (openSidebar: boolean) => void
}> = ({ isOpenSidebar, setIsOpenSidebar }) => {
	const { toggleSidebar } = useActions()

	const { isDocument } = useTypedSelector((state) => state.sidebarReducer)

	const { user } = useAuth()

	const { logout } = useActions()

	return (
		<aside
			className={cn(styles.sidebar, {
				[styles.open]: isOpenSidebar,
			})}
		>
			<div className={styles.wrapper_logo}>
				<Link href={'/'} legacyBehavior>
					<a className={styles.logo}>Cloud Storage</a>
				</Link>
				<Button
					isTransparent={true}
					isIcon={true}
					onClick={() => setIsOpenSidebar(!isOpenSidebar)}
				>
					<IoMdClose />
				</Button>
			</div>
			<Menu title={'Menu'} items={menu} />
			{user ? (
				<>
					<Menu
						isHidden={isDocument}
						title={'Dashboard | Files'}
						items={dashboardMenu}
					/>
					<Menu
						isHidden={!isDocument}
						title={'Dashboard | Documents'}
						items={dashboardDocumentMenu}
					/>
					<div className={'flex justify-center'}>
						<Button isSmall={true} onClick={() => toggleSidebar()}>
							{isDocument ? 'Files' : 'Documents'}
						</Button>
					</div>
					<Line />
					<div className={styles.wrapper_logout}>
						<span>
							<HiLogout />
						</span>
						<button onClick={logout}>Logout</button>
					</div>
				</>
			) : (
				<Menu title={'Authorization'} items={authMenu} />
			)}

			<div className={styles.copy}>
				&copy; 2023 Cloud Storage by Fedoskov Daniil [Chappic]
			</div>
		</aside>
	)
}

export default Sidebar

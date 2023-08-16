import { FC, PropsWithChildren, useState } from 'react'

import styles from './Layout.module.scss'
import Sidebar from '@/app/components/layout/sidebar/Sidebar'
import Header from '@/app/components/layout/header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

	return (
		<main className={styles.main}>
			<Sidebar
				isOpenSidebar={isOpenSidebar}
				setIsOpenSidebar={setIsOpenSidebar}
			/>
			<section className={styles.content}>
				<Header
					isOpenSidebar={isOpenSidebar}
					setIsOpenSidebar={setIsOpenSidebar}
				/>
				<div className={styles.wrapper}>{children}</div>
			</section>
		</main>
	)
}

export default Layout

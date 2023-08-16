import { FC } from 'react'
import styles from './Header.module.scss'
import Button from '@/app/components/ui/buttons/button/Button'
import { BsList } from 'react-icons/bs'
import IconsRight from '@/app/components/layout/header/icons-right/IconsRight'

const Header: FC<{
	isOpenSidebar: boolean
	setIsOpenSidebar: (openSidebar: boolean) => void
}> = ({ isOpenSidebar, setIsOpenSidebar }) => {
	return (
		<header className={styles.header}>
			<Button
				isTransparent={true}
				onClick={() => setIsOpenSidebar(!isOpenSidebar)}
			>
				<BsList />
			</Button>
			<IconsRight />
		</header>
	)
}

export default Header

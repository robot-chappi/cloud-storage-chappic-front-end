import { FC } from 'react'
import { IMenuItem } from '@/app/components/layout/sidebar/menu/interfaces/menu.interface'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './Menu.module.scss'
import Image from 'next/image'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={item.link} legacyBehavior>
				<a className={asPath.split('?')[0] === item.link ? styles.active : ''}>
					<span className={item.image ? styles.image : ''}>
						{item.icon && <item.icon />}
						{item.image && (
							<Image src={item.image} alt={item.title} width={40} height={40} />
						)}
					</span>
					<b>{item.title}</b>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem

import { FC } from 'react'
import { IHeader } from '@/app/components/ui/header/interfaces/header.interface'
import Link from 'next/link'

import cn from 'classnames'

import styles from './Header.module.scss'
import { useAuth } from '@/app/hooks/useAuth'

const Header: FC<IHeader> = ({
	headerTitle,
	description,
	buttons,
	isHeader,
}) => {
	const { user } = useAuth()

	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.wrapper_header}>
					<h1>
						{headerTitle.title}
						<span>{headerTitle.subtitle}</span>
					</h1>
					<p>{description}</p>
					<div className={styles.bottom}>
						{isHeader && (
							<>
								<Link href={user ? '/dashboard/files' : '/auth'} legacyBehavior>
									<a className={styles.active}>Get started</a>
								</Link>
								<Link href={'/about'} legacyBehavior>
									<a>Learn more</a>
								</Link>
							</>
						)}
						{buttons
							? buttons.map((button) => (
									<Link key={button.href} href={button.href} legacyBehavior>
										<a
											className={cn({
												[styles.active]: button.isActive,
											})}
										>
											{button.title}
										</a>
									</Link>
							  ))
							: null}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header

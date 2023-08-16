import { FC } from 'react'

import Link from 'next/link'
import styles from './Alert.module.scss'
import Meta from '@/app/utils/meta/Meta'

const Alert: FC<{
	title: string
	layoutTitle?: string
	description: string
	link?: string
	linkText?: string
	isPage?: boolean
}> = ({ title, layoutTitle, description, link, linkText, isPage }) => {
	return (
		<>
			{isPage ? (
				<Meta title={layoutTitle ? layoutTitle : 'Alert'}>
					<div className={styles.wrapper}>
						<div className={styles.section}>
							<div className={styles.heading}>{title}</div>
							<div className={styles.description}>{description}</div>
							<div className={styles.link}>
								{link && linkText && (
									<Link href={link} legacyBehavior>
										<a>{linkText}</a>
									</Link>
								)}
							</div>
						</div>
					</div>
				</Meta>
			) : (
				<div className={styles.wrapper}>
					<div className={styles.section}>
						<div className={styles.heading}>{title}</div>
						<div className={styles.description}>{description}</div>
						<div className={styles.link}>
							{link && linkText && (
								<Link href={link}>
									<a>{linkText}</a>
								</Link>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Alert

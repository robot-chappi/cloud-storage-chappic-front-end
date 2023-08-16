import { FC } from 'react'
import styles from './Heading.module.scss'
import cn from 'classnames'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<div className={cn(styles.title, className)}>
			<h2>{title}</h2>
		</div>
	)
}

export default Heading

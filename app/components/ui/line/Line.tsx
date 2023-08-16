import { FC } from 'react'
import cn from 'classnames'

import styles from './Line.module.scss'

interface ILine {
	isBold?: boolean
	isWhite?: boolean
	className?: string
}

const Line: FC<ILine> = ({ isBold, isWhite, className }) => {
	return (
		<div
			className={cn(styles.line, className, {
				[styles.bold]: isBold,
				[styles.white]: isWhite,
			})}
		/>
	)
}

export default Line

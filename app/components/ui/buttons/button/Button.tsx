import { FC, PropsWithChildren } from 'react'
import { IButton } from '@/app/components/ui/buttons/button/interfaces/button.interface'
import styles from './Button.module.scss'
import cn from 'classnames'

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	isWhite,
	isBlack,
	isGrey,
	isPrimary,
	isPurple,
	isTransparent,
	isIcon,
	isPagination,
	isSmall,
	...rest
}) => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.white]: isWhite,
				[styles.black]: isBlack,
				[styles.grey]: isGrey,
				[styles.primary]: isPrimary,
				[styles.purple]: isPurple,
				[styles.transparent]: isTransparent,
				[styles.icon]: isIcon,
				[styles.pagination]: isPagination,
				[styles.small]: isSmall,
			})}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button

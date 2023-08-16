import { FC, PropsWithChildren } from 'react'
import styles from './Filters.module.scss'

interface IFilterWrapper {
	title: string
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	title,
	children,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{title}</div>
			<div>{children}</div>
		</div>
	)
}

export default FilterWrapper

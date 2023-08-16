import { Switch } from '@headlessui/react'
import cn from 'classnames'
import { FC } from 'react'

import styles from './Toggle.module.scss'
import { ITogglePublic } from '@/app/components/ui/toggle/interfaces/toggle.interface'

const Toggle: FC<ITogglePublic> = ({ isEnabled, clickHandler, label }) => {
	return (
		<div className={styles.toggle}>
			<div className={styles.label}>{label}</div>
			<div className={styles.wrapper}>
				<Switch
					checked={isEnabled}
					onChange={clickHandler}
					className={cn(styles.switch, {
						'bg-primary bg-opacity-80': isEnabled,
						'bg-gray-200': !isEnabled,
					})}
				>
					<span
						className={cn(styles.point, {
							'translate-x-6': isEnabled,
							'translate-x-1': !isEnabled,
						})}
					/>
				</Switch>
				<span onClick={clickHandler}>{isEnabled ? 'True' : 'False'}</span>
			</div>
		</div>
	)
}

export default Toggle

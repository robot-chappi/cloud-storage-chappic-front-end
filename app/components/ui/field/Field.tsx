import { forwardRef } from 'react'

import styles from './Field.module.scss'
import { IField } from './interfaces/field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, placeholder, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<label className={styles.label}>{placeholder}</label>
				<input
					ref={ref}
					type={type}
					placeholder={placeholder ? placeholder : 'Typing...'}
					{...rest}
				/>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field

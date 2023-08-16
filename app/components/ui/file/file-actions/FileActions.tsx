import { FC } from 'react'

import styles from './FileActions.module.scss'
import Button from '@/app/components/ui/buttons/button/Button'
import { BsTrash } from 'react-icons/bs'

interface IFileActions {
	title?: string
	onClickRemove: () => void
	isActive: boolean
	isExplorer?: boolean
}

const FileActions: FC<IFileActions> = ({
	title,
	onClickRemove,
	isActive,
	isExplorer,
}) => {
	return (
		<div className={styles.root}>
			<Button
				isIcon={isExplorer}
				isPrimary={true}
				onClick={onClickRemove}
				disabled={!isActive}
			>
				{isExplorer ? <BsTrash /> : 'Remove'}
			</Button>
			<div>{title ? title : 'Just click or highlight items to remove'}</div>
		</div>
	)
}

export default FileActions

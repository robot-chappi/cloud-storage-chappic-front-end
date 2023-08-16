import cn from 'classnames'
import { FC } from 'react'
import { MdCheckCircle, MdUpload } from 'react-icons/md'

import Button from '@/app/components/ui/buttons/button/Button'

import styles from './FooterForm.module.scss'
import { fileApi } from '@/app/store/api/file.api'
import { useAuth } from '@/app/hooks/useAuth'
import { useExplorer } from '@/app/components/screens/explorer/useExplorer'

const FooterForm: FC<{
	percent: number
	isUploaded: boolean
	handleCloseModal: () => void
}> = ({ percent, isUploaded, handleCloseModal }) => {
	const { user } = useAuth()
	const { queryParams } = useExplorer()

	const { refetch } = fileApi.useGetFilesQuery(queryParams, {
		skip: !user,
	})

	const handleClose = () => {
		refetch()
		return handleCloseModal()
	}

	return (
		<div className={styles.footer}>
			<div
				className={cn(styles.status, {
					[styles['icons-uploaded']]: isUploaded,
				})}
			>
				<MdUpload className={styles['upload-icon']} />
				<MdCheckCircle className={styles['check-icon']} />
				<span>{isUploaded ? 'File uploaded' : `Loading ${percent}%...`}</span>
			</div>
			<div>
				<Button onClick={handleClose}>Save</Button>
			</div>
		</div>
	)
}

export default FooterForm

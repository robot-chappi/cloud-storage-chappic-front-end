import { FC } from 'react'
import { IUploadField } from '@/app/components/ui/upload-field/interfaces/upload-field.interface'
import { useUploadFile } from '@/app/components/ui/upload-field/useUploadFile'
import styles from './UploadField.module.scss'

const UploadField: FC<IUploadField> = ({
	title,
	setFile,
	setMultipleFiles,
	setValue,
	setIsChosen,
	isAvatar,
	isMultiple,
}) => {
	const { uploadFile } = useUploadFile(
		setFile,
		setMultipleFiles,
		setValue,
		setIsChosen,
		isAvatar,
		isMultiple
	)

	return (
		<div className={styles.file}>
			{title && <h1>{title}</h1>}
			<label>
				<span className={'sr-only'}>
					{isMultiple ? 'Select multiple files' : 'Select file'}
				</span>
				<input type="file" multiple={isMultiple} onChange={uploadFile} />
			</label>
		</div>
	)
}

export default UploadField

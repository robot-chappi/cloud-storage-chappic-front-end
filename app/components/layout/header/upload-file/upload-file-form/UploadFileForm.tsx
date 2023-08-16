import { FC } from 'react'

import styles from '../UploadFile.module.scss'
import FileInformation from '@/app/components/ui/file/file-information/FileInformation'
import FooterForm from '@/app/components/layout/header/upload-file/upload-file-form/footer-form/FooterForm'
import UploadField from '@/app/components/ui/upload-field/UploadField'
import { useUploadFileForm } from '@/app/components/layout/header/upload-file/upload-file-form/useUploadFileForm'
import Line from '@/app/components/ui/line/Line'
import FileItem from '@/app/components/ui/file/file-item/FileItem'

const UploadFileForm: FC<{ handleCloseModal: () => void }> = ({
	handleCloseModal,
}) => {
	const { status, media, form } = useUploadFileForm()

	return (
		<div>
			{status.isChosen ? (
				<>
					<div className={styles.info}>
						{media.file && media.file?.path && (
							<FileInformation
								path={media.file.path}
								filename={media.file.filename}
								size={media.file.size}
								mimetype={media.file.mimetype}
								originalName={media.file.originalName}
							/>
						)}
						{media.files.length > 0 &&
							media.files.map((file) => (
								<FileItem key={file.id} file={file} isPreview={true} />
							))}
					</div>

					<FooterForm
						handleCloseModal={handleCloseModal}
						isUploaded={status.isUploaded}
						percent={status.percent}
					/>
				</>
			) : (
				<div className={styles.uploadScreen}>
					<UploadField
						title="Upload your file here 👇"
						setFile={form.setFile}
						setValue={status.setProgressPercentage}
						setIsChosen={status.setIsChosen}
					/>
					<Line isBold isWhite className={'w-full'} />
					<UploadField
						title="Upload multiple files here 👇"
						isMultiple={true}
						setMultipleFiles={form.setMultipleFiles}
						setValue={status.setProgressPercentage}
						setIsChosen={status.setIsChosen}
					/>
				</div>
			)}
		</div>
	)
}

export default UploadFileForm

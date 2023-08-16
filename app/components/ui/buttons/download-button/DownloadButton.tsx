import { FC } from 'react'
import { useDownloadButton } from '@/app/components/ui/buttons/download-button/useDownloadButton'
import Button from '@/app/components/ui/buttons/button/Button'
import { BsDownload } from 'react-icons/bs'

interface IDownloadButton {
	fileId: number
	filename: string
	title?: string
	isDocument?: boolean
}

const DownloadButton: FC<IDownloadButton> = ({
	fileId,
	filename,
	title,
	isDocument,
}) => {
	const { mutateAsync, mutateAsyncDocument } = useDownloadButton(filename)

	const handleClick = () => {
		if (isDocument) {
			mutateAsyncDocument(fileId)
		} else {
			mutateAsync(fileId)
		}
	}

	return (
		<Button isTransparent={true} onClick={handleClick}>
			{title && <span>{title}</span>}
			<BsDownload />
		</Button>
	)
}

export default DownloadButton

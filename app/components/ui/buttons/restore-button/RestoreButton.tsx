import { FC } from 'react'
import Button from '@/app/components/ui/buttons/button/Button'
import { useRestoreButton } from '@/app/components/ui/buttons/restore-button/useRestoreButton'
import { MdRestore } from 'react-icons/md'

interface IRestoreButton {
	fileId: number
	originalName: string
	isDocument?: boolean
}

const RestoreButton: FC<IRestoreButton> = ({
	fileId,
	originalName,
	isDocument,
}) => {
	const { mutateAsync, mutateAsyncDocument } = useRestoreButton(originalName)

	const handleClick = () => {
		if (isDocument) {
			mutateAsyncDocument(fileId)
		} else {
			mutateAsync(fileId)
		}
	}

	return (
		<Button isTransparent={true} onClick={handleClick}>
			<MdRestore />
		</Button>
	)
}

export default RestoreButton

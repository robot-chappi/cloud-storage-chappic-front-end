import { FC } from 'react'
import Button from '@/app/components/ui/buttons/button/Button'
import { useSharedButton } from '@/app/components/ui/buttons/shared-button/useSharedButton'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface IRestoreButton {
	fileId: number
	originalName: string
	isShared: boolean
}

const SharedButton: FC<IRestoreButton> = ({
	fileId,
	originalName,
	isShared,
}) => {
	const { mutateAsync } = useSharedButton(originalName, isShared)

	return (
		<Button isTransparent={true} onClick={() => mutateAsync(fileId)}>
			{isShared ? <AiFillEye /> : <AiFillEyeInvisible />}
		</Button>
	)
}

export default SharedButton

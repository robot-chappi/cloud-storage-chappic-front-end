import { getExtensionFromFileName } from '@/app/utils/string/getExtensionFromFilename'

const typeImages = ['png', 'jpg', 'jpeg', 'gif']

export const isImage = (filename: string) => {
	const extension = getExtensionFromFileName(filename)

	return typeImages.includes(extension)
}

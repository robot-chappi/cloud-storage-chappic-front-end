import { Extension } from '@/app/utils/string/getColorByExtension'

export const getExtensionFromFileName = (filename: string) => {
	return filename.split('.').pop() as Extension
}

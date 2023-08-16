import { useState } from 'react'
import { IFile } from '@/app/types/file.interface'

export const useUploadFileForm = () => {
	const [file, setFile] = useState<IFile>()
	const [files, setMultipleFiles] = useState<IFile[]>([])
	const [isChosen, setIsChosen] = useState<boolean>(false)
	const [percent, setPercent] = useState<number>(0)
	const [isUploaded, setIsUploaded] = useState<boolean>(false)
	const setProgressPercentage = (val: number) => {
		setPercent(val)
		if (val === 100) setIsUploaded(true)
	}

	return {
		form: {
			setFile,
			setMultipleFiles,
		},
		media: {
			file,
			files,
		},
		status: {
			isChosen,
			setIsChosen,
			percent,
			isUploaded,
			setProgressPercentage,
		},
	}
}

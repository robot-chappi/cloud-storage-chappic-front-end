import { Dispatch, SetStateAction } from 'react'
import { IFile } from '@/app/types/file.interface'

export interface IUploadField {
	title?: string
	setFile?: (file: IFile) => void
	setMultipleFiles?: (files: IFile[]) => void
	setValue?: (val: number) => void
	setIsChosen?: Dispatch<SetStateAction<boolean>>
	isAvatar?: boolean
	isMultiple?: boolean
}

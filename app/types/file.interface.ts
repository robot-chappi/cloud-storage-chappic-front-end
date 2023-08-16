import { IBase } from '@/app/types/base.interface'
import { IUser } from '@/app/types/user.interface'

export interface IFile extends IBase {
	filename: string
	originalName: string
	size: number
	path: string
	mimetype: string
	user: IUser
	isShared: boolean
	deletedAt: string | null
	content?: string
}

export type FileSelectType = 'select' | 'unselect'

export enum EnumFileSort {
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export interface IFileDataFilters {
	sort?: EnumFileSort | string
	searchTerm?: string
	mimetype?: string
	page?: string | number
	perPage?: string | number
	isShared?: string
	isDeleted?: string
}

export interface IFileResponse {
	files: IFile[]
	quantity: number
}

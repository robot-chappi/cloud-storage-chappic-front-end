import { IBase } from '@/app/types/base.interface'
import { IUser } from '@/app/types/user.interface'
import { EnumFileSort } from '@/app/types/file.interface'

export interface IDocument extends IBase {
	filename: string
	content: string
	size: number
	path: string
	securePath: string
	user: IUser
	isShared: boolean
	isEditable: boolean
	deletedAt: string | null
}

export interface IDocumentDataFilters {
	sort?: EnumFileSort | string
	searchTerm?: string
	page?: string | number
	perPage?: string | number
	isShared?: string
	isDeleted?: string
	isEditable?: string
}

export interface IDocumentResponse {
	documents: IDocument[]
	quantity: number
}

export interface IDocumentDto extends IBase {
	filename: string
	content: string
	isEditable?: boolean
	isShared?: boolean
}

export interface IDocumentPublicDto extends IBase {
	filename: string
	content: string
	securePath: string
}

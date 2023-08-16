import { IBase } from '@/app/types/base.interface'
import { IFile } from '@/app/types/file.interface'

export interface IUser extends IBase {
	email: string
	fullname: string
	avatarPath: string
	diskSpace: number
	usedSpace: number
	files: IFile[]
}

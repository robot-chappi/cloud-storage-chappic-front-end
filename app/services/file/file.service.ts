import instance from '@/app/api/axios'
import { IFile } from '@/app/types/file.interface'
import { getFileUrl } from '@/app/configs/api.config'

export const FileService = {
	async download(id: number) {
		return instance.get(getFileUrl(`/download/${id}`), {
			responseType: 'blob',
		})
	},

	async upload(media: FormData, setValue?: (val: number) => void) {
		return instance.post<IFile>(getFileUrl(), media, {
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: (progressEvent) => {
				if (setValue) {
					// @ts-ignore
					const progress = (progressEvent.loaded / progressEvent.total) * 100
					setValue(Math.ceil(progress))
				}
			},
		})
	},

	async uploadMultiple(media: FormData, setValue?: (val: number) => void) {
		return instance.post<IFile[]>(getFileUrl('/multiple'), media, {
			headers: { 'Content-Type': 'multipart/form-data' },
			onUploadProgress: (progressEvent) => {
				if (setValue) {
					// @ts-ignore
					const progress = (progressEvent.loaded / progressEvent.total) * 100
					setValue(Math.ceil(progress))
				}
			},
		})
	},
}

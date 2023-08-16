import instance from '@/app/api/axios'
import { getDocumentUrl } from '@/app/configs/api.config'

export const DocumentService = {
	async download(id: number) {
		return instance.get(getDocumentUrl(`/download/${id}`), {
			responseType: 'blob',
		})
	},
}

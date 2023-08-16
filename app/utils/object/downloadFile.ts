import { AxiosResponse } from 'axios'

export const downloadFile = (response: AxiosResponse, filename: string) => {
	const href = URL.createObjectURL(response.data)
	const link = document.createElement('a')
	link.href = href
	link.setAttribute('download', filename) //or any other extension
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
	return URL.revokeObjectURL(href)
}

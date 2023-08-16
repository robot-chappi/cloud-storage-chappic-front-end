export const getFileLink = (string?: string) =>
	`/dashboard/file/${string ? string : ''}`

export const getDocumentLink = (string?: string) =>
	`/dashboard/documents/${string ? string : ''}`

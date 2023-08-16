export const API_URL = `${process.env.APP_URL}/api`

export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getAuthUrl = (string?: string) => `/auth${string ? string : ''}`

export const getFileUrl = (string?: string) => `/files${string ? string : ''}`

export const getDocumentUrl = (string?: string) =>
	`/documents${string ? string : ''}`

export const getUserUrl = (string?: string) => `/users${string ? string : ''}`

export const getUploads = (string: string) =>
	`${process.env.APP_SERVER_URL}/uploads/${string}`

export const getPublicFile = (string: string) =>
	`${process.env.APP_URL}/public/f/${string}`

export const getPublicDocument = (string: string) =>
	`${process.env.APP_URL}/public/d/o/${string}`

export const getPublicEditDocument = (string: string) =>
	`${process.env.APP_URL}/public/d/e/${string}`

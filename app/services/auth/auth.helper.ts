export interface IAuthData {
	user: {
		id: number
		email: number
		fullname: string
	} | null
	accessToken: string
}

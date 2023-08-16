export interface IHeader {
	headerTitle: IHeaderTitle
	description: string
	isHeader: boolean
	buttons?: IHeaderButton[]
}

export interface IHeaderButton {
	title: string
	href: string
	isActive: boolean
}

export interface IHeaderTitle {
	title: string
	subtitle: string
}

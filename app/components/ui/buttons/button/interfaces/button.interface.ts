import { ButtonHTMLAttributes } from 'react'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	isWhite?: boolean
	isBlack?: boolean
	isGrey?: boolean
	isPrimary?: boolean
	isPurple?: boolean
	isTransparent?: boolean
	isIcon?: boolean
	isPagination?: boolean
	isSmall?: boolean
}

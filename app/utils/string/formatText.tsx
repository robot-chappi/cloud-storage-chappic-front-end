import { JSX } from 'react'

export const formatText = (text: string): JSX.Element[] => {
	const lines = text.split('\n')
	return lines.map((line, index) =>
		line === '' ? <br key={index} /> : <p key={index}>{line}</p>
	)
}

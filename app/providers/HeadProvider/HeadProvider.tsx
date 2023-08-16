import Head from 'next/head'
import NextProgressBar from 'nextjs-progressbar'
import { FC, PropsWithChildren } from 'react'

import Favicons from './Favicons'
import { accentColor, bgColor } from '@/app/configs/constants'

const HeadProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5.0"
				/>

				<Favicons />

				<meta name="theme-color" content={bgColor} />
				<meta name="msapplication-navbutton-color" content={bgColor} />
				<meta name="apple-mobile-web-app-status-bar-style" content={bgColor} />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider

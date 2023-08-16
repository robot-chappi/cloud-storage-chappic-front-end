import type { AppProps } from 'next/app'

import '@/app/styles/globals.scss'
import { TypeComponentAuthFields } from '@/app/providers/interfaces/private-route.interface'
import MainProvider from '@/app/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp

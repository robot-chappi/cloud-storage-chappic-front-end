import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import AuthProvider from './AuthProvider/AuthProvider'
import HeadProvider from './HeadProvider/HeadProvider'
import { TypeComponentAuthFields } from '@/app/providers/interfaces/private-route.interface'
import { persistor, store } from '@/app/store/store'
import ReduxToast from '@/app/providers/ReduxToast'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component,
}) => {
	return (
		<HeadProvider>
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<PersistGate persistor={persistor} loading={null}>
						<ReduxToast />
						<AuthProvider Component={Component}>{children}</AuthProvider>
					</PersistGate>
				</Provider>
			</QueryClientProvider>
		</HeadProvider>
	)
}

export default MainProvider

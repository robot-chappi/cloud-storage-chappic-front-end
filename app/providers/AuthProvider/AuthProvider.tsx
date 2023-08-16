import { FC, PropsWithChildren, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { TypeComponentAuthFields } from '@/app/providers/interfaces/private-route.interface'
import { useAuth } from '@/app/hooks/useAuth'
import { useActions } from '@/app/hooks/useActions'
import { useRouter } from 'next/router'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
	ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children,
}) => {
	const { user, accessToken } = useAuth()
	const { logout } = useActions()

	const { pathname } = useRouter()

	// @ts-ignore
	useEffect(() => {
		if (!accessToken && user) return logout()
	}, [accessToken, logout, pathname, user])

	return !isOnlyUser ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
	)
}

export default AuthProvider

import { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/app/hooks/useAuth'
import { TypeComponentAuthFields } from '@/app/providers/interfaces/private-route.interface'

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser },
}) => {
	const { isLoading, user } = useAuth()
	const { replace, pathname } = useRouter()

	const Children = () => <>{children}</>

	if (isLoading) return null

	if (user) return <Children />

	if (isOnlyUser) pathname !== '/' && replace('/')

	return null
}

export default CheckRole

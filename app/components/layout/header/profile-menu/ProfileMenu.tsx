import { FC } from 'react'
import { api } from '@/app/store/api/api'

import styles from './ProfileMenu.module.scss'
import Image from 'next/image'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import Link from 'next/link'
import { useAuth } from '@/app/hooks/useAuth'
import { useOutside } from '@/app/hooks/useOutside'
import { useActions } from '@/app/hooks/useActions'
import { getUploads } from '@/app/configs/api.config'

const ProfileMenu: FC = () => {
	const { user } = useAuth()

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user,
	})

	const { isShow, setIsShow, ref } = useOutside(false)

	const { logout } = useActions()

	if (isLoading) return null

	return (
		<div ref={ref} className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{data?.avatarPath && (
					<Image
						src={getUploads(data?.avatarPath) || ''}
						alt={data?.fullname || ''}
						width={40}
						height={40}
						priority
					/>
				)}
				<span className={styles.name}>{data?.fullname}</span>
				{isShow ? <GoChevronUp /> : <GoChevronDown />}
			</button>

			{isShow && (
				<div className={styles['profile-menu']}>
					<ul>
						<li>
							<Link href={'/dashboard/profile'} legacyBehavior>
								<a>Profile</a>
							</Link>
						</li>
						<li>
							<button onClick={logout}>Log out</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	)
}

export default ProfileMenu

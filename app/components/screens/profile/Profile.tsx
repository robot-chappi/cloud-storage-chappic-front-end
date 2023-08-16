import { FC } from 'react'
import { api } from '@/app/store/api/api'
import { useAuth } from '@/app/hooks/useAuth'
import Meta from '@/app/utils/meta/Meta'
import styles from './Profile.module.scss'
import Heading from '@/app/components/ui/heading/Heading'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { getUploads } from '@/app/configs/api.config'
import Image from 'next/image'
import UploadField from '@/app/components/ui/upload-field/UploadField'
import SpaceChart from '@/app/components/ui/space-chart/SpaceChart'

dayjs.extend(relativeTime)

const Profile: FC = () => {
	const { user } = useAuth()

	const { data, isLoading } = api.useGetProfileQuery(null, {
		skip: !user,
	})

	if (isLoading) return null

	return (
		<Meta title={'Profile'}>
			<Heading title={'Profile'} />
			<div className={styles.wrapper}>
				<div className={styles.info}>
					{data?.avatarPath ? (
						<div className={styles.avatar}>
							<Image
								src={getUploads(data.avatarPath)}
								width={100}
								height={100}
								alt={data.fullname}
							/>
							<UploadField title="Change avatar 👇" isAvatar={true} />
						</div>
					) : (
						<div>You do not have profile image</div>
					)}
					<div>
						<span>Fullname:</span> {data?.fullname}
					</div>
					<div>
						<span>Email:</span> {data?.email}
					</div>
					<div>
						Joined{' '}
						{data?.createdAt && dayjs(new Date(data.createdAt)).fromNow()}
					</div>
					<div>
						{data?.usedSpace && data?.usedSpace && (
							<SpaceChart
								diskSpace={data.diskSpace}
								usedSpace={data.usedSpace}
							/>
						)}
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default Profile

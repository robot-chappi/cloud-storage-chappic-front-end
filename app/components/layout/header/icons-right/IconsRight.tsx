import { FC } from 'react'
import { useAuth } from '@/app/hooks/useAuth'

import styles from './IconsRight.module.scss'
import ProfileMenu from '@/app/components/layout/header/profile-menu/ProfileMenu'
import UploadFile from '@/app/components/layout/header/upload-file/UploadFile'
import CreateDocument from '@/app/components/layout/header/create-document/CreateDocument'

const IconsRight: FC = () => {
	const { user } = useAuth()

	return (
		<div className={styles.icons}>
			{user && (
				<>
					<ProfileMenu />
					<UploadFile />
					<CreateDocument />
				</>
			)}
		</div>
	)
}

export default IconsRight

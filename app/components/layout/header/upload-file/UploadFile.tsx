import { FC, useState } from 'react'
import { HiUpload } from 'react-icons/hi'

import UploadModal from '@/app/components/layout/header/upload-file/UploadModal'

import stylesIcon from '../icons-right/IconsRight.module.scss'

const UploadFile: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<button className={stylesIcon.button} onClick={() => setIsOpen(true)}>
				<HiUpload />
			</button>
			<UploadModal isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}

export default UploadFile

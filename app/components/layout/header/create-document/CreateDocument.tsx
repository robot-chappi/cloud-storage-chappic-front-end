import { FC } from 'react'

import stylesIcon from '../icons-right/IconsRight.module.scss'
import { IoDocument } from 'react-icons/io5'
import { documentApi } from '@/app/store/api/document.api'
import { useRouter } from 'next/router'
import { getDocumentLink } from '@/app/configs/app.config'

const CreateDocument: FC = () => {
	const { push } = useRouter()
	const [createDocumentMutation, { isLoading }] =
		documentApi.useCreateDocumentMutation()

	return (
		<>
			<button
				className={stylesIcon.button}
				onClick={() => {
					createDocumentMutation()
						.unwrap()
						.then((id) => {
							return push(getDocumentLink(`edit/${id}`))
						})
				}}
			>
				<IoDocument />
			</button>
		</>
	)
}

export default CreateDocument

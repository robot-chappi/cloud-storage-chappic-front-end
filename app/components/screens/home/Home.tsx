import { FC } from 'react'
import Meta from '@/app/utils/meta/Meta'
import Header from '@/app/components/ui/header/Header'

const Home: FC = () => {
	return (
		<Meta
			title={'Home'}
			description={
				'Cloud storage is a service that allows users to store their files and data in a remote location via the Internet. It allows you to conveniently and securely store and access files, editable, photos, videos and other digital content without having to rely only on local storage media such as hard drives or physical servers.'
			}
		>
			<Header
				headerTitle={{
					title: 'The storage that is ',
					subtitle: 'always with you',
				}}
				isHeader={true}
				description={
					'Our cloud storage service provides a reliable and convenient solution for storing, organizing and accessing your digital files and data. We understand that your information is valuable and important to you, so we have created a platform that provides security, flexibility and usability.'
				}
			/>
		</Meta>
	)
}

export default Home

import { FC } from 'react'
import Meta from '@/app/utils/meta/Meta'
import styles from './About.module.scss'
import Line from '@/app/components/ui/line/Line'
import { BsChat, BsPhone } from 'react-icons/bs'

const About: FC = () => {
	return (
		<Meta
			title={'About'}
			description={
				'The cloud storage service is a platform where users can create an account, upload their files, organize them into folders and access them from any device with Internet access. Such websites usually offer a user-friendly interfaces that facilitates the management and navigation of stored data.'
			}
		>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_content}>
					<div className={styles.content}>
						<h2>Welcome to our cloud storage!</h2>
						<p>
							We strive to provide a simple and convenient way to store and
							manage your files in the cloud. Our goal is to ensure the
							security, reliability and availability of your data at any time
							and from any place.
							<Line />
							Our cloud storage and file editor offers a wide range of
							functions: downloading and syncing files; support for various file
							types: documents, images, videos and others; file sharing with
							other users; enabling collaboration on files; secure data storage
							with encryption and backup.
						</p>
						<div className={styles.info}>
							<div className={styles.info_item}>
								<div className={styles.icon_section}>
									<BsChat className={styles.icon} />
								</div>
								<div className={styles.text_section}>
									<h4>Our command</h4>
									<p>
										Our team consists of experienced developers and specialists
										in the field of cloud technologies. We are constantly
										working to improve our product and provide a better
										experience for our users.
									</p>
								</div>
							</div>
							<div className={styles.info_item}>
								<div className={styles.icon_section}>
									<BsPhone className={styles.icon} />
								</div>
								<div className={styles.text_section}>
									<h4>Contact us</h4>
									<p>
										If you have any questions, suggestions or need help, please
										contact us via email (support-cloud-storage@gmail.com). We
										are always ready to help you.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Meta>
	)
}

export default About

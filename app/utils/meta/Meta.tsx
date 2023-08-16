import { FC, PropsWithChildren } from 'react'
import { ISeo } from '@/app/utils/meta/interfaces/meta.interface'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { siteName, titleMerge } from '@/app/configs/seo.config'
import { onlyText } from '@/app/utils/string/clearText'
import Layout from '@/app/components/layout/Layout'

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	children,
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp={'headline'}>{titleMerge(title)}</title>

				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl} />
						<meta property="og:locale" content="en" />
						<meta property="og:title" content={titleMerge(title)} />
						<meta property="og:url" content={currentUrl} />
						<meta property="og:image" content={'/favicon.png'} />
						<meta property="og:site_name" content={siteName} />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow" />
				)}
			</Head>
			<Layout>{children}</Layout>
		</>
	)
}

export default Meta

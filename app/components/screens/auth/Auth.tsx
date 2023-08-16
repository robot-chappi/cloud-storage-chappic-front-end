import { FC, useState } from 'react'
import { useAuth } from '@/app/hooks/useAuth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from '@/app/components/screens/auth/interfaces/auth.interface'
import { useActions } from '@/app/hooks/useActions'
import Meta from '@/app/utils/meta/Meta'
import styles from './Auth.module.scss'
import Button from '@/app/components/ui/buttons/button/Button'
import AuthFields from '@/app/components/screens/auth/AuthFields'
import Heading from '@/app/components/ui/heading/Heading'
import { useAuthRedirect } from '@/app/components/screens/auth/useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: RegisterInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta
			title={'Auth'}
			description={'The login page to the cloud storage site.'}
		>
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading
						title={type === 'login' ? 'Authorization' : 'Registration'}
						className="flex justify-center mb-4"
					/>

					<AuthFields
						formState={formState}
						register={RegisterInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						{type === 'login' ? (
							<Button
								isPurple
								type="submit"
								onClick={() => setType('login')}
								disabled={isLoading}
							>
								Login
							</Button>
						) : (
							<Button
								isPurple
								type="submit"
								onClick={() => setType('register')}
								disabled={isLoading}
							>
								Register
							</Button>
						)}
						<button
							onClick={() => setType(type === 'login' ? 'register' : 'login')}
						>
							{type === 'login'
								? 'Do not have an account? Register!'
								: 'Already have an account? Login!'}
						</button>
					</div>
				</form>
			</section>
		</Meta>
	)
}

export default Auth

import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { IAuthInput } from '@/app/components/screens/auth/interfaces/auth.interface'
import Field from '@/app/components/ui/field/Field'
import { validEmail, validFullname } from '@/app/shared/regex'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<IAuthInput>
	isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
	register,
	formState: { errors },
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address',
					},
				})}
				placeholder="E-mail"
				error={errors.email}
			/>
			<Field
				{...register('fullname', {
					required: 'Fullname is required',
					pattern: {
						value: validFullname,
						message: 'Please enter a valid fullname',
					},
				})}
				placeholder="Fullname"
				error={errors.fullname}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should be more 6 symbols',
								},
						  }
						: {}
				)}
				placeholder="Password"
				type="password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields

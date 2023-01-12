import emailjs from '@emailjs/browser';

import toast, { Toaster } from 'react-hot-toast';

import { useForm, SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from '../../../models/validationSchema';

type InputTypes = {
	userName: string;
	userEmail: string;
	userMessage: string;
};

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputTypes>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<InputTypes> = data => {
		try {
			toast.promise(
				emailjs.send(
					import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
					import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
					data,
					import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
				),
				{
					loading: 'Saving...',
					success: <b>Message sent</b>,
					error: <b>The message wasn't sent</b>,
				}
			);

			reset();
		} catch (err) {
			toast.error('An error has occurred');
		}
	};

	return (
		<form
			aria-label='form'
			onSubmit={handleSubmit(onSubmit)}
			className='re-ContactForm'
		>
			<div className='re-ContactForm-field'>
				<label className='re-ContactForm-label' htmlFor='userName'>
					Name
				</label>
				<input
					{...register('userName')}
					className={`re-ContactForm-input ${errors.userName && 'inputError'}`}
					type='text'
					placeholder='Enter your Name'
				/>

				<span className='re-ContactForm-errorMessage'>
					{errors.userName?.message}
				</span>
			</div>
			<div className='re-ContactForm-field'>
				<label className='re-ContactForm-label' htmlFor='userEmail'>
					Email
				</label>
				<input
					{...register('userEmail')}
					className={`re-ContactForm-input ${errors.userEmail && 'inputError'}`}
					type='email'
					placeholder='Enter your Email'
				/>
				<span className='re-ContactForm-errorMessage'>
					{errors.userEmail?.message}
				</span>
			</div>
			<div className='re-ContactForm-field'>
				<label className='re-ContactForm-label' htmlFor='userMessage'>
					Message
				</label>
				<textarea
					{...register('userMessage')}
					className={`re-ContactForm-textArea ${
						errors.userMessage && 'inputError'
					}`}
					placeholder='Enter your Message'
				/>
				<span className='re-ContactForm-errorMessage'>
					{errors.userMessage?.message}
				</span>
			</div>
			<div className='re-ContactForm-wrapButton'>
				<button className='Button' type='submit'>
					Send Message
					<span className='Button-Icon u-md'>
						<AiOutlineSend />
					</span>
				</button>
			</div>
			<Toaster
				position='bottom-right'
				reverseOrder={false}
				toastOptions={toasterStyles}
			/>
		</form>
	);
};

const toasterStyles = {
	style: {
		backgroundColor: `${
			localStorage.getItem('data-theme') == 'light' ? '#000000' : '#FFFFFF'
		} `,
		color: `${
			localStorage.getItem('data-theme') == 'light' ? '#FFFFFF' : '#000000'
		} `,
	},
	duration: 4000,
	iconTheme: {
		primary: `${
			localStorage.getItem('data-theme') == 'light' ? '#FFFFFF' : '#000000'
		} `,
		secondary: `${
			localStorage.getItem('data-theme') == 'light' ? '#000000' : '#FFFFFF'
		} `,
	},
};

const AiOutlineSend = (): JSX.Element => {
	return (
		<svg
			className='Icon--AiOutlineSend u-mdFs u-mt'
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			preserveAspectRatio='xMidYMid meet'
			viewBox='0 0 1024 1024'
		>
			<path
				fill='currentColor'
				d='M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2c-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7l-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9c3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1c3.9-8 .7-17.6-7.2-21.6zM170.8 826.3l50.3-205.6l295.2-101.3c2.3-.8 4.2-2.6 5-5c1.4-4.2-.8-8.7-5-10.2L221.1 403L171 198.2l628 314.9l-628.2 313.2z'
			/>
		</svg>
	);
};

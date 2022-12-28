import React, { useRef, useContext } from 'react';

import emailjs from '@emailjs/browser';

import { useForm, initialFormState } from '../../../hooks';

import { Button } from '../../Buttons';

import { AiOutlineSend } from 'react-icons/ai';

import { getInputsData } from '../../../helpers';

import { ContactFormField } from '../../Form';

import toast, { Toaster } from 'react-hot-toast';

import { isValidForm } from '../../../helpers';

import { ThemeContext } from '../../../contexts';

export const ContactForm = () => {
	const { theme } = useContext(ThemeContext);

	const form = useRef<HTMLFormElement>(null);

	const inputs = getInputsData();

	const { formState, handleFormReset, handleFormChange } =
		useForm(initialFormState);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const isValid = isValidForm(formState);

		const currentForm = form.current;

		if (currentForm == null) return;

		if (isValid) {
			toast.promise(
				emailjs.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
					currentForm,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY
				),
				{
					loading: 'Saving...',
					success: <b>Message sent</b>,
					error: <b>The message wasn't sent</b>, //.catch(err) message
				}
			);

			handleFormReset();
		} else {
			toast.error('Enter valid data');
		}
	};

	return (
		<form
			aria-label='form'
			ref={form}
			className='re-ContactForm'
			onSubmit={e => handleSubmit(e)}
		>
			{inputs.map(inputData => (
				<ContactFormField
					key={inputData.id}
					{...inputData}
					onInputChange={handleFormChange}
					inputValue={formState[inputData.inputName]}
				/>
			))}

			<div className='re-ContactForm-wrapButton'>
				<Button text='Send Message'>
					<AiOutlineSend className='Icon Icon--AiOutlineSend' />
				</Button>
			</div>
			<Toaster
				position='bottom-right'
				reverseOrder={false}
				toastOptions={{
					style: {
						backgroundColor: `${theme == 'light' ? '#000000' : '#FFFFFF'} `,
						color: `${theme == 'light' ? '#FFFFFF' : '#000000'} `,
					},
					duration: 4000,
					iconTheme: {
						primary: `${theme == 'light' ? '#FFFFFF' : '#000000'} `,
						secondary: `${theme == 'light' ? '#000000' : '#FFFFFF'} `,
					},
				}}
			/>
		</form>
	);
};

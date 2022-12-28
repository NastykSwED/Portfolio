import React from 'react';

interface ContactFormInputProps {
	labelName: string;
	inputName: string;
	inputValue: string;
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	type?: string;
	placeholder: string;
	pattern?: string;
	required: boolean;
	errorMessage: string;
}

export const ContactFormInput = (props: ContactFormInputProps) => {
	const {
		labelName,
		inputName,
		inputValue,
		onInputChange,
		type,
		placeholder,
		pattern,
		required,
		errorMessage,
	} = props;

	return (
		<div className='re-ContactForm-field'>
			<label className='re-ContactForm-label' htmlFor={inputName}>
				{labelName}
			</label>
			<input
				id={inputName}
				name={inputName}
				className='re-ContactForm-input'
				type={type}
				placeholder={placeholder}
				required={required}
				value={inputValue}
				onChange={onInputChange}
				pattern={pattern}
			/>
			<span className='re-ContactForm-errorMessage'>{errorMessage}</span>
		</div>
	);
};

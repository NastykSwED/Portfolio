interface ContactFormTextAreaProps {
	labelName: string;
	inputName: string;
	inputValue: string;
	onInputChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	placeholder: string;
	required: boolean;
	errorMessage: string;
}

export const ContactFormTextArea = (props: ContactFormTextAreaProps) => {
	const {
		labelName,
		inputName,
		inputValue,
		onInputChange,
		placeholder,
		required,
		errorMessage,
	} = props;

	return (
		<div className='re-ContactForm-field'>
			<label className='re-ContactForm-label' htmlFor={inputName}>
				{labelName}
			</label>
			<textarea
				id={inputName}
				name={inputName}
				className='re-ContactForm-textArea'
				placeholder={placeholder}
				required={required}
				value={inputValue}
				onChange={onInputChange}
			/>
			<span className='re-ContactForm-errorMessage'>{errorMessage}</span>
		</div>
	);
};

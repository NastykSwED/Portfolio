import { ContactFormInput, ContactFormTextArea } from './';

interface ContactFormFieldProps {
	isInputElement?: boolean;
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

export const ContactFormField = (props: ContactFormFieldProps) => {
	const { isInputElement } = props;

	if (isInputElement) {
		return <ContactFormInput {...props} />;
	}

	return <ContactFormTextArea {...props} />;
};

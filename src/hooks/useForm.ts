import React, { useState } from 'react';

export interface formStateProps {
	userName: string;
	userEmail: string;
	userMessage: string;
	[key: string]: string;
}

export const initialFormState: formStateProps = {
	userName: '',
	userEmail: '',
	userMessage: '',
};

export const useForm = (initialFormState: formStateProps) => {
	const [formState, setFormState] = useState<formStateProps>(initialFormState);

	const handleFormReset = () => {
		setFormState(initialFormState);
	};

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return {
		formState,
		handleFormReset,
		handleFormChange,
	};
};

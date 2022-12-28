export const inputsData = [
	{
		id: 1,
		isInputElement: true,
		labelName: 'Name',
		inputName: 'userName',
		type: 'text',
		placeholder: 'Enter your Name',
		pattern: '[A-Za-z ]{1,32}',
		required: true,
		errorMessage: "The Name shouldn't include any special character or numbers",
	},
	{
		id: 2,
		isInputElement: true,
		labelName: 'Email',
		inputName: 'userEmail',
		type: 'text',
		placeholder: 'Enter your Email',
		pattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$',
		required: true,
		errorMessage: 'The Email should be valid!',
	},
	{
		id: 3,
		isInputElement: false,
		labelName: 'Message',
		inputName: 'userMessage',
		placeholder: 'Enter your Message',
		required: true,
		errorMessage: 'The Message should be valid!',
	},
];

import * as yup from 'yup';

export const validationSchema = yup.object({
	userName: yup
		.string()
		.required('The Name is required')
		.max(20, 'The Name must have a maximum of 20 characters or less')
		.min(2, 'The Name must have 2 characters at least'),
	userEmail: yup
		.string()
		.email('The Email is invalid')
		.required('The Email is required'),
	userMessage: yup
		.string()
		.required('The Message is required')
		.max(150, 'The Message must have a maximum of 150 characters or less')
		.min(2, 'The Message must have 2 characters at least'),
});

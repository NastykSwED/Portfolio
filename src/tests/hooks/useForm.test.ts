import { describe, expectTypeOf, it, expect } from 'vitest';

import { renderHook } from '@testing-library/react';

import { formStateProps, useForm } from '../../hooks/useForm';

describe('Testing useForm Custom Hook', () => {
	const initialFormState: formStateProps = {
		userName: '',
		userEmail: '',
		userMessage: '',
	};

	it('Should return a Object Type', () => {
		const { result } = renderHook(() => useForm(initialFormState));

		expectTypeOf(result.current).toBeObject();
	});

	it('The formState props should match with the initialFormState props', () => {
		const formState = {
			userName: '',
			userEmail: '',
			userMessage: '',
		};

		const { result } = renderHook(() => useForm(initialFormState));

		expect(result.current.formState).toEqual(formState);


	});
});

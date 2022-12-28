import { describe, expectTypeOf, it, expect } from 'vitest';

import { isValidForm } from '../../helpers/isValidForm';
import { formStateProps } from '../../hooks/useForm';

describe('Testing isValidForm helper', () => {
	const formState: formStateProps = {
		userName: '',
		userEmail: '',
		userMessage: '',
	};

	it('Should return a Boolean Type', () => {
		const isValid = isValidForm(formState);

		expectTypeOf(isValid).toBeBoolean();
	});

	it("Should return false since formState does not correspond to RegExps", () => {
		const formState: formStateProps = {
			userName: '222',
			userEmail: '222',
			userMessage: '222',
		};

		const isValid = isValidForm(formState);

		expect(isValid).toBeFalsy();
	});

	it('Should return true since formState correspond to RegExps', () => {
		const formState: formStateProps = {
			userName: 'Ronald',
			userEmail: 'email@gmail.com',
			userMessage: 'My Message',
		};

		const isValid = isValidForm(formState);

		expect(isValid).toBeTruthy();
	});
});

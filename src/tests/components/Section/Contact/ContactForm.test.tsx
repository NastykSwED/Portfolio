import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent } from '@testing-library/react';

import { ContactForm } from '../../../../components';

import emailjs from '@emailjs/browser';

import toast, { Toaster } from 'react-hot-toast';

vi.mock('@emailjs/browser');

vi.mock('react-hot-toast');

describe('Testing ContactForm component', () => {
	const userNameInputValue = '';

	it('The userName input should have a empty value', () => {
		render(<ContactForm />);

		const userNameInput = screen.getByPlaceholderText(
			'Enter your Name'
		) as HTMLInputElement;

		expect(userNameInput.value).toBe(userNameInputValue);
	});

	it('The userName input should have a new value', () => {
		render(<ContactForm />);

		const userNameInput = screen.getByPlaceholderText(
			'Enter your Name'
		) as HTMLInputElement;

		const userNameInputNewValue = 'Ronald';

		fireEvent.change(userNameInput, {
			target: {
				value: userNameInputNewValue,
			},
		});

		expect(userNameInput.value).toBe(userNameInputNewValue);
	});

	it('Should reset the inputs when the form is sent', () => {
		render(<ContactForm />);

		const form = screen.getByRole('form') as HTMLFormElement;

		const userNameInput = screen.getByPlaceholderText(
			'Enter your Name'
		) as HTMLInputElement;

		const userEmailInput = screen.getByPlaceholderText(
			'Enter your Email'
		) as HTMLInputElement;

		const userMessageInput = screen.getByPlaceholderText(
			'Enter your Message'
		) as HTMLTextAreaElement;

		const userNameInputNewValue = 'Ronald';

		const userEmailInputNewValue = 'email@gmail.com';

		const userMessageInputNewValue = 'New Message';

		fireEvent.change(userNameInput, {
			target: {
				value: userNameInputNewValue,
			},
		});

		fireEvent.change(userEmailInput, {
			target: {
				value: userEmailInputNewValue,
			},
		});

		fireEvent.change(userMessageInput, {
			target: {
				value: userMessageInputNewValue,
			},
		});

		fireEvent.submit(form);

		expect(userNameInput.value).toBe(userNameInputValue);
		expect(userEmailInput.value).toBe(userNameInputValue);
		expect(userMessageInput.value).toBe(userNameInputValue);
	});
});

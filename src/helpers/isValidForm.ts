interface formStateProps {
	userName: string;
	userEmail: string;
	userMessage: string;
	[key: string]: string;
}

export const isValidForm = (formState: formStateProps) => {
	const userNameRegExp = /^(([^s.,:;]+)s?)+$/gim;
	const userEmailExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{1,63}$/gim;

	if (
		userEmailExp.test(formState.userEmail) &&
		userNameRegExp.test(formState.userName)
	) {
		return true;
	}
	return false;
};

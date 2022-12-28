interface ButtonProps {
	text: string;
	children: React.ReactNode;
	variant?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
	const {
		text,
		children,
		variant,
		type = undefined,
		onClick = undefined,
	} = props;
	return variant ? (
		<button
			className={`Button Button--${variant}`}
			type={type}
			onClick={() => onClick!()}
		>
			{text}
			<span className='Button-Icon'>{children}</span>
		</button>
	) : (
		<button className='Button' type={type}>
			{text}
			<span className='Button-Icon'>{children}</span>
		</button>
	);
};

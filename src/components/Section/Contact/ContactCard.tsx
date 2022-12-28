import { AiOutlineArrowRight } from 'react-icons/ai';

import { Button } from '../../Buttons';

interface ContactCardProps {
	children: React.ReactNode;
	title: string;
	url: string;
}

export const ContactCard = (props: ContactCardProps) => {
	const { children, title, url } = props;

	return (
		<div className='re-ContactCard'>
			<span className='re-ContactCard-icon'>{children}</span>
			<h4 className='re-ContactCard-title'>{title}</h4>
			<div className='re-ContactCard-wrapButton'>
				<a
					className='re-ContactCard-button'
					href={url}
					rel='noopener noreferrer'
					target='_blank'
				>
					<Button text='Write Me' variant='outline' type='submit'>
						<AiOutlineArrowRight className='Icon Icon--AiOutlineArrowRight'></AiOutlineArrowRight>
					</Button>
				</a>
			</div>
		</div>
	);
};

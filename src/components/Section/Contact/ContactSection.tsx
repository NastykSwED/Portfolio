import { ContactCard, ContactForm } from './';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const ContactSection = () => {
	return (
		<section className='re-Main-ContactSection' id='re-ContactSection'>
			<div className='re-ContactSection-content'>
				<h1 className='re-ContactSection-title'>Contact Me</h1>
				<h2 className='re-ContactSection-subTitle'>Get in touch</h2>
			</div>
			<div className='re-ContactSection-bodyContent'>
				<div className='re-ContactSection-column'>
					<h3 className='re-ContactSection-columnTitle'>Talk to me</h3>
					<div className='re-ContactSection-LayoutGrid'>
						<ContactCard title='Github' url='https://github.com/NastykSwED'>
							<AiFillGithub className='Icon Icon--AiFillGithub u-CFI' />
						</ContactCard>
						<ContactCard
							title='LinkedIn'
							url='https://www.linkedin.com/in/nastykswed/'
						>
							<AiFillLinkedin className='Icon Icon--AiFillLinkedinu u-CFI' />
						</ContactCard>
					</div>
				</div>
				<div className='re-ContactSection-column'>
					<h3 className='re-ContactSection-columnTitle'>Write to me</h3>
					<div className='re-ContactSection-wrapForm'>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
};

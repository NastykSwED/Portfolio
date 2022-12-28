import { Button } from '../../Buttons';

import { AiOutlineSend } from 'react-icons/ai';

export const HomeSection = () => {
	return (
		<section className='re-Main-HomeSection' id='re-HomeSection'>
			<div className='re-HomeSection-wrapAvatar'>
				<img
					className='re-HomeSection-avatar'
					src='/assets/profile/profilePic.webp'
					alt='Profile Picture'
				/>
			</div>
			<div className='re-HomeSection-content'>
				<h1 className='re-HomeSection-title'>Hi I'm Ronald Torres</h1>
				<h2 className='re-HomeSection-subTitle'>Junior Front End Developer</h2>
				<p className='re-HomeSection-description'>
					A Front End Developer and CS Student with experience in web
					development that enjoys web technologies.
				</p>
			</div>

			<a className='re-HomeSection-wrapButton' href='#re-ContactSection'>
				<Button text='CONNECT WITH ME'>
					<AiOutlineSend className='Icon--AiOutlineSend' />
				</Button>
			</a>
		</section>
	);
};

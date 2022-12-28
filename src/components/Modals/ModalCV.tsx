type ModalCVProps = {
	isOpen: boolean;
};

export const ModalCV = (props: ModalCVProps) => {
	const { isOpen } = props;

	return (
		<div className={`re-ModalCV ${isOpen ? 'isOpen' : ''}`}>
			<div className='re-ModalCV-wrapButtons'>
				<a
					aria-label='Download my CV in Spanish'
					href='/assets/cvs/spanish_cv.pdf'
					className='re-ModalCV-link'
					download='ronald_torres_spanishCV'
					rel='noopener noreferrer'
				>
					Spanish
				</a>
				<a
					aria-label='Download my CV in English'
					href='/assets/cvs/english_cv.pdf'
					className='re-ModalCV-link'
					download='ronald_torres_EnglishCV'
					rel='noopener noreferrer'
				>
					English
				</a>
			</div>
		</div>
	);
};

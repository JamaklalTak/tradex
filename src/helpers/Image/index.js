import React from 'react';

import ImageStyleContainer from './Image.styled';

const Image = (props) => {
	const { src, alt, className, id, onClick } = props;
	return(
		<ImageStyleContainer
			className={className}
		>
			<img
				src={src}
				alt={alt}
				id={id}
				onClick={onClick}
			/>
		</ImageStyleContainer>
	);
}

export default Image;
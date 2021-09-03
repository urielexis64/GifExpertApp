import React from "react";

export const GifGridItem = ({img}) => {
	return (
		<div className='card' onClick={() => window.open(img.url)}>
			<img src={img.url} alt={img.title} />
			<p>{img.title}</p>
		</div>
	);
};

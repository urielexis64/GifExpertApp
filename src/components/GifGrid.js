import React, {useState, useEffect} from "react";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({category}) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		getGifs();
	}, []);

	const getGifs = async (category = "Porn") => {
		const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=qqXi33Q9UqjGmgK4jNRWYHME0sVGhV9u`;
		const resp = await fetch(url);
		const {data} = await resp.json();

		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized.url,
			};
		});
		setImages(gifs);
		// return data;
	};

	return (
		<>
			<h3>{category}</h3>
			<div className='card-grid'>
				{images.map((img) => (
					<GifGridItem key={img.id} img={img} />
				))}
			</div>
		</>
	);
};

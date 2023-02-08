/* eslint-disable no-magic-numbers */
import React from 'react';
import Rectangle from './Rectangle';

const BoxMultiplier = 350;
const BoxAdd = 150;

const Box = (context) => {
	const { data: { character, key }} = context;

	return (
		<div
			className="box"
			style={ {
				left: (key * BoxMultiplier) + BoxAdd,
				width: 300,
				height: 250,
			} }
		>
			<img
				src={ character.image }
				alt="fs"
				width="300px"
				height="250px"
			/>
			<Rectangle { ...context }/>
		</div>);
};

export default Box;

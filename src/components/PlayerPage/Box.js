/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import Name from './Name';
import PowerUp from './PowerUp';
import PowerLevel from './PowerLevel';
import Rank from './Rank';
import Trophies from './Trophies';
import Rectangle from './Rectangle';

const Box = (context) => {
	const { data: { character }} = context;

	return (
		<div
			className="box"
		>
			<img
				src={ character.image }
				alt="fs"
				width="300px"
				height="250px"
			/>
			<Name { ...context }/>
			<PowerUp { ...context }/>
			<PowerLevel { ...context }/>
			<Rank { ...context }/>
			<Trophies { ...context }/>
			<Rectangle { ...context }/>
		</div>
	);
};

export default Box;

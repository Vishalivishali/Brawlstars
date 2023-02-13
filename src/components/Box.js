/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import React from 'react';
import PowerLevel from './PowerLevel';
import Name from './Name';
import Rank from './Rank';
import Trophies from './Trophies';
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
			<Name { ...context }/>
			<PowerLevel { ...context }/>
			<Rank { ...context }/>
			<Trophies { ...context }/>
			<Rectangle { ...context }/>
		</div>);
};

export default Box;

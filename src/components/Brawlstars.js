import React from 'react';
import Box from './Box';

const Brawlstars = (context) => {
	const { state: { characters }} = context;

	return characters.map((character, key) =>

		<Box
			key={ key }
			{ ...{ ...context,
				data: { character, key }} }
		/>);
};

export default Brawlstars;

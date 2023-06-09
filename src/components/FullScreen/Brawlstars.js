import React from 'react';
import Box from '../PlayerPage/Box';

const Brawlstars = (context) => {
	const { state: { characters }} = context;

	return <div className="container">
		{ characters.map((character, key) =>

			<Box
				key={ key }
				{ ...{ ...context,
					data: { character, key }} }
			/>)}
	</div>;
};

export default Brawlstars;

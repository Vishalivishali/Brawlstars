import React from 'react';
import BrawlersList from './BrawlersList';

const Brawlstars = (context) => {
	const { state: { characters }} = context;

	return characters.map((character, key) =>

		<BrawlersList
			key={ key }
			{ ...{ ...context,
				data: { character, key }} }
		/>);
};

export default Brawlstars;

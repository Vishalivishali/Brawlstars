/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
import React from 'react';
import getSorting from '../services/getSorting';

const types = {
	'Most Trophies': (context) => getSorting.getMostTrophies(context),
	'Least Trophies': (context) => getSorting.getLeastTrophies(context),
	'Power Level': (context) => getSorting.getPowerLevel(context),
	'By Rarity': (context) => getSorting.getByRarity(context),
	'By Rarity Descending': (context) => getSorting.getByRarityDescending(context),
	'Closest Rank': (context) => getSorting.getClosestRank(context),
};
const Buttons = (context) => {
	const { state, setState,
		state: { indexValue, buttonName }, config: { sorting }} = context;

	return (
		<button
			className="buttons"
			onClick={ () => setState({ ...state,
				indexValue: indexValue + 1,
				buttonName: sorting[indexValue % 6],
				brawlers: types[buttonName](context) }) }
		>{buttonName}</button>
	);
};

export default Buttons;

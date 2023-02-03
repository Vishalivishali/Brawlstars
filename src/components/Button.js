/* eslint-disable no-magic-numbers */
import React from 'react';
import getSorting from '../services/getSorting';

const types = {
	MostTrophies: (context) => getSorting.getMostTrophies(context),
	LeastTrophies: (context) => getSorting.getLeastTrophies(context),
	PowerLevel: (context) => getSorting.getPowerLevel(context),
	ByRarity: (context) => getSorting.getByRarity(context),
	ByRarityDescending: (context) => getSorting.getByRarityDescending(context),
	ClosestRank: (context) => getSorting.getClosestRank(context),
};
const Buttons = (context) => {
	const { state, setState,
		state: { indexValue, buttonName }, config: { sorting }} = context;

	return (
		<button
			className=" buttons"
			onClick={ () => setState({ ...state,
				indexValue: indexValue + 1,
				buttonName: sorting[indexValue % 6],
				brawlers: types[buttonName](context) }) }
		>{buttonName}</button>
	);
};

export default Buttons;

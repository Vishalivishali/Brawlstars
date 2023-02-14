/* eslint-disable no-magic-numbers */
import './App.scss';

import { rndBetween } from '@laufire/utils/lib';
import { React, useState } from 'react';

import FullScreen from './components/FullScreen/FullScreen';
import getSorting from './services/getSorting';

const brawlers = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		powerPoints: rndBetween(1, 100),
		rank: rndBetween(1, 10),
		coins: rndBetween(1, 100),
		trophies: rndBetween(1, 200),
		powerLevel: rndBetween(1, 20),
	}));

const initialState = (context) => ({
	characters: brawlers(context),
	indexValue: 1,
	buttonName: 'Least Trophies',
	powerUp: false,
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};
	const { once } = context;

	once(() => getSorting.getPowerUp(extendedContext));

	return <div className="App">
		<FullScreen { ...extendedContext }/>
	</div>;
};

export default App;

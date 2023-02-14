/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';
import { React, useState } from 'react';
import './App.scss';
import Brawlstars from './components/Brawlstars';

import FullScreen from './components/FullScreen';
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

	once(() => getSorting.getUpdatedPowerUp(extendedContext));

	return <div className="App">
		<FullScreen { ...extendedContext }/>
		<Brawlstars { ...extendedContext }/>
	</div>;
};

export default App;

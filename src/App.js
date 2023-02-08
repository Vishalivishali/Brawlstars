/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';
import { React, useState } from 'react';
import './App.scss';

import Brawlstars from './components/Brawlstars';

const brawlers = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		powerPoints: rndBetween(1, 100),
		rank: rndBetween(1, 10),
		coins: rndBetween(1, 100),
		trophies: rndBetween(1, 380),
		powerLevel: rndBetween(1, 20),
	}));

const initialState = (context) => ({
	characters: brawlers(context),
	indexValue: 1,
	buttonName: 'LeastTrophies',
});

const App = (context) => {
	const [state, setState] = useState(initialState(context));
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Brawlstars { ...extendedContext }/>
	</div>;
};

export default App;

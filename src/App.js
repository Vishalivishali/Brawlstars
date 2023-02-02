import { React, useState } from 'react';
import './App.scss';

import Brawlers from './components/Brawlers';
import Characters from './data/Characters';
import Buttons from './components/Button';

const initialState = {
	brawlers: Characters,
	indexValue: 1,
	buttonName: 'LeastTrophies',
};

const App = (context) => {
	const [state, setState] = useState(initialState);
	const extendedContext = { ...{ ...context, state, setState }};

	return <div className="App">
		<Brawlers { ...extendedContext }/>
		<Buttons { ...extendedContext }/>
	</div>;
};

export default App;

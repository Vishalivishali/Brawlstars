/* eslint-disable max-lines-per-function */
import React from 'react';
import Coins from './Coins';
import PowerPoints from './PowerPoints';

const Rectangle = (context) =>

	<div className="rectangle">
		<PowerPoints { ...context }/>
		<label className="add"> + </label>
		<Coins { ...context }/>
	</div>;

export default Rectangle;

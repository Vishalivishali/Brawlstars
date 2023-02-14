/* eslint-disable max-lines-per-function */
import React from 'react';
import PowerPoints from './PowerPoints';
import Coins from './Coins';

const Rectangle = (context) =>

	<div className="rectangle">
		<PowerPoints { ...context }/>
		<label className="add"> + </label>
		<Coins { ...context }/>
	</div>;

export default Rectangle;

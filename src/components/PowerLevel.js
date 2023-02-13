import React from 'react';

const PowerLevel = ({ data: { character }}) =>
	<div>
		<label className="power">POWER</label>
		<label className="powerLevels">{character.powerLevel}</label>
	</div>;

export default PowerLevel;

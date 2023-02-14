import React from 'react';

const PowerLevel = ({ data: { character }}) =>
	<div>
		<label className="power">POWER</label>
		<label className="powerLevel">{character.powerLevel}</label>
	</div>;

export default PowerLevel;

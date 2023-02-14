import React from 'react';

const Name = ({ data: { character }}) =>
	<div>
		<label className="name">{character.name}</label>
	</div>;

export default Name;

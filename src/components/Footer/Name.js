/* eslint-disable max-len */
import React from 'react';

const Name = (context) => {
	const { data: { character }} = context;

	return <div>
		<label className="name">{character.name}</label>
	</div>;
};

export default Name;

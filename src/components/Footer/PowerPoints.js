import React from 'react';

const PowerPoints = (context) => {
	const { data: { character }} = context;

	return <div>
		<img
			className="powerPoints"
			src="images/powerPoint.jpeg"
			alt="fs"
			height="30px"
			width="30px"
		/> <label className="powerPoint">{character.powerPoints}</label>
	</div>;
};

export default PowerPoints;

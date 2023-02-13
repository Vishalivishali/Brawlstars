import React from 'react';

const Trophies = ({ data: { character }}) =>
	<div className="miniBox">
		<img
			className="trophiesImage"
			src="images/trophy.png"
			alt="fs"
			width="20px"
			height="20px"
		/>
		<label className="trophies">{character.trophies}</label>
	</div>;

export default Trophies;

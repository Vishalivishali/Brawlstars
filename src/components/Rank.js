import React from 'react';

const Rank = ({ data: { character }}) =>
	<div>
		<img
			className="hexagon"
			src="images/hexagon.png"
			alt="fs"
			width="30px"
			height="30px"
		/>
		<label className="rank">{character.rank}</label>
	</div>;

export default Rank;

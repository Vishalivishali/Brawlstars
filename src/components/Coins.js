import React from 'react';

const Coins = (context) => {
	const { data: { character }} = context;

	return <div>
		<img
			className="coins"
			src="images/coins.jpeg"
			alt="fs"
			height="30px"
			width="30px"
		/> <label className="coin">{character.coins}</label>
	</div>;
};

export default Coins;

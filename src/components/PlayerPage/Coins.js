import React from 'react';

const Coins = (context) => {
	const { data: { character }} = context;

	return <div>
		<img
			className="coin"
			src="images/coins.jpeg"
			alt="fs"
			height="30px"
			width="30px"
		/>
		<label className="coinValue">{character.coins}</label>
	</div>;
};

export default Coins;

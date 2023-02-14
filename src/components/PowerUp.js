import React from 'react';

const PowerUp = ({ state: { powerUp }}) =>
	<div className={ powerUp ? 'powerUp' : 'updatePowerUp' }>
		<img
			src="images/powerup.jpeg"
			alt="fs"
			width="30px"
			height="30px"
		/>
	</div>;

export default PowerUp;

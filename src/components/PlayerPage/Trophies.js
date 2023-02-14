import React from 'react';

const Trophies = ({ data: { character: { trophies }}}) =>
	<div className="miniBox">
		<div style={ { width: `${ trophies }px`, height: '23px', backgroundColor: 'darkOrange' } }>
			<img
				className="trophyImage"
				src="images/trophy.png"
				alt="fs"
				width="20px"
				height="20px"
			/>
			<label className="trophyValue">{trophies}</label>
		</div>
	</div>;

export default Trophies;

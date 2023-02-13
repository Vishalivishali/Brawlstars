import React from 'react';
import Brawlstars from './Brawlstars';
import Header from './Header';
import Buttons from './Button';

const FullScreen = (context) =>
	<div
		className="fullScreen"
		style={ { backgroundImage: `url(${ process.env.PUBLIC_URL }/images/background.jpeg)` } }
	>
		<Header { ...context }/>
		<Buttons { ...context }/>
		<Brawlstars { ...context }/>
	</div>;

export default FullScreen;

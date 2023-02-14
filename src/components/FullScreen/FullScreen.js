import React from 'react';
import Header from '../Header/Header';
import Buttons from '../Header/Button';
import Brawlstars from '../Header/Brawlstars';

const FullScreen = (context) =>
	<div>
		<Header { ...context }/>
		<Buttons { ...context }/>
		<Brawlstars { ...context }/>
	</div>;

export default FullScreen;

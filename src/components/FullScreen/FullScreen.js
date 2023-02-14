import React from 'react';
import Header from './Header';
import Button from './Button';
import Brawlstars from './Brawlstars';

const FullScreen = (context) =>
	<div>
		<Header { ...context }/>
		<Button { ...context }/>
		<Brawlstars { ...context }/>
	</div>;

export default FullScreen;

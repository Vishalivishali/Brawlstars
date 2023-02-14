import React from 'react';
import Header from './Header';
import Buttons from './Button';

const FullScreen = (context) =>
	<div>
		<Header { ...context }/>
		<Buttons { ...context }/>
	</div>;

export default FullScreen;

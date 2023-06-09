/* eslint-disable max-len */
import React from 'react';

const Header = ({ state: { characters }}) =>
	<div>
		<label className="header">BRAWLERS</label>
		<label className="headerValue">{ characters.length }/64</label>
	</div>;

export default Header;

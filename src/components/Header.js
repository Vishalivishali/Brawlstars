/* eslint-disable max-len */
import React from 'react';

const Header = ({ state: { characters }}) =>
	<div>
		<label className="header" style={ { fontSize: '20px' } }>Brawlers  {characters.length}/64</label>
	</div>;

export default Header;

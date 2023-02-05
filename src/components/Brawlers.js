import React from 'react';
import tableHeader from './TableHeader';
import TableBody from './TableBody';

const Brawlers = (context) => {
	const { config: { headings }, state: { characters }} = context;

	return <div>
		<h1 className="titleStyle">BrawlersList</h1>
		<table className="tableStyle"/>
		<thead>
			<tr>
				{headings.map(tableHeader)}
			</tr>
		</thead>
		<tbody>
			{characters
				.map((character, key) =>
					TableBody({ ...context,
						data: { character, key, headings }}))}
		</tbody>
	</div>;
};

export default Brawlers;

import React from 'react';
import Characters from '../data/Characters';
import tableHeader from './TableHeader';
import TableBody from './TableBody';

const Brawlers = (context) => {
	const { config: { headings }} = context;

	return <div>
		<h1 className="titleStyle">BrawlersList</h1>
		<table className="tableStyle"/>
		<thead>
			<tr>
				{headings.map(tableHeader)}
			</tr>
		</thead>
		<tbody>
			{Characters
				.map((brawlers, key) =>
					TableBody({ ...context,
						data: { brawlers, key, headings }}))}
		</tbody>
	</div>;
};

export default Brawlers;

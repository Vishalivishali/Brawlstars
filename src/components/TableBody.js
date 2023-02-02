import { React } from 'react';

const TableBody = (context) => {
	const { data: { brawlers, key }, config: { headings }} = context;

	return <tr key={ key }className="textStyle">
		{headings.map((header, index) =>
			<td key={ index } className="textStyle">{brawlers[header]}</td>)}
	</tr>;
};

export default TableBody;

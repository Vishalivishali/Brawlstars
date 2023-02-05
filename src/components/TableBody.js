import { React } from 'react';

const TableBody = (context) => {
	const { data: { character, key }, config: { headings }} = context;

	return <tr key={ key }className="textStyle">
		{headings.map((header, index) =>
			<td key={ index } className="textStyle">{character[header]}</td>)}
	</tr>;
};

export default TableBody;

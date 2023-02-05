import { React } from 'react';

const imageFunction = (path) =>
	<img
		src={ path }
		alt="fs"
		width="200px"
		height="200px"
	/>;

const TableBody = (context) => {
	const { data: { character, key }, config: { headings }} = context;

	return <tr key={ key }className="textStyle">
		{headings.map((header, index) =>
			<td key={ index } className="textStyle">
				{character[header] === character.img
					? imageFunction(character.img)
					: character[header] }
			</td>)}
	</tr>;
};

export default TableBody;

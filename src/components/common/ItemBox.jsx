import React from 'react';

import { Card } from 'antd';
function ItemBox({ children, className, ...props }) {
	const classSets = `item-box ${className}`;
	return (
		<Card className={classSets} {...props}>
			{children}
		</Card>
	);
}

export default ItemBox;

import React from 'react';
import { Card } from 'antd';
import classnames from 'classnames';

function ItemBox({ children, className='', ...props }) {
	return (
		<Card className={classnames('item-box', className)} {...props}>
			{children}
		</Card>
	);
}

export default ItemBox;

import React from 'react';
import { Row } from 'antd';

function RowContainer({children, className, gutter, ...props}) {
	const classSets = `row-container ${className}`;
	return (
		<Row className={classSets} {...props} gutter={gutter || 16}>
			{children}
		</Row>
	)
}

export default RowContainer;

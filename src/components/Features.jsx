import React from 'react';
import { Col, Icon } from 'antd';
import classNames from 'classnames';

import RowContainer from './common/RowContainer';
import ItemBox from './common/ItemBox';

const iconProps = { style: { fontSize: '3rem', padding: '1rem' }, theme: "filled"};

const featureList = [
	{
		icon: <Icon type="star" {...iconProps}/>,
		header: 'Some header',
		content:
			'請給我一些內容填在這裡請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡',
	},
	{
		icon: <Icon type="rise" {...iconProps} theme="outlined" />,
		header: 'Some header',
		content:
			'請給我一些內容填在這裡請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡',
	},
	{
		icon: <Icon type="user" {...iconProps} theme="outlined" />,
		header: 'Some header',
		content:
			'請給我一些內容填在這裡請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡',
	},
	{
		icon: <Icon type="smile" {...iconProps}/>,
		header: 'Some header',
		content:
			'請給我一些內容填在這裡請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡 請給我一些內容填在這裡',
	},
];

function Features({ chidren, className, ...props }) {
	const classSets = classNames('features', 'section', className);
	return (
		<div className={classSets} {...props}>
			<h2 className="section__header">設計理念</h2>
			<RowContainer style={{ alignItems: 'stretch', flexWrap: 'wrap' }}>
				{featureList.map(({ icon, header, content }, index) => (
					<Col key={index} className="gutter-row" {...{ xs: 24, sm: 12, md: 6, lg: 6 }}>
						<ItemBox cover={icon} bordered={false}>
							<h3 className="section__subheader">{header}</h3>
							<p className="section__paragraph">{content}</p>
						</ItemBox>
					</Col>
				))}
			</RowContainer>
		</div>
	);
}

export default Features;

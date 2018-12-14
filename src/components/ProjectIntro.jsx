import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';

function ProjectIntro({className, ...props}) {
	const classSets = classNames("project-intro", "section", className);
	return (
		<div className={classSets} {...props}>
			<h2 className="section__header">何謂中藥梘？</h2>
			<Row gutter={16}>
				<Col className="gutter-row" {...{xs: 24, sm: 24, md: 12, lg: 12 }}>
					<p className="section__paragraph">
						請給我一些內容填在這裡請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
						請給我一些內容填在這裡
					</p>
				</Col>
		  </Row>
		</div>
	)
}

export default ProjectIntro;

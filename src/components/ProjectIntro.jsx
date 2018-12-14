import React from 'react';
import { Row, Col } from 'antd';

function ProjectIntro(props) {
	return (
		<div className="project-intro" {...props}>
			<Row gutter={16}>
				<Col className="gutter-row" {...{xs: 24, sm: 24, md: 12, lg: 12 }}>
					<h1>何謂中藥梘？</h1>
					<p>
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

import React from 'react';
import { Row, Col } from 'antd';
import classNames from 'classnames';
import InViewMonitor from 'react-inview-monitor';

function ProjectIntro({ className, ...props }) {
  const classSets = classNames('project-intro', 'section', className);
  return (
    <div className={classSets} {...props}>
      <Row gutter={16}>
        <Col className="gutter-row" {...{ xs: 24, sm: 24, md: 12, lg: 12 }}>
          <InViewMonitor
            classNameNotInView="vis-hidden"
            classNameInView={`animated fadeInRight`}
          >
            <h2 className="section__header">何謂中藥藥渣梘？</h2>
            <p className="section__paragraph">
              藥莊透過收集煎煮中藥後殘留的藥渣，提取其中的精華，再加工成中藥梘。
              我們希望用户以中藥梘配合飲服中藥，達至「內服外用」的功效，療效更見顯著。
            </p>
          </InViewMonitor>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectIntro;

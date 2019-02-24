import React from 'react';
import { Col, Button } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import InViewMonitor from 'react-inview-monitor';

import Row from './common/RowContainer';

function HeroContent({ ...props }) {
  return (
    <div className="hero-content" {...props}>
      <Row>
        <Col
          className="gutter-row flex-center"
          {...{ xs: 24, sm: 24, md: 12, lg: 12 }}
        >
          <div className="hero-content__main">
            <InViewMonitor
              classNameNotInView="vis-hidden"
              classNameInView="animated fadeInUp"
            >
              <h1 className="hero-content__header">「 藥莊 」</h1>
            </InViewMonitor>
            <InViewMonitor
              classNameNotInView="vis-hidden"
              classNameInView="animated animate-delay-0.5 fadeInUp"
            >
              <p className="hero-content__subcontent">
                藥莊採用註冊中醫師為病人處方的中藥藥渣，製成最適合患者使用的個人護理用品，
                配合內服外用，讓患者得到更全面、持續的治理。亦可以減少耗用新鮮的藥材，
                和開採及運輸的碳排放。我們會使用食物殘渣機處理藥渣，經渠送到污水處理設施，
                減少將有機廢物棄置到堆填區，利用現有設施轉廢為能。
              </p>
            </InViewMonitor>
            <InViewMonitor
              classNameNotInView="vis-hidden"
              classNameInView="animated animate-delay-1 fadeInUp"
            >
              <Button className="hero-content__button" ghost>
                <AnchorLink offset="100" href="#project-introduction">
                  更多資料
                </AnchorLink>
              </Button>
            </InViewMonitor>
          </div>
        </Col>
        <Col className="gutter-row" {...{ xs: 0, sm: 0, md: 12, lg: 12 }} />
      </Row>
    </div>
  );
}

export default HeroContent;

import React from 'react';
import PropTypes from 'prop-types';
import { Col, Icon } from 'antd';
import classNames from 'classnames';
import InViewMonitor from 'react-inview-monitor';

import RowContainer from './common/RowContainer';
import ItemBox from './common/ItemBox';

const iconProps = {
  style: { fontSize: '3rem', padding: '1rem' },
  theme: 'filled',
};

const featureList = [
  {
    icon: <Icon type="star" {...iconProps} />,
    header: '創新',
    content:
      '藥莊在尊重傳統的同時追求創新，中藥藥渣梘結合了減碳，回收及中醫學術研究，在市場上別樹一幟。 我們同時亦致力於進行不同試驗，為求提供最好的產品。',
  },
  {
    icon: <Icon type="rise" {...iconProps} theme="outlined" />,
    header: '高成效',
    content:
      '藥莊的中藥藥渣梘是基於中醫的「內服外用，雙管齊下」的意念而誕生，務求將一服中藥的藥效全部萃取給用戶。 中藥梘用於日常，對長期病患者的幫助尤其顯著',
  },
  {
    icon: <Icon type="user" {...iconProps} theme="outlined" />,
    header: '度身訂造',
    content:
      '藥莊總是希望為用戶提供最好的服務，因此我們不倦於設計度身訂造的產品，我們首個計劃「中藥藥渣梘」正正是為此而設。',
  },
  {
    icon: <Icon type="smile" {...iconProps} />,
    header: '關心你的需求',
    content:
      '我們深明與顧客的關係是一間公司最重要的財富，因此藥莊總是會透過不同形式去關心你的需求，如果你有意見想分享，歡迎電郵或在Instagram上inbox我們。',
  },
];

const customRowStyle = {
  marginLeft: 0,
  marginRight: 0,
  alignItems: 'stretch',
  flexWrap: 'wrap',
  alignContent: 'stretch',
  display: 'flex',
};

function Features({ className, ...props }) {
  const classSets = classNames('features', 'section', 'section--alt', className);
  return (
    <div className={classSets} {...props}>
      <h2 className="section__header">設計理念</h2>
      <RowContainer gutter={16} style={customRowStyle}>
        {featureList.map(({ icon, header, content }) => (
          <Col key={header} className="gutter-row" {...{ xs: 24, sm: 12, md: 12, lg: 6 }}>
            <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInUp">
              <ItemBox cover={icon} bordered={false}>
                <h3 className="section__subheader">{header}</h3>
                <p className="section__paragraph">{content}</p>
              </ItemBox>
            </InViewMonitor>
          </Col>
        ))}
      </RowContainer>
    </div>
  );
}

Features.propTypes = {
  className: PropTypes.string,
};

Features.defaultProps = {
  className: '',
};

export default Features;

import React from 'react';
import { Icon } from 'antd';

import openNewTab from '../utils/openNewTab';

const socialIcons = [
  {
    type: 'facebook',
    onClick() {
      openNewTab('https://www.facebook.com/jc.coil/');
    },
  },
  {
    type: 'instagram',
    onClick() {
      openNewTab('https://www.instagram.com/soap_chong_chinese_medicine');
    },
  },
  {
    type: 'mail',
    onClick() {
      openNewTab('mailto:soapchong.chinesemedicine@gmail.com');
    },
  },
];

function GlobalFooter() {
  return (
    <div className="flex-center flex-center--column">
      <h5 className="footer__header">留意我們其他動態</h5>
      <div className="flex-center">
        {socialIcons.map(({ type, onClick }) => (
          <div onClick={onClick} key={type}>
            <Icon className="footer__icon" type={type} />
          </div>
        ))}
      </div>
      <p>Copyright ©2019 All rights reserved</p>
    </div>
  );
}

export default GlobalFooter;

import React from 'react';
import { Layout, Icon } from 'antd';

import logoUrl from './images/logo.png';
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
			window.open('mailto:soapchong.chinesemedicine@gmail.com');
		},
	},
];

const onClickCreator = href => () => openNewTab(href);
function Footer(props) {
	return (
		<Layout.Footer className="footer" {...props}>
			<div className="flex-center flex-center--column">
				<img src={logoUrl} className="footer__logo" />
				<h5 className="footer__header">留意我們其他動態</h5>
				<div className="flex-center">
					{socialIcons.map(({ type, onClick }) => (
						<div onClick={onClick}>
							<Icon className="footer__icon" type={type} />
						</div>
					))}
				</div>
				<p>Copyright ©2018 All rights reserved</p>
			</div>
		</Layout.Footer>
	);
}

export default Footer;

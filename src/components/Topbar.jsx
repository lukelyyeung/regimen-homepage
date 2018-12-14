import React from 'react';
import { Menu, Icon } from 'antd';

import logoUrl from './images/logo-white.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Topbar extends React.Component {
	state = {
		current: 'mail',
	};

	handleClick = e => {
		this.setState({
			current: e.key,
		});
	};

	render() {
		return (
			<Menu
				className="topbar"
				onClick={this.handleClick}
				selectedKeys={[this.state.current]}
				mode="horizontal"
			>
				<Menu.Item className="topbar__logo">
				  <AnchorLink offset="100" href="#hero-content">
						<img src={logoUrl} alt="JoekChong Logo"/>
					</AnchorLink>
				</Menu.Item>
				<Menu.Item key="introduction">
				<Icon type="reconciliation" />
				<AnchorLink offset="100" href="#project-introduction">產品介紹</AnchorLink>
				</Menu.Item>
				<Menu.Item key="design">
				<Icon type="team" />
					<AnchorLink offset="100" href="#features">設計理念</AnchorLink>
				</Menu.Item>
				<Menu.Item key="gallery">
				<Icon type="picture" theme="filled" />
					<AnchorLink offset="100" href="#gallery">活動紀錄</AnchorLink>
				</Menu.Item>
				<Menu.Item key="network">
				<Icon type="compass" />
				  <AnchorLink offset="100" href="#practitioner-network">中醫網絡</AnchorLink>
				</Menu.Item>
				<Menu.Item key="contactUs">
				<Icon type="mail" />
				  <AnchorLink offset="100" href="#contact-us">聯繫我們</AnchorLink>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Topbar;

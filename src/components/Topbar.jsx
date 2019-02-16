import React, { Component } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../styles/topbar.scss';
import logoUrl from '../../static/images/logo-white.png';

class Topbar extends Component {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
    onMenuIconClick: PropTypes.func.isRequired,
    isSiderToggled: PropTypes.bool.isRequired,
    menuItems: PropTypes.array.isRequired,
  };

  state = { current: null };

  handleClick = e => this.setState({ current: e.key });

  navigateTo = path => () => navigate(path);

  renderNavItem() {
    const { isMobile, menuItems, onMenuIconClick, isSiderToggled } = this.props;

    if (isMobile) {
      return (
        <Menu.Item className="topbar__toggle-button" key="toggle">
          <Icon onClick={onMenuIconClick} type={isSiderToggled ? 'menu-unfold' : 'menu-fold'} />
        </Menu.Item>
      );
    }

    return menuItems.map(({ label, icon, href, path }) => (
      <Menu.Item key={label}>
        <Icon type={icon} />
        {path ? (
          <span onClick={this.navigateTo(path)}>{label}</span>
        ) : (
          <AnchorLink offset={100} href={href}>
            {label}
          </AnchorLink>
        )}
      </Menu.Item>
    ));
  }

  render() {
    const { current } = this.state;

    return (
      <Menu
        className="topbar"
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item className="topbar__logo">
          <AnchorLink offset={100} href="#hero-content">
            <img src={logoUrl} alt="JoekChong Logo" />
          </AnchorLink>
        </Menu.Item>
        {this.renderNavItem()}
      </Menu>
    );
  }
}

export default Topbar;

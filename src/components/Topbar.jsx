import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import logoUrl from '../../static/images/logo-white.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavigationLink from './NavigationLink';
class Topbar extends React.Component {
  static propTypes = {
    isMobile: PropTypes.bool,
  };

  state = {
    current: null,
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  renderLogo() {
    return (
      <Menu.Item className="topbar__logo topbar__item" key="logo">
        <AnchorLink offset={100} href="#hero-content">
          <img src={logoUrl} alt="JoekChong Logo" />
        </AnchorLink>
      </Menu.Item>
    );
  }

  renderMenuItems() {
    const { isMobile, menuItems, isSiderToggled, onMenuIconClick } = this.props;

    if (isMobile) {
      return (
        <Menu.Item className="topbar__item topbar__toggle-button" key="toggle">
          <Icon onClick={onMenuIconClick} type={isSiderToggled ? 'menu-unfold' : 'menu-fold'} />
        </Menu.Item>
      );
    }

    return menuItems.map(({ label, icon, ...navigationProps }) => (
      <Menu.Item key={label} className="topbar__item">
        <Icon type={icon} />
        <NavigationLink {...navigationProps} label={label} />
      </Menu.Item>
    ));
  }

  render() {
    return (
      <Menu
        className="topbar"
        mode="horizontal"
      >
        {this.renderLogo()}
        {this.renderMenuItems()}
      </Menu>
    );
  }
}

export default Topbar;

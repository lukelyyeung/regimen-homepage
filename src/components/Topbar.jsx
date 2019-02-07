import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import logoUrl from '../../static/images/logo-white.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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

  render() {
    const { isMobile, menuItems, isSiderToggled, onMenuIconClick } = this.props;
    return (
      <Menu
        className="topbar"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item className="topbar__logo">
          <AnchorLink offset={100} href="#hero-content">
            <img src={logoUrl} alt="JoekChong Logo" />
          </AnchorLink>
        </Menu.Item>
        {isMobile ? (
          <Menu.Item className="topbar__toggle-button" key="toggle">
            <Icon onClick={onMenuIconClick} type={isSiderToggled ? 'menu-unfold' : 'menu-fold'} />
          </Menu.Item>
        ) : (
          menuItems.map(({ label, icon, href }) => (
            <Menu.Item key={label}>
              <Icon type={icon} />
              <AnchorLink offset={100} href={href}>
                {label}
              </AnchorLink>
            </Menu.Item>
          ))
        )}
      </Menu>
    );
  }
}

export default Topbar;

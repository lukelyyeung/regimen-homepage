import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Menu, Icon } from 'antd';
import NavigationLink from './NavigationLink';

class Topbar extends PureComponent {
  static propTypes = {
    logo: PropTypes.string,
    isMobile: PropTypes.bool.isRequired,
    onMenuIconClick: PropTypes.func.isRequired,
    isSiderToggled: PropTypes.bool.isRequired,
    menuItems: PropTypes.array.isRequired,
  };

  static defaultProps = {
    logo: null,
  };

  state = { current: null };

  handleClick = e => this.setState({ current: e.key });

  renderLogo() {
    const { logo } = this.props;
    if (!logo) {
      return null;
    }

    return (
      <Menu.Item className="topbar__logo topbar__item topbar__item--always" key="logo">
        <Link to="/">
          <img src={logo} alt="Brand Logo" />
        </Link>
      </Menu.Item>
    );
  }

  renderMenuItems() {
    const { isMobile, menuItems, isSiderToggled, onMenuIconClick } = this.props;

    if (isMobile) {
      return (
        <Menu.Item className="topbar__item topbar__item--mobile topbar__toggle-button" key="toggle">
          <Icon onClick={onMenuIconClick} type={isSiderToggled ? 'menu-unfold' : 'menu-fold'} />
        </Menu.Item>
      );
    }

    return menuItems.map(navigationProps => (
      <NavigationLink {...navigationProps} className="topbar__item" key={navigationProps.label} />
    ));
  }

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        className="topbar"
        selectedKeys={[current]}
        mode="horizontal"
      >
        {this.renderLogo()}
        {this.renderMenuItems()}
      </Menu>
    );
  }
}

export default Topbar;

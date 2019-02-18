import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import NavigationLink from './NavigationLink';
class Topbar extends PureComponent {
  static propTypes = {
		isMobile: PropTypes.bool,
		logo: PropTypes.string,
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
		const { logo } = this.props;
		if (!logo) {
			return null;
		}

    return (
      <Menu.Item className="topbar__logo topbar__item" key="logo">
        <AnchorLink offset={100} href="#hero-content">
          <img src={logo} alt="Brand Logo" />
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

    return menuItems.map(navigationProps => (
      <NavigationLink {...navigationProps} className="topbar__item" key={navigationProps.label} />
    ));
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        className="topbar"
        mode="horizontal"
        selectedKeys={[this.state.current]}
      >
        {this.renderLogo()}
        {this.renderMenuItems()}
      </Menu>
    );
  }
}

export default Topbar;

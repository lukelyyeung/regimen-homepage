import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from 'rc-drawer';
import { Layout, Menu } from 'antd';
import NavigationLink from './NavigationLink';

const { Sider } = Layout;

export default class SiderMenu extends PureComponent {
  static propTypes = {
    closeSider: PropTypes.func.isRequired,
    toggleSider: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired,
    collapsed: PropTypes.bool,
    logo: PropTypes.string,
  };

  static defaultProps = {
    collapsed: false,
    logo: '',
  };

  renderMenuItems() {
    const { closeSider, menuItems } = this.props;
    return menuItems.map(navigationProps => (
      <NavigationLink
        {...navigationProps}
        className="menu-item"
        onClick={closeSider}
        key={navigationProps.label}
      />
    ));
  }

  render() {
    const { logo, collapsed, toggleSider, closeSider } = this.props;
    return (
      <DrawerMenu
        getContainer={null}
        level={null}
        handleChild={<i className="drawer-handle-icon" />}
        onHandleClick={toggleSider}
        open={!collapsed}
        onMaskClick={closeSider}
      >
        <Sider
          className="sider"
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          width={220}
        >
          {logo && (
            <div key="logo">
              <img src={logo} alt="logo" />
            </div>
          )}
          <Menu key="Menu" mode="inline" style={{ padding: '1.5rem 0', width: '100%', flex: 1 }}>
            {this.renderMenuItems()}
          </Menu>
        </Sider>
      </DrawerMenu>
    );
  }
}

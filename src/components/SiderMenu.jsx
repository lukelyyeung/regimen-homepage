import React, { PureComponent } from 'react';
import DrawerMenu from 'rc-drawer';
import { Layout, Menu, Icon } from 'antd';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { navigateTo } from 'gatsby';

const { Sider } = Layout;
// const { SubMenu } = Menu;

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
// const getIcon = icon => {
//   if (typeof icon === 'string' && icon.indexOf('http') === 0) {
//     return <img src={icon} alt="icon" className={`${styles.icon} sider-menu-item-img`} />;
//   }
//   if (typeof icon === 'string') {
//     return <Icon type={icon} />;
//   }
//   return icon;
// };

// /**
//  * Recursively flatten the data
//  * [{path:string},{path:string}] => {path,path2}
//  * @param  menu
//  */
// export const getFlatMenuKeys = menu =>
//   menu.reduce((keys, item) => {
//     keys.push(item.path);
//     if (item.children) {
//       return keys.concat(getFlatMenuKeys(item.children));
//     }
//     return keys;
//   }, []);

// /**
//  * Find all matched menu keys based on paths
//  * @param  flatMenuKeys: [/abc, /abc/:id, /abc/:id/info]
//  * @param  paths: [/abc, /abc/11, /abc/11/info]
//  */
// export const getMenuMatchKeys = (flatMenuKeys, paths) =>
//   paths.reduce(
//     (matchKeys, path) =>
//       matchKeys.concat(flatMenuKeys.filter(item => pathToRegexp(item).test(path))),
//     []
//   );

export default class SiderMenu extends PureComponent {
  //   constructor(props) {
  //     super(props);
  //     this.menus = props.menuData;
  //     this.flatMenuKeys = getFlatMenuKeys(props.menuData);
  //     this.state = {
  //       openKeys: this.getDefaultCollapsedSubMenus(props),
  //     };
  //   }

  //   componentWillReceiveProps(nextProps) {
  //     const { location } = this.props;
  //     if (nextProps.location.pathname !== location.pathname) {
  //       this.setState({
  //         openKeys: this.getDefaultCollapsedSubMenus(nextProps),
  //       });
  //     }
  //   }

  //   /**
  //    * Convert pathname to openKeys
  //    * /list/search/articles = > ['list','/list/search']
  //    * @param  props
  //    */
  //   getDefaultCollapsedSubMenus(props) {
  //     const {
  //       location: { pathname },
  //     } = props || this.props;
  //     return getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname));
  //   }

  //   /**
  //    * 判断是否是http链接.返回 Link 或 a
  //    * Judge whether it is http link.return a or Link
  //    * @memberof SiderMenu
  //    */
  //   getMenuItemPath = item => {
  //     const itemPath = this.conversionPath(item.path);
  //     const icon = getIcon(item.icon);
  //     const { target, name } = item;
  //     // Is it a http link
  //     if (/^https?:\/\//.test(itemPath)) {
  //       return (
  //         <a href={itemPath} target={target}>
  //           {icon}
  //           <span>{name}</span>
  //         </a>
  //       );
  //     }
  //     const { location, isMobile, onCollapse } = this.props;
  //     return (
  //       <Link
  //         to={itemPath}
  //         target={target}
  //         replace={itemPath === location.pathname}
  //         onClick={
  //           isMobile
  //             ? () => {
  //                 onCollapse(true);
  //               }
  //             : undefined
  //         }
  //       >
  //         {icon}
  //         <span>{name}</span>
  //       </Link>
  //     );
  //   };

  /**
   * get SubMenu or Item
   */
  // getSubMenuOrItem = item => {
  //   if (item.children && item.children.some(child => child.name)) {
  //     const childrenItems = this.getNavMenuItems(item.children);
  //     // 当无子菜单时就不展示菜单
  //     if (childrenItems && childrenItems.length > 0) {
  //       return (
  //         <SubMenu
  //           title={
  //             item.icon ? (
  //               <span>
  //                 {getIcon(item.icon)}
  //                 <span>{item.name}</span>
  //               </span>
  //             ) : (
  //               item.name
  //             )
  //           }
  //           key={item.path}
  //         >
  //           {childrenItems}
  //         </SubMenu>
  //       );
  //     }
  //     return null;
  //   } else {
  //     return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
  //   }
  // };

  // /**
  //  * 获得菜单子节点
  //  * @memberof SiderMenu
  //  */
  // getNavMenuItems = menusData => {
  //   if (!menusData) {
  //     return [];
  //   }
  //   return menusData
  //     .filter(item => item.name && !item.hideInMenu)
  //     .map(item => {
  //       // make dom
  //       const ItemDom = this.getSubMenuOrItem(item);
  //       return this.checkPermissionItem(item.authority, ItemDom);
  //     })
  //     .filter(item => item);
  // };

  // // Get the currently selected menu
  // getSelectedMenuKeys = () => {
  //   const {
  //     location: { pathname },
  //   } = this.props;
  //   return getMenuMatchKeys(this.flatMenuKeys, urlToList(pathname));
  // };

  // conversion Path
  // 转化路径
  // conversionPath = path => {
  //   if (path && path.indexOf('http') === 0) {
  //     return path;
  //   } else {
  //     return `/${path || ''}`.replace(/\/+/g, '/');
  //   }
  // };

  // isMainMenu = key => {
  //   return this.menus.some(item => key && (item.key === key || item.path === key));
  // };

  // handleOpenChange = openKeys => {
  //   const lastOpenKey = openKeys[openKeys.length - 1];
  //   const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
  //   this.setState({
  //     openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
  //   });
  // };

  navigateTo = path => () => navigateTo(path);

  renderMenuItems() {
    const { closeSider } = this.props;
    return this.props.menuItems.map(({ label, icon, href, path }) => (
      <Menu.Item key={label} className="menu-item" onClick={closeSider}>
        <Icon className="flex-center" type={icon} />
        {path ? (
          <span onClick={this.navigateTo(path)}>{label}</span>
        ) : (
          <AnchorLink href={href}>{label}</AnchorLink>
        )}
      </Menu.Item>
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
          <Menu
            key="Menu"
            mode="inline"
            // onOpenChange={this.handleOpenChange}
            // selectedKeys={selectedKeys}
            style={{ padding: '1.5rem 0', width: '100%', flex: 1 }}
          >
            {this.renderMenuItems()}
          </Menu>
        </Sider>
      </DrawerMenu>
    );
  }
}

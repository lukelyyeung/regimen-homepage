import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FacebookMessenger from 'react-messenger-customer-chat';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import classnames from 'classnames';

import { Layout } from 'antd';
import { LayoutContext } from '../store';
import Topbar from '../components/Topbar';

import SiderMenu from '../components/SiderMenu';
import GlobalFooter from '../components/GlobalFooter';
import menuItems from '../constants/menuItem';
import logo from '../../static/images/logo-white.png';
import '../styles/main.less';

const { Content, Header, Footer } = Layout;

export default class GlobalLayout extends PureComponent {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    children: PropTypes.node.isRequired,
  };

  state = { isMobile: false, isSiderToggled: false };

  componentDidMount() {
    this.registerEnquireScreen();
  }

  componentWillUnmount() {
    unenquireScreen();
  }

  toggleSider = () => {
    const { isMobile, isSiderToggled } = this.state;
    if (!isMobile) {
      return;
    }

    this.setState(prevState => ({ ...prevState, isSiderToggled: !isSiderToggled }));
  };

  closeSider = () => {
    this.setState(prevState => ({ ...prevState, isSiderToggled: false }));
  };

  getMenuItems = () => {
    const {
      location: { pathname },
    } = this.props;
    return menuItems.filter(({ isVisibleAt, isNotVisibleAt }) => {
      if (isVisibleAt) {
        return isVisibleAt.find(path => path === pathname);
      }

      if (isNotVisibleAt) {
        return !isNotVisibleAt.find(path => path === pathname);
      }

      return true;
    });
  };

  registerEnquireScreen() {
    enquireScreen(isMobile => this.setState({ isMobile }));
  }

  render() {
    const {
      children,
      location: { pathname },
    } = this.props;
    const { isMobile, isSiderToggled } = this.state;
    const isHome = pathname === '/';

    return (
      <LayoutContext.Provider value={{ isMobile }}>
        <Layout className="application">
          {isMobile && (
            <SiderMenu
              menuItems={this.getMenuItems()}
              collapsed={!isSiderToggled}
              toggleSider={this.toggleSider}
              closeSider={this.closeSider}
            />
          )}
          <Layout className={isMobile && isSiderToggled ? 'collapsed' : ''}>
            <Header style={{ padding: 0 }}>
              <Topbar
                logo={logo}
                isMobile={isMobile}
                menuItems={this.getMenuItems()}
                onMenuIconClick={this.toggleSider}
                isSiderToggled={isSiderToggled}
              />
            </Header>
            <Content style={{ height: '100%' }}>
              <LayoutContext.Provider value={{ isMobile }}>{children}</LayoutContext.Provider>
            </Content>
            <Footer
              id="contact-us"
              className={classnames({
                footer: true,
                'footer--mobile': isMobile,
                'flex-center': isMobile,
                grey: !isHome,
              })}
            >
              <GlobalFooter />
            </Footer>
          </Layout>
        </Layout>
        <FacebookMessenger pageId="1603230056485437" appId="2192516717732736" />
      </LayoutContext.Provider>
    );
  }
}

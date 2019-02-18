import React, { PureComponent, cloneElement } from 'react';
import FacebookMessenger from 'react-messenger-customer-chat';
import classnames from 'classnames';
import Topbar from '../components/Topbar';
import { Layout } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';

import { LayoutContext } from '../store';
import SiderMenu from '../components/SiderMenu';
import GlobalFooter from '../components/GlobalFooter';
import menuItems from '../constants/menuItem';
import logo from '../../static/images/logo-white.png'
import '../styles/main.less';

const { Content, Header, Footer } = Layout;

export default class GlobalLayout extends PureComponent {
  state = { isMobile: false, isSiderToggled: false };

  componentDidMount() {
    this.registerEnquireScreen();
  }

  componentWillUnmount() {
    unenquireScreen();
  }

  registerEnquireScreen() {
    enquireScreen(isMobile => this.setState({ isMobile }));
  }

  toggleSider = () => {
    const { isMobile, isSiderToggled } = this.state;
    if (!isMobile) {
      return;
    }

    this.setState({ ...this.state, isSiderToggled: !isSiderToggled });
  };

  closeSider = () => {
    this.setState({ ...this.state, isSiderToggled: false });
  };

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
              menuItems={menuItems}
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
                menuItems={menuItems}
                onMenuIconClick={this.toggleSider}
                isSiderToggled={isSiderToggled}
              />
            </Header>
            <Content style={{ height: '100%' }}>{cloneElement(children, { isMobile })}</Content>
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

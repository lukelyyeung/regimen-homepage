import React, { Component } from 'react';
import Topbar from '../components/Topbar';
import { Layout } from 'antd';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import MainContent from '../components/Home';
import GlobalFooter from '../components/GlobalFooter';

import menuItems from '../constants/menuItem';
import '../styles/main.scss';
import SiderMenu from '../components/SiderMenu';

const { Content, Header, Footer } = Layout;

export default class GlobalLayout extends Component {
  state = { isMobile: false, isSiderToggled: false };

  componentDidMount() {
    enquireScreen(isMobile => this.setState({ isMobile }));
  }

  componentWillUnmount() {
    unenquireScreen();
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
    const { isMobile, isSiderToggled } = this.state;

    return (
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
              isMobile={isMobile}
              menuItems={menuItems}
              onMenuIconClick={this.toggleSider}
              isSiderToggled={isSiderToggled}
            />
          </Header>
          <Content style={{ height: '100%' }}>
            <MainContent isMobile={isMobile} />
          </Content>
          <Footer id="contact-us" className="footer">
            <GlobalFooter />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

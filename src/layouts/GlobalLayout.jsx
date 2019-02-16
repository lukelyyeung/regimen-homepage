import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import FacebookMessenger from 'react-messenger-customer-chat';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import classnames from 'classnames';

import { LayoutContext } from '../store';
import Topbar from '../components/Topbar';
import GlobalFooter from '../components/GlobalFooter';

import menuItems from '../constants/menuItem';
import '../styles/main.scss';
import SiderMenu from '../components/SiderMenu';

const { Content, Header, Footer } = Layout;

export default class GlobalLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  state = { isMobile: false, isSiderToggled: false };

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    this.registerEnquireScreen();
  }

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

  registerEnquireScreen() {
    enquireScreen(isMobile => this.setState({ isMobile }));
	}

	getMenuItems = () => {
		const { location: { pathname } } = this.props;
		return menuItems.filter(({isVisibleAt, isNotVisibleAt}) => {
			if (isVisibleAt) {
				return isVisibleAt.find(path => path === pathname);
			}

			if (isNotVisibleAt) {
				return !isNotVisibleAt.find(path => path === pathname);
			}

			return true;
		})
	}

  render() {
    const {
      children,
      location: { pathname },
    } = this.props;
    const { isMobile, isSiderToggled } = this.state;
    const isHome = pathname === '/';

    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

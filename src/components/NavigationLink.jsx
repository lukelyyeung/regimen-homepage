import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon, Menu } from 'antd';
import { Link } from 'gatsby';

import withLocation from './HOC/withLocation';

function NavigationLink({
  label,
  icon,
  path,
  href,
  availableAt,
  notAvailableAt,
  location: { pathname },
  ...otherProps
}) {
  if (
    (notAvailableAt && notAvailableAt.find(notAvailablePath => notAvailablePath === pathname))
    || (availableAt && !availableAt.find(availablePath => availablePath === pathname))
  ) {
    return null;
  }

  const innerElement = (
    <div className="flex-center">
      {icon && <Icon type={icon} />}
      {label}
    </div>
  );

  let linkElement = null;

  if (path) {
    linkElement = <Link to={path}>{innerElement}</Link>;
  }

  if (href) {
    linkElement = (
      <AnchorLink offset={100} href={href}>
        {innerElement}
      </AnchorLink>
    );
  }

  if (!linkElement) {
    return null;
  }

  const menuItemProps = omit(otherProps, ['navigate']);

  return <Menu.Item {...menuItemProps}>{linkElement}</Menu.Item>;
}

export default withLocation(NavigationLink);

NavigationLink.propTypes = {
  icon: PropTypes.node,
  location: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  href: PropTypes.string,
  availableAt: PropTypes.array,
  notAvailableAt: PropTypes.array,
};

NavigationLink.defaultProps = {
  icon: null,
  path: null,
  href: null,
  availableAt: null,
  notAvailableAt: null,
};

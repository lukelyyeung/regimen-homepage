import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon, Menu } from 'antd';
import { Link } from 'gatsby';

import withLocation from '../components/HOC/withLocation';

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
    (notAvailableAt && notAvailableAt.find(path => path === pathname)) ||
    (availableAt && !availableAt.find(path => path === pathname))
  ) {
    return null;
  }

  let linkElement = null;

  if (path) {
    linkElement = <Link to={path}>{label}</Link>;
  }

  if (href) {
    linkElement = (
      <AnchorLink offset={100} href={href}>
        {label}
      </AnchorLink>
    );
  }

  if (!linkElement) {
    return null;
  }

  const menuItemProps = omit(otherProps, ['navigate']);

  return (
    <Menu.Item {...menuItemProps}>
      {icon && <Icon className="flex-center" type={icon} />}
      {linkElement}
    </Menu.Item>
  );
}

export default withLocation(NavigationLink);

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  href: PropTypes.string,
};

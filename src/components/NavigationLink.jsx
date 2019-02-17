import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';

export default function NavigationLink({ label, path, href }) {
  if (path) {
    return <Link to={path}>{label}</Link>;
  }

  if (href) {
    return (
      <AnchorLink offset={100} href={href}>
        {label}
      </AnchorLink>
    );
  }

  return null;
}

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  href: PropTypes.string,
};

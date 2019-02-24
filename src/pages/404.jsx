import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Button } from 'antd';

function NotFoundPage(props) {
  const { location: { pathname } } = props;
  return (
    <section className="section full-height flex-center flex-center--column">
      <h1>404</h1>
      <p className="cation">不好意思！ 找不到 {pathname} 頁面</p>
      <Button>
        <Link to="/">返回首頁</Link>
      </Button>
    </section>
  );
}

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default NotFoundPage;

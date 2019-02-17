import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'antd';

function NotFoundPage(props) {
  const { location: { pathname } } = props;
  return (
      <div
        style={{ height: '100vh', width: '100%', backgroundColor: '#fff' }}
        className="flex-center flex-center--column"
      >
        <h1>404</h1>
        <p className="cation">不好意思！ 找不到 {pathname} 頁面</p>
        <Button>
          <Link to="/">返回首頁</Link>
        </Button>
      </div>
  );
}

export default NotFoundPage;

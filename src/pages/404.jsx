import React from 'react';
import { Button } from 'antd';

const onClickHandler = () => (window.location = '/');
function NotFoundPage() {
  return (
    <div
      style={{ height: '100vh', width: '100vw', backgroundColor: '#39BFBE' }}
      className="flex-center flex-center--column"
    >
      <div
        style={{ height: '300px', width: '300px', backgroundColor: '#fff', borderRadius: '4px' }}
        className="flex-center flex-center--column"
      >
        <h1>404</h1>
        <Button onClick={onClickHandler}>Back to Home</Button>
      </div>
    </div>
  );
}

export default NotFoundPage;

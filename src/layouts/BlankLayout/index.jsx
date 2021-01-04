import React from 'react';
import './index.less';

const BlankLayout = (props) => {
  const { children } = props;
  return (
    <div className="blank-layout">
      <div className="main-container">
        {children}
      </div>
    </div>
  );
};

export default BlankLayout;

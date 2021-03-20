import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import './index.less';

const CustomLayout = (props) => {
  const { children, title, onClick } = props;
  return (
    <div className="custom-layout" onClick={onClick}>
      {title && (
        <div className="layout-header">
          <div className="title">{title}</div>
        </div>
      )}
      <div className="layout-body">
        {children}
      </div>
    </div>
  );
};

export default CustomLayout;

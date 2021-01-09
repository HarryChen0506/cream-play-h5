import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Menu = () => (
  <>
    <h2>目录</h2>
    <h5>选择题</h5>
    <div className="menu-group">
      <Link to="/question?id=M1">选择题1</Link>
      <Link to="/question?id=M3">选择题2</Link>
      <Link to="/question?id=M6">选择题3</Link>
    </div>
    <h5>拖拽</h5>
    <div className="menu-group">
      <Link to="/question?id=B11">拖拽</Link>
    </div>
    <h5>滚动</h5>
    <div className="menu-group">
      <Link to="/question?id=M4">滚动</Link>
    </div>
  </>
);

export default Menu;

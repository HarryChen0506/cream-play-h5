import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Menu = () => (
  <>
    <h2>目录</h2>
    <h5>摩卡</h5>
    <div className="menu-group">
      <Link to="/question?dir=M1">选择题1</Link>
      <Link to="/question?dir=M2">选择题2</Link>
      <Link to="/question?dir=M3">选择题3</Link>
      <Link to="/question?dir=M3">选择题4</Link>
      <Link to="/question?dir=M5">选择题5</Link>
      <Link to="/question?dir=M6">选择题6</Link>
    </div>
    <h5>贝尔</h5>
    <div className="menu-group">
      <Link to="/question?dir=B1">选择题1</Link>
      <Link to="/question?dir=B2">选择题2</Link>
      <Link to="/question?dir=B3">选择题3</Link>
      <Link to="/question?dir=B4">选择题4</Link>
      <Link to="/question?dir=B5">选择题5</Link>
      <Link to="/question?dir=B6">选择题6</Link>
      <Link to="/question?dir=B7">选择题7</Link>
      <Link to="/question?dir=B8">选择题8</Link>
    </div>
    <h5>拖拽</h5>
    <div className="menu-group">
      <Link to="/question?dir=B9">拖拽</Link>
    </div>
    <h5>滚动</h5>
    <div className="menu-group">
      <Link to="/question?dir=M7">滚动</Link>
    </div>
    <h5>绘本</h5>
    <div className="menu-group">
      <Link to="/custom">藏起来</Link>
    </div>
  </>
);

export default Menu;

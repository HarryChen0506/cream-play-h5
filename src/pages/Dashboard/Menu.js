import React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

const Menu = () => (
  <>
    <h2>目录</h2>
    <h5>摩卡</h5>
    <div className="menu-group">
      <Link to="/question?id=ML1-1">选择题1</Link>
      <Link to="/question?id=ML1-2">选择题2</Link>
      <Link to="/question?id=ML1-3">选择题3</Link>
      <Link to="/question?id=ML2-1">选择题4</Link>
      <Link to="/question?id=ML2-2">选择题5</Link>
      <Link to="/question?id=ML2-3">选择题6</Link>
      <Link to="/question?id=ML2-5">选择题8</Link>
    </div>
    <h5>贝尔</h5>
    <div className="menu-group">
      <Link to="/question?id=BL1-1">选择题1</Link>
      <Link to="/question?id=BL1-2">选择题2</Link>
      <Link to="/question?id=BL1-3">选择题3</Link>
      <Link to="/question?id=BL1-4">选择题4</Link>
      <Link to="/question?id=BL2-1">选择题5</Link>
      <Link to="/question?id=BL2-2">选择题6</Link>
      <Link to="/question?id=BL2-3">选择题7</Link>
      <Link to="/question?id=BL2-4">选择题8</Link>
    </div>
    <h5>拖拽</h5>
    <div className="menu-group">
      <Link to="/question?id=BL2-5">拖拽</Link>
    </div>
    <h5>滚动</h5>
    <div className="menu-group">
      <Link to="/question?id=ML2-4">滚动</Link>
    </div>
    <h5>绘本</h5>
    <div className="menu-group">
      <Link to="/custom?id=H1-1">藏起来</Link>
      <Link to="/custom?id=H2-1">水果派</Link>
      <Link to="/custom?id=H4-1">城堡</Link>
    </div>
  </>
);

export default Menu;

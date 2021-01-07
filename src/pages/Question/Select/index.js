import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import OptionItem from '../OptionItem';
import './index.less';

const { Image } = OptionItem;

const Select = (props) => {
  const { info = {} } = props;
  const {
    options = [], right, top, correctIndex,
  } = info;
  const [currentIndex, setCurrentIndex] = useState();
  // console.log('info', info);
  const handleClick = (index) => {
    console.log('index', index);
    setCurrentIndex(index);
  };
  const clacOptionResult = (index) => {
    if (correctIndex === index && currentIndex === index) {
      return 'correct';
    }
    if (currentIndex === index && correctIndex !== index) {
      return 'error';
    }
    return '';
  };
  return (
    <div className="component-select">
      {top
        && (
          <div className="header">
            <Image size={top.size} url={top.url} />
          </div>
        )}

      <div className="body">
        <div className="body-left row">
          {options.map((v, i) => (
            <OptionItem
              marginSize={v.size}
              marginDirection="row"
              size={v.size}
              key={v.url}
              result={clacOptionResult(i)}
              url={v.url}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
        {right
          && (
            <div className="body-right">
              <Image size={right.size} url={right.url} />
            </div>
          )}
      </div>
    </div>
  );
};

export default Select;

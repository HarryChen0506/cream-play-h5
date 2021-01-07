import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import OptionItem from '../OptionItem';
import './index.less';

const Select = (props) => {
  const { info = {} } = props;
  const { options = [], correctIndex } = info;
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
    <>
      {options.map((v, i) => (
        <OptionItem
          key={v.url}
          result={clacOptionResult(i)}
          url={v.url}
          onClick={() => handleClick(i)}
        />
      ))}
    </>
  );
};

export default Select;

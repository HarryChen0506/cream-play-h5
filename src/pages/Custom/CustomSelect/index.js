import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import clsx from 'clsx';
import { OptionItem } from '@/components/SelectComp';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;
const config = {
  id: 'BL2-1',
  type: 'customSelect',
  title: '小朋友,选一选,下面哪组是立体图形?',
  background: {
    url: `${PUBLIC_URL}/assets/custom/H23/bg.jpg`,
    width: '30rem',
    height: '16.875rem',
  },
  playSection: {
    top: '6.6rem',
  },
  options: [
    {
      width: '26rem',
      marginBottom: '1rem',
      url: `${PUBLIC_URL}/assets/custom/H23/option-1.png`,
    },
    {
      width: '26rem',
      url: `${PUBLIC_URL}/assets/custom/H23/option-2.png`,
    },
  ],
  optionDirection: 'vertical',
  correctIndex: 1,
};

const CustomSelect = (props) => {
  const { info = {}, onSuccess } = props;
  const {
    background, options = [], playSection = {}, correctIndex, optionDirection = 'horizontal',
  } = config;

  const [currentIndex, setCurrentIndex] = useState();

  const handleClick = (index) => {
    setCurrentIndex(index);
    if (index === correctIndex) {
      setTimeout(() => {
        typeof onSuccess === 'function' && onSuccess();
      }, 500);
    }
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
    <div className="component-custom-select">
      <div className="body">
        <div className="bg-wrap" style={{ width: background?.width, height: background?.height }}>
          <img className="img" src={background?.url} />
        </div>
        <div className="option-wrap" style={{ top: playSection?.top }}>
          {options.map((v, i) => (
            <OptionItem
              width={v.width}
              marginBottom={v.marginBottom}
              key={v.url}
              result={clacOptionResult(i)}
              url={v.url}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;

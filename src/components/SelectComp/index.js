import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import clsx from 'clsx';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;

export const OptionItem = (props) => {
  const {
    result = '', url, onClick, width, marginBottom, height, direction = 'horizontal',
  } = props;
  const [shake, setShake] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const timerId = useRef(null);

  const handleClick = () => {
    typeof onClick === 'function' && onClick();
    setShake(true);
    if (timerId.current) {
      return;
    }
    timerId.current = setTimeout(() => {
      setShake(false);
      timerId.current = null;
    }, 1000);
    setShowResult(true);
    setTimeout(() => {
      setShowResult(false);
    }, 300);
  };

  return (
    <div
      className={clsx(
        {
          'select-component-option': true,
          'bg-red': result === 'error',
          'bg-green': result === 'correct',
          shake,
          'show-result': showResult,
        },
      )}
      style={{ marginBottom }}
      onClick={handleClick}
    >
      <Image width={width} url={url} />
      {result === 'correct'
        && (
          <div
            className={clsx({
              result: true,
              'pos-right': direction === 'vertical',
              'pos-bottom': direction === 'horizontal',
            })}
          >
            <img src={`${PUBLIC_URL}/assets/question/right.png`} />
          </div>
        )}
    </div>
  );
};

export const Image = ({ width, url }) => (
  <div className="select-component-image">
    <img
      style={{ width }}
      src={url}
    />
  </div>
);

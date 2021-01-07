import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import clsx from 'clsx';
import './index.less';

// eslint-disable-next-line no-undef
const PUBLIC_URL = __PUBLIC_URL__;

const OptionItem = (props) => {
  const {
    result = '', url, onClick, size, marginSize, marginDirection,
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
          'component-option-item': true,
          'bg-red': result === 'error',
          'bg-green': result === 'correct',
          shake,
          'show-result': showResult,
          'margin-right-small': marginSize === 'small' && marginDirection === 'row',
          'margin-right-middle': marginSize === 'middle' && marginDirection === 'row',
          'margin-bottom-small': marginSize === 'small' && marginDirection === 'column',
          'margin-bottom-middle': marginSize === 'middle' && marginDirection === 'column',
        },
      )}
      onClick={handleClick}
    >
      <Image size={size} url={url} />
      {result === 'correct'
        && (
          <div className="result">
            <img src={`${PUBLIC_URL}/assets/question/right.png`} />
          </div>
        )}
    </div>
  );
};

const Image = ({ size, url }) => (
  <div className="component-image">
    <img
      className={clsx({
        large: size === 'large',
        small: size === 'small',
        middle: size === 'middle',
        'extra-large': size === 'extra-large',
      })}
      src={url}
    />
  </div>
);

OptionItem.Image = Image;

export default OptionItem;

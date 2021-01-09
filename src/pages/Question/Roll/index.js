import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;

const RollObject = ({ onSuccess }) => {
  const [rolling, setRolling] = useState(false);
  const start = useRef();
  const onTouchStart = useCallback((e) => {
    const touch = e.targetTouches[0];
    start.current = { pageX: touch.pageX };
  }, []);
  const onTouchEnd = useCallback((e) => {
    const touch = e.changedTouches[0];
    if (touch.pageX - start.current.pageX > 20) {
      setRolling(true);
      setTimeout(() => {
        typeof onSuccess === 'function' && onSuccess();
      }, 3000);
    }
  }, [onSuccess]);
  return (
    <div className="rolling-wrap">
      <img
        className={clsx({
          image: true,
          dao: true,
          roll: rolling,
        })}
        src={`${PUBLIC_URL}/assets/question/M7/dao.png`}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      />
      {!rolling && <img className="tip" src={`${PUBLIC_URL}/assets/question/M7/tip.png`} />}
    </div>
  );
};

const RollPlay = (props) => {
  const { info, onSuccess } = props;
  const [fall, setFall] = useState(false);
  const handleClick = useCallback(() => {
    setFall(true);
  }, []);
  return (
    <div className="component-roll">
      <div className="image-wrap">
        {!fall ? (
          <img
            className={clsx({
              'image-stand': true,
            })}
            src={`${PUBLIC_URL}/assets/question/M7/zhan.png`}
            onClick={handleClick}
          />
        ) : <RollObject onSuccess={onSuccess} />}
      </div>
    </div>
  );
};

export default RollPlay;

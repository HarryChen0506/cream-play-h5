import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;
const Congratulate = forwardRef((props, ref) => {
  const [flag, setFlag] = useState(false);
  const { onAnimateFinish } = props;
  useImperativeHandle(ref, () => ({
    start: () => {
      setFlag(true);
      setTimeout(() => {
        setFlag(false);
        typeof onAnimateFinish === 'function' && onAnimateFinish();
      }, 3000);
    },
  }));
  return (
    <div
      className={clsx({
        'component-congratulate': true,
        congratulate: flag,
      })}
    >
      <div className="image-wrap">
        <img
          src={`${PUBLIC_URL}/assets/question/congratulate.gif`}
        />
      </div>
    </div>
  );
});

export default Congratulate;

/* eslint-disable no-undef */
import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;
const RollPlay = (props) => {
  const { info } = props;
  const [rolling, setRolling] = useState(false);
  return (
    <div className="component-roll">
      <div className="image-wrap">
        <img
          className={clsx({
            img: true,
            hidden: rolling,
          })}
          src={`${PUBLIC_URL}/assets/question/M4/zhan.png`}
          onClick={() => setRolling(true)}
        />
        <img
          className={clsx({
            img: true,
            dao: true,
            roll: rolling,
            hidden: !rolling,
          })}
          src={`${PUBLIC_URL}/assets/question/M4/dao.png`}
        />
      </div>
    </div>
  );
};

export default RollPlay;

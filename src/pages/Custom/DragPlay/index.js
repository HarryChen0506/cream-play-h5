import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import { Group, Sticker } from '@/components/DragComp';
import configList from './configList';
import './index.less';

// const PUBLIC_URL = __PUBLIC_URL__;

const findConfigById = (list, id) => list.find(v => v.id === id);
const DragPlay = (props) => {
  const { onSuccess, id, info } = props;
  const playItem = findConfigById(configList, id) || configList[0];
  const { config = {} } = playItem;
  const [result, setResult] = useState(new Array(config?.dragger?.length || 2).fill(false));
  const { background, dragger = [], sticker = [] } = config || {};
  const handleResult = (index, res) => {
    const newResult = [...result];
    newResult[index] = res;
    setResult(newResult);
  };
  useEffect(() => {
    // console.log('result', result);
    if (result.every(v => v)) {
      setTimeout(() => {
        typeof onSuccess === 'function' && onSuccess();
      }, 500);
    }
  }, [result, onSuccess]);
  return (
    <div className="custom-darg-play" id="custom-dragger-container">
      <div className="bg-wrap" style={{ width: background?.width, height: background?.height }}>
        <img className="img" src={background?.url} />
      </div>
      {dragger.map((v, index) => (
        <Group
          key={v.url}
          target={{
            left: v?.target?.left,
            top: v?.target?.top,
            zIndex: v?.target?.zIndex,
            node: (
              <div className="shape" style={{ width: v?.finalWidth }}>
                <img className="img" src={v?.url} />
              </div>
            ),
          }}
          origin={{
            left: v?.origin?.left,
            top: v?.origin?.top,
            zIndex: v?.origin?.zIndex,
            node: (
              <div className="shape" style={{ width: v?.initWidth }}>
                <img className="img" src={v?.url} />
              </div>
            ),
            finalNode: (
              <div className="shape" style={{ width: v?.finalWidth }}>
                <img className="img" src={v?.origin?.finalUrl || v?.url} />
              </div>
            ),
          }}
          onResult={res => handleResult(index, res)}
        />
      ))}
      {sticker.map((v, index) => (
        <Sticker
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          left={v.left}
          top={v.top}
          zIndex={v.zIndex}
          style={{ width: v.width }}
          url={v.url}
        />
      ))}
    </div>
  );
};

export default DragPlay;

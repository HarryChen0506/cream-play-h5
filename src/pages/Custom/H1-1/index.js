import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import { Group, Sticker } from '@/components/DragComp';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;

const config = {
  background: {
    width: '30rem',
    height: '16.875rem',
    url: `${PUBLIC_URL}/assets/custom/H11/bg.jpg`,
  },
  dragger: [
    {
      id: 1,
      url: `${PUBLIC_URL}/assets/custom/H11/1.png`,
      initWidth: '3.1rem',
      finalWidth: '8.1rem',
      target: {
        left: '22%',
        top: '28.5%',
        zIndex: 2,
      },
      origin: {
        left: '74%',
        top: '20%',
        zIndex: 2,
      },
    },
    {
      id: 2,
      url: `${PUBLIC_URL}/assets/custom/H11/2.png`,
      initWidth: '2.8rem',
      finalWidth: '6.2rem',
      target: {
        left: '45%',
        top: '32%',
        zIndex: 2,
      },
      origin: {
        left: '74%',
        top: '50%',
        zIndex: 2,
      },
    },
    {
      id: 3,
      url: `${PUBLIC_URL}/assets/custom/H11/3.png`,
      initWidth: '2.8rem',
      finalWidth: '6.5rem',
      target: {
        left: '46.5%',
        top: '51%',
        zIndex: 2,
      },
      origin: {
        left: '74%',
        top: '80%',
        zIndex: 2,
      },
    },
    {
      id: 4,
      url: `${PUBLIC_URL}/assets/custom/H11/4.png`,
      initWidth: '2.8rem',
      finalWidth: '6.9rem',
      target: {
        left: '20.5%',
        top: '76.5%',
        zIndex: 2,
      },
      origin: {
        left: '90%',
        top: '20%',
        zIndex: 2,
      },
    },
    {
      id: 5,
      url: `${PUBLIC_URL}/assets/custom/H11/5.png`,
      initWidth: '2.8rem',
      finalWidth: '5.8rem',
      target: {
        left: '20.5%',
        top: '48.5%',
        zIndex: 2,
      },
      origin: {
        left: '90%',
        top: '50%',
        zIndex: 2,
      },
    },
    {
      id: 6,
      url: `${PUBLIC_URL}/assets/custom/H11/6.png`,
      initWidth: '2.8rem',
      finalWidth: '4.8rem',
      target: {
        left: '47.5%',
        top: '79%',
        zIndex: 2,
      },
      origin: {
        left: '90%',
        top: '80%',
        zIndex: 2,
      },
    },
  ],
  sticker: [
    {
      left: '74%',
      top: '20%',
      zIndex: 1,
      width: '3.7rem',
      url: `${PUBLIC_URL}/assets/custom/H11/box.png`,
    },
    {
      left: '90%',
      top: '20%',
      zIndex: 1,
      width: '3.7rem',
      url: `${PUBLIC_URL}/assets/custom/H11/box.png`,
    },
    {
      left: '74%',
      top: '50%',
      zIndex: 1,
      width: '3.7rem',
      url: `${PUBLIC_URL}/assets/custom/H11/box.png`,
    },
    {
      left: '90%',
      top: '50%',
      zIndex: 1,
      width: '3.7rem',
      url: `${PUBLIC_URL}/assets/custom/H11/box.png`,
    },
    {
      left: '74%',
      top: '80%',
      zIndex: 1,
      width: '3.7rem',
      url: `${PUBLIC_URL}/assets/custom/H11/box.png`,
    },
    {
      left: '90%',
      top: '80%',
      zIndex: 1,
      width: '3.7rem',
      url: `${PUBLIC_URL}/assets/custom/H11/box.png`,
    },
  ],
};

const DragPlay = (props) => {
  const { onSuccess } = props;
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
    <div className="custom-h11" id="custom-dragger-container">
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
                <img className="img" src={v?.url} />
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

import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import { Group, Sticker } from '@/components/DragComp';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;

const DragPlay = (props) => {
  const { onSuccess } = props;
  const [result, setResult] = useState([false, false]);
  const handleSuccess = (index) => {
    const newResult = [...result];
    newResult[index] = true;
    setResult(newResult);
  };
  useEffect(() => {
    if (result.every(v => v)) {
      setTimeout(() => {
        typeof onSuccess === 'function' && onSuccess();
      }, 500);
    }
  }, [result, onSuccess]);
  return (
    <div className="custom-h11" id="custom-dragger-container">
      <div className="bg-wrap">
        <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/bg.jpg`} />
      </div>
      {/* <div className="xuxian-wrap xuxian-size">
        <img className="img" src={`${PUBLIC_URL}/assets/question/B9/xuxian.png`} />
      </div> */}
      <Group
        target={{
          left: '22%',
          top: '28.5%',
          zIndex: 2,
          node: (
            <div className="shape" style={{ width: '8.1rem' }}>
              <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/1.png`} />
            </div>
          ),
        }}
        origin={{
          left: '74%',
          top: '20%',
          zIndex: 2,
          node: (
            <div className="shape" style={{ width: '3.1rem' }}>
              <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/1.png`} />
            </div>
          ),
          finalNode: (
            <div className="shape" style={{ width: '8.1rem' }}>
              <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/1.png`} />
            </div>
          ),
        }}
        onResult={res => console.log(0, res)}
      />
      <Group
        target={{
          left: '45%',
          top: '32%',
          zIndex: 2,
          node: (
            <div className="shape" style={{ width: '6.2rem' }}>
              <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/2.png`} />
            </div>
          ),
        }}
        origin={{
          left: '90%',
          top: '20%',
          zIndex: 2,
          node: (
            <div className="shape" style={{ width: '2.8rem' }}>
              <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/2.png`} />
            </div>
          ),
          finalNode: (
            <div className="shape " style={{ width: '6.2rem' }}>
              <img className="img" src={`${PUBLIC_URL}/assets/custom/H11/2.png`} />
            </div>
          ),
        }}
        onResult={res => console.log(0, res)}
      />
      <Sticker
        left="74%"
        top="20%"
        zIndex={1}
        style={{ width: '3.7rem' }}
        url={`${PUBLIC_URL}/assets/custom/H11/box.png`}
      />
      <Sticker
        left="90%"
        top="20%"
        zIndex={1}
        style={{ width: '3.7rem' }}
        url={`${PUBLIC_URL}/assets/custom/H11/box.png`}
      />
      <Sticker
        left="74%"
        top="50%"
        zIndex={1}
        style={{ width: '3.7rem' }}
        url={`${PUBLIC_URL}/assets/custom/H11/box.png`}
      />
      <Sticker
        left="90%"
        top="50%"
        zIndex={1}
        style={{ width: '3.7rem' }}
        url={`${PUBLIC_URL}/assets/custom/H11/box.png`}
      />
    </div>
  );
};

export default DragPlay;

import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import './index.less';

// eslint-disable-next-line no-undef
const PUBLIC_URL = __PUBLIC_URL__;

const Dragger = forwardRef(({
  left, top, children, zIndex, draggable = true, onMount, onEnd, visiable,
}, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const defaultPosition = useRef();
  const positionRef = useRef();
  const containerRef = useRef();
  const isMouseDown = useRef();
  const lastPoint = useRef();
  positionRef.current = position;

  useLayoutEffect(() => {
    const dom = containerRef.current;
    if (dom) {
      const parentDom = document.querySelector('#dragger-container');
      const parentRect = parentDom.getBoundingClientRect();
      const domRect = dom.getBoundingClientRect();
      const offsetX = domRect.x - parentRect.x;
      const offsetY = domRect.y - parentRect.y;
      defaultPosition.current = { x: offsetX, y: offsetY };
      setPosition({
        x: offsetX,
        y: offsetY,
      });
      typeof onMount === 'function' && onMount({
        x: offsetX,
        y: offsetY,
      });
    }
  }, [containerRef, onMount]);

  const setContanerPosition = useCallback((deltaPoint = { x: 0, y: 0 }) => {
    setPosition(positon => ({
      x: positon.x + deltaPoint.x,
      y: positon.y + deltaPoint.y,
    }));
  }, []);

  const onTouchmove = useCallback((e) => {
    if (!isMouseDown.current) {
      return;
    }
    const touch = e.targetTouches[0];
    const currentPoint = { x: touch.pageX, y: touch.pageY };
    const deltaPoint = {
      x: currentPoint.x - lastPoint.current.x,
      y: currentPoint.y - lastPoint.current.y,
    };
    lastPoint.current = currentPoint;
    // console.log('onTouchmove', e, deltaPoint);
    setContanerPosition(deltaPoint);
  }, [setContanerPosition]);

  const onTouchend = useCallback((e) => {
    // console.log('onTouchend', e, lastPoint.current);
    isMouseDown.current = false;
    document.removeEventListener('touchmove', onTouchmove);
    document.removeEventListener('touchend', onTouchend);
    typeof onEnd === 'function' && onEnd(positionRef.current);
  }, [onTouchmove, onEnd]);

  const onTouchStart = useCallback((e) => {
    if (draggable === false) {
      return;
    }
    const touch = e.targetTouches[0];
    isMouseDown.current = true;
    lastPoint.current = {
      x: touch.pageX,
      y: touch.pageY,
    };
    document.addEventListener('touchmove', onTouchmove);
    document.addEventListener('touchend', onTouchend);
  }, [draggable, onTouchend, onTouchmove]);

  useImperativeHandle(ref, () => ({
    reset: () => {
      setPosition({
        x: defaultPosition.current.x,
        y: defaultPosition.current.y,
      });
    },
  }));

  return (
    <div
      className={clsx({
        'component-dragger': true,
        hidden: !visiable,
      })}
      style={{
        left: position.x ? `${position.x}px` : left,
        top: position.y ? `${position.y}px` : top,
        zIndex,
      }}
      ref={containerRef}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
});

const calcDistance = (point1, point2) => {
  const sum = (point1.x - point2.x) * (point1.x - point2.x)
    + (point1.y - point2.y) * (point1.y - point2.y);
  return Math.sqrt(sum, 0.5);
};

const Group = ({ onSuccess, origin = {}, target = {} }) => {
  const [success, setSuccess] = useState(false);
  const shapeTarget = useRef();
  const shapeOrigin = useRef();
  const shapeOriginRef = useRef();
  const shapeTargetMount = (data) => {
    shapeTarget.current = data;
    // console.log('shape target', shapeTarget.current);
  };
  const shapeOriginEnd = (data) => {
    shapeOrigin.current = data;
    // console.log('shape origin', shapeOrigin.current);
    const distance = calcDistance(shapeOrigin.current, shapeTarget.current);
    // console.log('distance', distance);
    if (distance < 15) {
      setSuccess(true);
      typeof onSuccess === 'function' && onSuccess();
    } else {
      const originComp = shapeOriginRef.current;
      originComp.reset();
    }
  };
  return (
    <>
      <Dragger
        visiable={success}
        left={target.left}
        top={target.top}
        zIndex={target.zIndex}
        draggable={false}
        onMount={data => shapeTargetMount(data)}
      >
        {target.node}
      </Dragger>
      <Dragger
        visiable={!success}
        left={origin.left}
        top={origin.top}
        zIndex={origin.zIndex}
        onEnd={data => shapeOriginEnd(data)}
        ref={shapeOriginRef}
      >
        {origin.node}
      </Dragger>
    </>
  );
};

const DragPlay = (props) => {
  const { info = {} } = props;
  // const { } = info;

  return (
    <div className="component-drag" id="dragger-container">
      <div className="bg-wrap">
        <img className="img" src={`${PUBLIC_URL}/assets/question/B11/beijing.png`} />
      </div>
      <div className="xuxian-wrap xuxian-size">
        <img className="img" src={`${PUBLIC_URL}/assets/question/B11/xuxian.png`} />
      </div>
      <Group
        target={{
          left: '20%',
          top: '39%',
          zIndex: 2,
          node: (
            <div className="yuanzhu-size" style={{ opacity: 0.8 }}>
              <img className="img" src={`${PUBLIC_URL}/assets/question/B11/yuanzhu.png`} />
            </div>
          ),
        }}
        origin={{
          left: '50%',
          top: '50%',
          zIndex: 2,
          node: (
            <div className="yuanzhu-size">
              <img className="img" src={`${PUBLIC_URL}/assets/question/B11/yuanzhu.png`} />
            </div>
          ),
        }}
      />
      <Group
        target={{
          left: '20%',
          top: '65%',
          zIndex: 1,
          node: (
            <div className="shu-size">
              <img className="img" src={`${PUBLIC_URL}/assets/question/B11/shu.png`} />
            </div>
          ),
        }}
        origin={{
          left: '80%',
          top: '50%',
          zIndex: 1,
          node: (
            <div className="shu-size" draggable>
              <img className="img" src={`${PUBLIC_URL}/assets/question/B11/shu.png`} />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default DragPlay;

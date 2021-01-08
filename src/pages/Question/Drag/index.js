import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import './index.less';

// eslint-disable-next-line no-undef
const PUBLIC_URL = __PUBLIC_URL__;

const Dragger = ({
  left, top, children, zIndex, draggable = true, onMount, onEnd, visiable,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const defaultPosition = useRef();
  const positionRef = useRef();
  const containerRef = useRef();
  const isMouseDown = useRef();
  const lastPoint = useRef();
  positionRef.current = position;

  useLayoutEffect(() => {
    const dom = containerRef.current;
    // console.log('containerRef', dom);
    if (dom) {
      const parentDom = document.querySelector('#dragger-container');
      const parentRect = parentDom.getBoundingClientRect();
      const domRect = dom.getBoundingClientRect();
      const offsetX = domRect.x - parentRect.x;
      const offsetY = domRect.y - parentRect.y;
      // console.log('parrent');
      // console.log('containerRef');
      // console.log(offsetX, offsetY);
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
};

const calcDistance = (point1, point2) => {
  const sum = (point1.x - point2.x) * (point1.x - point2.x)
    + (point1.y - point2.y) * (point1.y - point2.y);
  return Math.sqrt(sum, 0.5);
};

const Group = () => {
  const [success, setSuccess] = useState(false);
  const shapeTarget = useRef();
  const shapeOrigin = useRef();
  const shapeTargetMount = (data) => {
    shapeTarget.current = data;
    console.log('shape target', shapeTarget.current);
  };
  const shapeOriginEnd = (data) => {
    shapeOrigin.current = data;
    console.log('shape origin', shapeOrigin.current);
    const distance = calcDistance(shapeOrigin.current, shapeTarget.current);
    if (distance < 10) {
      setSuccess(true);
    }
    console.log('distance', distance);
  };
  return (
    <>
      <Dragger visiable={success} left="20%" top="38%" zIndex={2} draggable={false} onMount={data => shapeTargetMount(data)}>
        <div className="yuanzhu-size" style={{ opacity: 0.3 }}>
          <img className="img" src={`${PUBLIC_URL}/assets/question/B11/yuanzhu.png`} />
        </div>
      </Dragger>
      <Dragger visiable={!success} left="50%" top="50%" zIndex={2} onEnd={data => shapeOriginEnd(data)}>
        <div className="yuanzhu-size">
          <img className="img" src={`${PUBLIC_URL}/assets/question/B11/yuanzhu.png`} />
        </div>
      </Dragger>
    </>
  );
};

const Drag = (props) => {
  const { info = {} } = props;
  // const { } = info;

  return (
    <div className="component-drag" id="dragger-container">
      <div className="bg-wrap">
        <img className="img" src={`${PUBLIC_URL}/assets/question/B11/beijing.png`} />
      </div>
      <div className="xuxian-wrap xuxian-size">
        <img className="img" src={`${PUBLIC_URL}/assets/question/B11/xuxian.png`} />

        {/* <div className="shu-inner-pos shu-size">
          <img className="img" src={`${PUBLIC_URL}/assets/question/B11/shu.png`} />
        </div> */}
      </div>
      <Group />

      <div className="shu-outer-pos shu-size" draggable>
        <img className="img" src={`${PUBLIC_URL}/assets/question/B11/shu.png`} />
      </div>
    </div>
  );
};

export default Drag;

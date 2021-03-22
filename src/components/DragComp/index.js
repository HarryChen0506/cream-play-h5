import React, {
  useEffect, useState, useCallback, useRef, useLayoutEffect, forwardRef, useImperativeHandle,
} from 'react';
import clsx from 'clsx';
import './index.less';

export const Dragger = forwardRef(({
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
      const parentDom = document.querySelector('#custom-dragger-container');
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
    setPosition,
  }));
  // console.log('position', position);
  return (
    <div
      className={clsx({
        'custom-component-dragger': true,
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
const SUCCESS_DISTANCE = (window.rem * 1.5) || 15;
export const Group = ({ onResult, origin = {}, target = {} }) => {
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
    const originComp = shapeOriginRef.current;
    if (distance < SUCCESS_DISTANCE) {
      setSuccess(true);
      originComp.setPosition(shapeTarget.current);
      typeof onResult === 'function' && onResult(true);
    } else {
      setSuccess(false);
      typeof onResult === 'function' && onResult(false);
      originComp.reset();
    }
  };
  return (
    <>
      <Dragger
        visiable={false}
        left={target.left}
        top={target.top}
        zIndex={target.zIndex}
        draggable={false}
        onMount={data => shapeTargetMount(data)}
      >
        {target.node}
      </Dragger>
      <Dragger
        visiable
        left={origin.left}
        top={origin.top}
        zIndex={origin.zIndex}
        onEnd={data => shapeOriginEnd(data)}
        ref={shapeOriginRef}
      >
        {success ? origin.finalNode : origin.node}
      </Dragger>
    </>
  );
};

export const Sticker = ({
  url, left, top, zIndex, style, onClick, canAnimate = false, innerImage,
}) => {
  const [shake, setShake] = useState(false);
  const timerId = useRef(null);
  const handleClick = () => {
    typeof onClick === 'function' && onClick();
    if (!canAnimate) {
      return;
    }
    setShake(true);
    if (timerId.current) {
      return;
    }
    timerId.current = setTimeout(() => {
      setShake(false);
      timerId.current = null;
    }, 1000);
  };

  return (
    <div
      className={clsx({
        'custom-component-sticker': true,
        shake,
      })}
      style={{
        left,
        top,
        zIndex,
      }}
    >
      <div
        className="sticker-size"
        style={style}
        onClick={handleClick}
      >
        <img className="img" src={url} />
      </div>
      {innerImage && (
        <div
          className="inner-image"
          style={innerImage.style}
          onClick={handleClick}
        >
          <img className="img" src={innerImage.url} />
        </div>
      )}
    </div>
  );
};

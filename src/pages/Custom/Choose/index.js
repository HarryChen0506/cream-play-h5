import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import clsx from 'clsx';
import { Sticker } from '@/components/DragComp';
import './index.less';

const PUBLIC_URL = __PUBLIC_URL__;

const config = {
  id: 'BL2-2',
  type: 'choose',
  title: '赶紧选择一件礼物送给贝儿吧！',
  background: {
    url: `${PUBLIC_URL}/assets/custom/H22/bg.jpg`,
    width: '30rem',
    height: '16.875rem',
  },
  sticker: [
    {
      left: '40%',
      top: '50%',
      zIndex: 1,
      width: '12rem',
      url: `${PUBLIC_URL}/assets/custom/H22/gift.png`,
    },
    // 框
    {
      type: 'box',
      left: '85%',
      top: '20%',
      zIndex: 1,
      width: '4rem',
      url: `${PUBLIC_URL}/assets/custom/H22/box.png`,
      innerImage: {
        style: {
          width: '2.4rem',
        },
        url: `${PUBLIC_URL}/assets/custom/H22/1.png`,
      },
    },
    {
      type: 'box',
      left: '85%',
      top: '50%',
      zIndex: 1,
      width: '4rem',
      url: `${PUBLIC_URL}/assets/custom/H22/box.png`,
      innerImage: {
        style: {
          width: '1.8rem',
        },
        url: `${PUBLIC_URL}/assets/custom/H22/2.png`,
      },
    },
    {
      type: 'box',
      left: '85%',
      top: '80%',
      zIndex: 1,
      width: '4rem',
      url: `${PUBLIC_URL}/assets/custom/H22/box.png`,
      innerImage: {
        style: {
          width: '2.2rem',
        },
        url: `${PUBLIC_URL}/assets/custom/H22/3.png`,
      },
    },
  ],
};

const CustomSelect = (props) => {
  const { info = {}, onSuccess } = props;
  const { background, sticker = [] } = config || {};

  const handleClick = (item) => {
    if (['option', 'box'].includes(item.type)) {
      setTimeout(() => {
        typeof onSuccess === 'function' && onSuccess();
      }, 500);
    }
  };

  return (
    <div className="component-custom-choose">
      <div className="body">
        <div className="bg-wrap" style={{ width: background?.width, height: background?.height }}>
          <img className="img" src={background?.url} />
        </div>
        {sticker.map((v, index) => (
          <Sticker
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            left={v.left}
            top={v.top}
            zIndex={v.zIndex}
            style={{ width: v.width }}
            url={v.url}
            innerImage={v.innerImage}
            onClick={() => handleClick(v)}
            canAnimate={Boolean(v.innerImage)}
          />
        ))}

      </div>
    </div>
  );
};

export default CustomSelect;

import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { parse, stringify } from 'qs';
import Select from './Select';
import Drag from './Drag';
import Roll from './Roll';
import QuestionItem from './QuestionItem';
import './index.less';

// eslint-disable-next-line no-undef
const PUBLIC_URL = __PUBLIC_URL__;
console.log('PUBLIC_URL', PUBLIC_URL);
// 方向 horizontal vertical
const questionList = [
  {
    id: 'M1',
    type: 'select',
    title: '小朋友,选一选,哪样东西能帮助大象莫卡的鼻子变长呢？',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M1/gun.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M1/shao.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M1/qianbi.png`,
      },
    ],
    optionDirection: 'horizontal',
    correctIndex: 0,
  },
  {
    id: 'M6',
    type: 'select',
    title: '小朋友,选一选,下面哪一个是圆柱体呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M6/youyongquan.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M6/yuanzhu.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M6/shitou.png`,
      },
    ],
    top: null,
    right: null,
    optionDirection: 'horizontal',
    correctIndex: 1,
  },
  {
    id: 'B6',
    type: 'select',
    title: '小朋友,选一选,彩虹桌布缺少哪个颜色呢?',
    options: [
      {
        size: 'small',
        url: `${PUBLIC_URL}/assets/question/B6/hong.png`,
      },
      {
        size: 'small',
        url: `${PUBLIC_URL}/assets/question/B6/huang.png`,
      },
      {
        size: 'small',
        url: `${PUBLIC_URL}/assets/question/B6/zi.png`,
      },
    ],
    right: {
      size: 'large',
      url: `${PUBLIC_URL}/assets/question/B6/zhuobu_que.png`,
    },
    optionDirection: 'horizontal',
    correctIndex: 1,
  },
  {
    id: 'B7',
    type: 'select',
    title: '小朋友,选一选,下面哪组是立体图形?',
    options: [
      {
        size: 'extra-large',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B7/pingmian.png`,
      },
      {
        size: 'extra-large',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B7/liti.png`,
      },
    ],
    optionDirection: 'vertical',
    correctIndex: 1,
  },
  {
    id: 'M3',
    type: 'select',
    title: '小朋友,选一选,下面哪组是立体图形?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M3/qiupai.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M3/qiupai.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M3/qiupai.png`,
      },
    ],
    top: {
      size: 'extra-large',
      url: `${PUBLIC_URL}/assets/question/M3/gunzi.png`,
    },
    optionDirection: 'horizontal',
    correctIndex: 1,
  },
  {
    id: 'B11',
    type: 'drag',
    title: '小朋友, 拖动一下试试吧',
  },
  {
    id: 'M4',
    type: 'roll',
    title: '小朋友, 点击推倒一下试试吧！',
  },
];
const findQuestionById = (list, id) => list.find(v => v.id === id);

const Question = () => {
  const { location } = useHistory();
  const query = parse(location.search.split('?')[1]);
  // console.log('query', query);
  const [id, setId] = useState(query.id || 'M1');
  const [info, setInfo] = useState(() => findQuestionById(questionList, id));
  if (!info) {
    return null;
  }
  console.log('info', info);
  if (info.type === 'select') {
    return (
      <div className="page-question">
        <div className="page-body">
          <QuestionItem
            title={info.title}
          >
            <Select info={info} />
          </QuestionItem>
        </div>
      </div>
    );
  }
  if (info.type === 'drag') {
    return (
      <div className="page-question">
        <div className="page-body">
          <QuestionItem
            title={info.title}
          >
            <Drag />
          </QuestionItem>
        </div>
      </div>
    );
  }
  if (info.type === 'roll') {
    return (
      <div className="page-question">
        <div className="page-body">
          <QuestionItem
            title={info.title}
          >
            <Roll />
          </QuestionItem>
        </div>
      </div>
    );
  }
  return null;
};

export default Question;

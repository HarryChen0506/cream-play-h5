import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { parse, stringify } from 'qs';
import Select from './Select';
import QuestionItem from './QuestionItem';
import './index.less';

// eslint-disable-next-line no-undef
const PUBLIC_URL = __PUBLIC_URL__;
console.log('PUBLIC_URL', PUBLIC_URL);

const questionList = [
  {
    id: '1',
    type: 'select',
    options: [
      {
        url: `${PUBLIC_URL}/assets/question/topic_1/shao.png`,
      },
      {
        url: `${PUBLIC_URL}/assets/question/topic_1/gun.png`,
      },
      {
        url: `${PUBLIC_URL}/assets/question/topic_1/qianbi.png`,
      },
    ],
    correctIndex: 0,
  },
];
const findQuestionById = (list, id) => list.find(v => v.id === id);

const Question = () => {
  const { location } = useHistory();
  const query = parse(location.search.split('?')[1]);
  console.log('query', query);
  const [id, setId] = useState(query.id || '1');
  const [info, setInfo] = useState(() => findQuestionById(questionList, id));
  console.log('info', info);
  return (
    <div className="page-question">
      <div className="page-body">
        <QuestionItem
          title="请问小朋友, 哪样东西能帮助大象莫卡的鼻子变长？"
        >
          <Select info={info} />
        </QuestionItem>
      </div>
    </div>
  );
};

export default Question;

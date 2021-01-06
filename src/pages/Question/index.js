import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { parse, stringify } from 'qs';
import './index.less';

// eslint-disable-next-line no-undef
const PUBLIC_URL = __PUBLIC_URL__;
console.log('PUBLIC_URL', PUBLIC_URL);

const OptionItem = (props) => {
  const { active = false, url, onClick } = props;
  return (
    <div className={`option-item ${active ? 'active' : ''}`} onClick={onClick}>
      <div className="image-wrap">
        <img src={url} />
      </div>
      {active
        && (
          <div className="result">
            <img src={`${PUBLIC_URL}/assets/question/right.png`} />
          </div>
        )}
    </div>
  );
};
const QuestionItem = (props) => {
  const { children, title, onClick } = props;
  return (
    <div className="question-section" onClick={onClick}>
      <div className="title">{title}</div>
      <div className="question-body">
        {children}
      </div>
    </div>
  );
};

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

const Select = (props) => {
  const { info = {} } = props;
  const { options = [], correctIndex } = info;
  const [currentIndex, setCurrentIndex] = useState();
  const [isCorrect, setIsCorrect] = useState(false);
  console.log('info', info);
  const handleClick = (index) => {
    console.log('index', index);
    setCurrentIndex(index);
  };
  useEffect(() => {
    if (currentIndex === correctIndex) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }, [currentIndex, correctIndex]);
  return (
    <>
      {options.map((v, i) => (
        <OptionItem
          key={v.url}
          active={correctIndex === i && isCorrect}
          url={v.url}
          onClick={() => handleClick(i)}
        />
      ))}
    </>
  );
};

const Question = () => {
  const { location } = useHistory();
  const query = parse(location.search.split('?')[1]);
  console.log('query', query);
  const [id, setId] = useState(query.id || '1');
  const [info, setInfo] = useState(() => findQuestionById(questionList, id));
  const [result, setResult] = useState(false);
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

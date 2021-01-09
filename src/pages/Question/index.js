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
import Congratulate from './Congratulate';
import './index.less';
import data from './data';

const findQuestionById = (list, id) => list.find(v => v.id === id);
const findQuestionByDir = (list, id) => list.find(v => v.dir === id);

const Question = () => {
  const { location } = useHistory();
  const query = parse(location.search.split('?')[1]);
  // let info = null;
  let info = findQuestionByDir(data, 'M1');
  if (query.id) {
    info = findQuestionById(data, query.id);
  } else if (query.dir) {
    info = findQuestionByDir(data, query.dir);
  }
  // const [id, setId] = useState(query.id || 'M1');
  // const [info, setInfo] = useState(() => findQuestionById(data, id));
  const congratulateRef = useRef();
  const handleSuccess = useCallback(() => {
    congratulateRef.current && congratulateRef.current.start();
  }, []);
  if (!info) {
    return null;
  }
  // console.log('info', info);
  let body = null;
  if (info.type === 'select') {
    body = <Select info={info} onSuccess={handleSuccess} />;
  }
  if (info.type === 'drag') {
    body = <Drag onSuccess={handleSuccess} />;
  }
  if (info.type === 'roll') {
    body = <Roll onSuccess={handleSuccess} />;
  }
  return (
    <div className="page-question">
      <div className="page-body">
        <QuestionItem
          title={info.title}
        >
          {body}
        </QuestionItem>
      </div>
      <Congratulate ref={congratulateRef} />
    </div>
  );
};

export default Question;

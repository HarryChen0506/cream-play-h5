import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { parse, stringify } from 'qs';
import CustomLayout from '@/components/CustomLayout';
import Congratulate from '@/components/Congratulate';
import bridge from '@/services/bridge';
import DragPlay from './DragPlay';
import CustomSelect from './CustomSelect';
import Choose from './Choose';
import data from './data';
import './index.less';

const findQuestionById = (list, id) => list.find(v => v.id === id);

const Custom = () => {
  const congratulateRef = useRef();
  const { location } = useHistory();
  const query = parse(location.search.split('?')[1]);

  let info = findQuestionById(data, 'H2-2');
  if (query.id) {
    info = findQuestionById(data, query.id) || { id: 'H1-1' };
  }
  const handleSuccess = useCallback(() => {
    bridge.didSelectCorrectAnswer();
    congratulateRef.current && congratulateRef.current.start();
  }, []);

  let body = null;

  if (info.type === 'drag') {
    body = <DragPlay info={info} id={info?.id} onSuccess={handleSuccess} />;
  } else if (info.type === 'customSelect') {
    body = <CustomSelect info={info} onSuccess={handleSuccess} />;
  } else if (info.type === 'choose') {
    body = <Choose info={info} onSuccess={handleSuccess} />;
  }

  return (
    <div className="page-custom">
      <div className="page-body">
        <CustomLayout title={info.title}>
          {body}
        </CustomLayout>
      </div>
      <Congratulate
        ref={congratulateRef}
        onAnimateFinish={() => {
          bridge.selectCorrectAnswerAnimationDidEnd();
        }}
      />
    </div>
  );
};

export default Custom;

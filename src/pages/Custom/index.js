import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { parse, stringify } from 'qs';
import CustomLayout from '@/components/CustomLayout';
import Congratulate from '@/components/Congratulate';
import DragPlay from './DragPlay';
import data from './data';
import './index.less';

const findQuestionById = (list, id) => list.find(v => v.id === id);

const Custom = () => {
  const congratulateRef = useRef();
  const { location } = useHistory();
  const query = parse(location.search.split('?')[1]);

  let info = findQuestionById(data, 'H1-1');
  if (query.id) {
    info = findQuestionById(data, query.id) || { id: 'H1-1' };
  }
  const handleSuccess = useCallback(() => {
    congratulateRef.current && congratulateRef.current.start();
  }, []);

  const body = <DragPlay info={info} id={info?.id} onSuccess={handleSuccess} />;

  return (
    <div className="page-custom">
      <div className="page-body">
        <CustomLayout>
          {body}
        </CustomLayout>
      </div>
      <Congratulate ref={congratulateRef} />
    </div>
  );
};

export default Custom;

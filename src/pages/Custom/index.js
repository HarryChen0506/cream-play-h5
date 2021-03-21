import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { parse, stringify } from 'qs';
import CustomLayout from '@/components/CustomLayout';
import Congratulate from '@/components/Congratulate';
import PlayH11 from './H1-1';
import './index.less';

const Custom = () => {
  const congratulateRef = useRef();

  const handleSuccess = useCallback(() => {
    congratulateRef.current && congratulateRef.current.start();
  }, []);

  const body = <PlayH11 onSuccess={handleSuccess} />;

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

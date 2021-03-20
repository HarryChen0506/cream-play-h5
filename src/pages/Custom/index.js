import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { parse, stringify } from 'qs';
import CustomLayout from '@/components/CustomLayout';
import PlayH11 from './H1-1';
import './index.less';

const Custom = () => {
  const body = <PlayH11 />;
  return (
    <div className="page-custom">
      <div className="page-body">
        <CustomLayout>
          {body}
        </CustomLayout>
      </div>
    </div>
  );
};

export default Custom;

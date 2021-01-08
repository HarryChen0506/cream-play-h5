import React, {
  useEffect, useState, useCallback, useRef,
} from 'react';
import './index.less';

const QuestionItem = (props) => {
  const { children, title, onClick } = props;
  return (
    <div className="component-question-section" onClick={onClick}>
      <div className="question-header">
        <div className="title">{title}</div>
      </div>
      <div className="question-body">
        {children}
      </div>
    </div>
  );
};

export default QuestionItem;

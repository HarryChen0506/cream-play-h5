/* eslint-disable */

import React, { useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import './index.less'


const Question = () => (
  <div className="page-question">
    <div className="page-body">
      <div className='question-section'>
        <div className='title'>请问小朋友</div>
        <div className='question-body'>
          <div className='option-item'>
            <div className='result'></div>
          </div>
          <div className='option-item'>
            <img src='/assets/question/topic_1/shao.png'></img>
          </div>
          <div className='option-item'></div>
        </div>
      </div>
    </div>
  </div>
);

export default Question;

/* eslint-disable */

import React, { useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import './index.less'


const Question = () => (
  <div className="page-question">
    <div className="page-body">
      <div className='question-section'>
        <div className='title'>请问小朋友, 哪样东西能帮助大象莫卡的鼻子变长？</div>
        <div className='question-body'>
          <div className='option-item active'>
            <div className='image-wrap'>
              <img src='/assets/question/topic_1/shao.png'></img>
            </div>
            <div className='result active'>
              <img src='/assets/question/right.png'></img>
            </div>
          </div>
          <div className='option-item'>
            <div className='image-wrap'>
              <img src='/assets/question/topic_1/shao.png'></img>
            </div>
          </div>
          <div className='option-item'>
            <div className='image-wrap'>
              <img src='/assets/question/topic_1/shao.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Question;

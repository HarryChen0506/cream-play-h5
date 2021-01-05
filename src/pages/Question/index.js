/* eslint-disable */

import React, { useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
import './index.less'

const OptionItem = (props) => {
  const { active = false, url, } = props
  return (
    <div className={`option-item ${active ? 'active' : ''}`}>
      <div className='image-wrap'>
        <img src={url}></img>
      </div>
      {active &&
        <div className='result'>
          <img src='/assets/question/right.png'></img>
        </div>
      }
    </div>
  )
}
const QuestionItem = (props) => {
  const { children, title } = props
  return (
    <div className='question-section'>
      <div className='title'>{title}</div>
      <div className='question-body'>
        {children}
      </div>
    </div>
  )
}

const questionList = [
  {
    type: 'select',
    options: [
      {
        url: '/assets/question/topic_1/shao.png'
      },
      {
        url: '/assets/question/topic_1/gun.png'
      },
      {
        url: '/assets/question/topic_1/qianbi.png'
      },
    ],
    rightIndex: 0
  }
]

const Question = () => {
  const [id, setId] = useState()
  const [info, setInfo] = useState({})
  const [result, setResult] = useState(false)
  return (
    <div className="page-question">
      <div className="page-body">
        <QuestionItem
          title='请问小朋友, 哪样东西能帮助大象莫卡的鼻子变长？'
        >
          <OptionItem
            active={true}
            url={'/assets/question/topic_1/shao.png'}
          ></OptionItem>
          <OptionItem
            active={false}
            url={'/assets/question/topic_1/gun.png'}
          ></OptionItem>
          <OptionItem
            active={false}
            url={'/assets/question/topic_1/qianbi.png'}
          ></OptionItem>
        </QuestionItem>
      </div>
    </div>
  )
}

export default Question;

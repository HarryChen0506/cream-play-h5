/* eslint-disable */

import React, { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { parse, stringify } from 'qs'
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
    id: '1',
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
const findQuestionById = (list, id) => {
  return list.find(v => v.id === id)
}

const Question = () => {
  const {location} = useHistory()
  const query = parse(location.search.split('?')[1])
  console.log('query', query)
  const [id, setId] = useState(query.id)
  const [info, setInfo] = useState(() => {
    return findQuestionById(questionList, id)
  })
  const [result, setResult] = useState(false)
  console.log('info', info)
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

const PUBLIC_URL = __PUBLIC_URL__;
console.log('PUBLIC_URL', PUBLIC_URL);

// 方向 horizontal vertical

const questionList = [
  {
    id: 'ML1-1',
    dir: 'M1',
    type: 'select',
    title: '小朋友,选一选,哪样东西能帮助大象莫卡的鼻子变长呢？',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M1/gun.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M1/shao.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M1/qianbi.png`,
      },
    ],
    optionDirection: 'horizontal',
    correctIndex: 0,
  },
  {
    id: 'ML1-2',
    dir: 'M2',
    type: 'select',
    title: '小朋友,选一选,哪样东西能帮助大象莫卡勾住泥坑里的瓶子呢？',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M2/1.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M2/2.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M2/3.png`,
      },
    ],
    optionDirection: 'horizontal',
    correctIndex: 1,
  },
  {
    id: 'ML1-3',
    dir: 'M3',
    type: 'select',
    title: '小朋友,选一选,哪样东西能组成曲棍球球杆让运动员赢得比赛呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M3/qiupai.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M3/gangling.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M3/qugunqiu.png`,
      },
    ],
    top: {
      size: 'extra-large',
      url: `${PUBLIC_URL}/assets/question/M3/gunzi.png`,
    },
    optionDirection: 'horizontal',
    correctIndex: 2,
  },
  {
    id: 'ML2-1',
    dir: 'M4',
    type: 'select',
    title: '小朋友,选一选,下面哪一个是圆柱体呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M4/youyongquan.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M4/yuanzhu.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M4/shitou.png`,
      },
    ],
    top: null,
    right: null,
    optionDirection: 'horizontal',
    correctIndex: 1,
  },
  {
    id: 'ML2-2',
    dir: 'M5',
    type: 'select',
    title: '小朋友,选一选,下面哪一个是圆柱体呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M5/wu.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M5/yugang.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M5/yan.png`,
      },
    ],
    top: null,
    right: null,
    optionDirection: 'horizontal',
    correctIndex: 2,
  },
  {
    id: 'ML2-3',
    dir: 'M6',
    type: 'select',
    title: '小朋友,选一选,下面哪一个是圆柱体呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M6/baowenbei.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M6/hulu.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/M6/shalou.png`,
      },
    ],
    top: null,
    right: null,
    optionDirection: 'horizontal',
    correctIndex: 0,
  },
  {
    id: 'ML2-4',
    dir: 'M7',
    type: 'roll',
    title: '小朋友, 点击推倒一下试试吧！',
  },
  {
    id: 'ML2-5',
    dir: 'M8',
    type: 'select',
    title: '小朋友,选一选,下面哪组木棍能帮助大象摩卡顺利移动箱子呢?',
    options: [
      {
        size: 'extra-large',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/M8/zhengqi.png`,
      },
      {
        size: 'extra-large',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/M8/sanluan.png`,
      },
    ],
    optionDirection: 'vertical',
    correctIndex: 0,
  },
  {
    id: 'BL1-1',
    dir: 'B1',
    type: 'select',
    title: '小朋友,选一选,下面哪一个是七色彩虹呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/B1/7se.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/B1/4se.png`,
      },
    ],
    top: null,
    right: null,
    optionDirection: 'horizontal',
    correctIndex: 0,
  },
  {
    id: 'BL-2',
    dir: 'B2',
    type: 'select',
    title: '小朋友,选一选,哪个颜色是青色呢?',
    options: [
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/B2/qing.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/B2/lan.png`,
      },
      {
        size: 'middle',
        url: `${PUBLIC_URL}/assets/question/B2/lv.png`,
      },
    ],
    top: null,
    right: null,
    optionDirection: 'horizontal',
    correctIndex: 0,
  },
  {
    id: 'BL1-3',
    dir: 'B3',
    type: 'select',
    title: '小朋友,选一选,彩虹花瓣缺少哪个颜色呢?',
    options: [
      {
        size: 'small',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B3/cheng.png`,
      },
      {
        size: 'small',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B3/lan.png`,
      },
      {
        size: 'small',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B3/qing.png`,
      },
    ],
    right: {
      size: 'large',
      url: `${PUBLIC_URL}/assets/question/B3/que.png`,
    },
    optionDirection: 'horizontal',
    correctIndex: 2,
  },
  {
    id: 'B6',
    dir: 'B6',
    type: 'select',
    title: '小朋友,选一选,彩虹桌布缺少哪个颜色呢?',
    options: [
      {
        size: 'small',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B6/hong.png`,
      },
      {
        size: 'small',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B6/huang.png`,
      },
      {
        size: 'small',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B6/zi.png`,
      },
    ],
    right: {
      size: 'large',
      url: `${PUBLIC_URL}/assets/question/B6/zhuobu_que.png`,
    },
    optionDirection: 'horizontal',
    correctIndex: 1,
  },
  {
    id: 'B7',
    dir: 'B7',
    type: 'select',
    title: '小朋友,选一选,下面哪组是立体图形?',
    options: [
      {
        size: 'extra-large',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B7/pingmian.png`,
      },
      {
        size: 'extra-large',
        marginSize: 'small',
        url: `${PUBLIC_URL}/assets/question/B7/liti.png`,
      },
    ],
    optionDirection: 'vertical',
    correctIndex: 1,
  },

  {
    id: 'B11',
    dir: 'B11',
    type: 'drag',
    title: '小朋友, 拖动一下试试吧',
  },

];

export default questionList;

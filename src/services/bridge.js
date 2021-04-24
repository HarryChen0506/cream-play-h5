// app-webview bridge
/* eslint-disable */

const bridge = {};

function before(callback) {
  return function () {
    // if (!window.creamplay) {
    //   return;
    // }
    return typeof callback === 'function' && callback();
  };
}

bridge.didSelectCorrectAnswer = before(() => {
  console.log('didSelectCorrectAnswer');
  window.creamplay && window.creamplay.didSelectCorrectAnswer && window.creamplay.didSelectCorrectAnswer();
});

bridge.didSelectIncorrectAnswer = before(() => {
  console.log('didSelectIncorrectAnswer');
  window.creamplay && window.creamplay.didSelectCorrectAnswer && window.creamplay.didSelectIncorrectAnswer();
});

bridge.selectCorrectAnswerAnimationDidEnd = before(() => {
  console.log('selectCorrectAnswerAnimationDidEnd');
  window.creamplay && window.creamplay.didSelectCorrectAnswer && window.creamplay.selectCorrectAnswerAnimationDidEnd();
});

export default bridge;

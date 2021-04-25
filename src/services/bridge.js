// app-webview bridge
/* eslint-disable */

// bridge.callHandler("Log", "Foo")
// bridge.callHandler("getScreenHeight", null, function(response) {
// 	alert('Screen height:' + response)
// })



function before(callback) {
  return function () {
    // if (!window.bridge) {
    //   return;
    // }
    return typeof callback === 'function' && callback();
  };
}

const didSelectCorrectAnswer = before(() => {
  console.log('didSelectCorrectAnswer');
  window.bridge && window.bridge.callHandler && window.bridge.callHandler('didSelectCorrectAnswer');
});

const didSelectIncorrectAnswer = before(() => {
  console.log('didSelectIncorrectAnswer');
  window.bridge && window.bridge.callHandler && window.bridge.callHandler('didSelectIncorrectAnswer');
});

const selectCorrectAnswerAnimationDidEnd = before(() => {
  console.log('selectCorrectAnswerAnimationDidEnd');
  window.bridge && window.bridge.callHandler && window.bridge.callHandler('selectCorrectAnswerAnimationDidEnd');
});

const viewBridge = {
  didSelectCorrectAnswer,
  didSelectIncorrectAnswer,
  selectCorrectAnswerAnimationDidEnd
};

export default viewBridge;

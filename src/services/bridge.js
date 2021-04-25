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
  window.bridge && window.bridge.callHandler && window.bridge.callHandler('didSelectCorrectAnswer', null, (response) => {
    alert('cream play:' + response)
  });
});

const didSelectIncorrectAnswer = before(() => {
  console.log('didSelectIncorrectAnswer');
  window.bridge && window.bridge.callHandler && window.bridge.callHandler('didSelectIncorrectAnswer', null, (response) => {
    alert('cream play:' + response)
  });
});

const selectCorrectAnswerAnimationDidEnd = before(() => {
  console.log('selectCorrectAnswerAnimationDidEnd');
  window.bridge && window.bridge.callHandler && window.bridge.callHandler('selectCorrectAnswerAnimationDidEnd', null, (response) => {
    alert('cream play:' + response)
  });
});

const viewBridge = {
  didSelectCorrectAnswer,
  didSelectIncorrectAnswer,
  selectCorrectAnswerAnimationDidEnd
};

export default viewBridge;

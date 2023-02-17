/* eslint-disable no-restricted-globals */

self.onmessage = (e: MessageEvent<string>) => {
  let maxCount = 1000000000;
  for (let i = maxCount; i > 0; i--) {
    if (i % (maxCount / 10) === 0) {
      console.log('一个很耗费性能的代码' + i);
    }
  }
  console.log('--------- While Loop has Ended! ---------');
  self.postMessage('While Loop has Ended');
};

export {};

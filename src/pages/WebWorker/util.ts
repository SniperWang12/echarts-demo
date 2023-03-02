/**
 * 一个非常耗费性能的代码
 */
const mockVeryBigJsEvent = (): void => {
  let maxVal = 10000000000;
  for (maxVal; maxVal > 1000000; maxVal--) {
    if (maxVal % 10000000 == 0) {
      console.log(maxVal);
    }
  }
};

export { mockVeryBigJsEvent };

/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */

/**
 * 自定义Hook - 节流函数
 */
import { useEffect, useState, useRef, DependencyList } from 'react';

const useThrottle = (
  fn: Function,
  ms: number = 300,
  deps: DependencyList | undefined[] = [],
) => {
  let previous = useRef(0);
  let [time, setTime] = useState(ms);
  useEffect(() => {
    let now = Date.now();
    console.log(now);
    if (now - previous.current > time) {
      fn();
      previous.current = now;
    }
  }, deps);

  const cancel = (ms: number) => {
    setTime(ms);
  };
  return [cancel];
};
export default useThrottle;

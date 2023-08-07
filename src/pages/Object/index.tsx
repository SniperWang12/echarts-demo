/*!
 * Copyright (C) 2016-present, Yuansuan.cn
 * @Author bin_wang
 */

import { useMount } from 'ahooks';

export default () => {
  useMount(() => {
    document.addEventListener('click', () => {});
  });
  return (
    <>
      <h1>我是恁爹</h1>
      <div style={{ border: '1px solid red' }} onClick={() => {}}>
        八嘎呀路
      </div>
    </>
  );
};

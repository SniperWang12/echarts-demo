import { useRequest, useUpdateEffect } from 'ahooks';
import { Button, Card } from 'antd';
import { observer, useLocalStore } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Wrapper } from './style';
import HighEnergy from './HighEnergy';

export default observer(() => {
  return (
    <>
      <Card style={{ width: '400px', height: '400px' }}>
        <HighEnergy />
      </Card>
    </>
  );
});

const debounce = (fn: Function, wait: number) => {
  let timeout: any = null;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
};

import { useSafeState } from 'ahooks';
import { Button } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { mockVeryBigJsEvent } from './util';

export default () => {
  let i = 0;
  // const worker = new Worker('./worker1.js');
  const handleBtnClick = () => {
    mockVeryBigJsEvent();
    // worker.postMessage(mockVeryBigJsEvent);
  };
  const [index1, setIndex1] = useSafeState(0);
  const handleUIOperate = () => {
    i++;
    console.log('更新数据', i);
    setIndex1(Math.random());
  };

  return (
    <>
      <h1>{index1}</h1>
      <Button onClick={handleBtnClick}>
        worker发送消息 <SyncOutlined spin />
      </Button>
      <Button onClick={handleUIOperate}>其他操作</Button>
    </>
  );
};

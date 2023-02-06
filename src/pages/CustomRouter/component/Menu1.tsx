import { useUnmount } from 'ahooks';
import { Button, message } from 'antd';
import { useEffect } from 'react';

const Menu1 = () => {
  useEffect(() => {
    message.info('init Menu1');
  }, []);

  useUnmount(() => {
    message.error('destroy Menu1');
  });

  const mockFetch = (i: number) => {
    setTimeout(() => {
      console.log(i);
    });
  };

  let id: any = null;
  const onSubmit = () => {
    let i = 0;
    id = setTimeout(() => {
      do {
        setTimeout(() => {
          console.log(i);
        }, 1000);
      } while (true);
    }, 3000);
  };

  return (
    <>
      <h1>我是Menu1</h1>
      <Button
        type="primary"
        onClick={() => {
          onSubmit();
        }}
      >
        执行
      </Button>
      <Button
        onClick={() => {
          clearTimeout(id);
        }}
      >
        取消
      </Button>
    </>
  );
};
export default Menu1;

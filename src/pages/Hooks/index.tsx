import { Button, Input } from 'antd';
import { Fragment, useState } from 'react';
import useDebounce from './useDebounce';
import useThrottle from './useThrottle';
import useTitle from './useTitle';

interface InputProp extends React.ChangeEvent<HTMLInputElement> {}

export default () => {
  return (
    <Fragment>
      <DebounceCom />
      <ThrottleCom />
      <UseTitleCom />
    </Fragment>
  );
};

const UseTitleCom = () => {
  useTitle('你好');
  document.title = '你好';
  const titleChange = (e: InputProp) => {
    // useTitle(e.target.value);
    // useThrottle(
    //   () => {
    //     useTitle(e.target.value);
    //   },
    //   500,
    //   [e.target.value],
    // );
  };
  return (
    <Fragment>
      <h1>useTitle Hooks</h1>
      <Input type="text" onChange={titleChange} />
    </Fragment>
  );
};

/**
 * 节流hooks测试
 * @returns
 */
const ThrottleCom = () => {
  const [a, setA] = useState<string | number>(0);
  const [b, setB] = useState<string | number>(0);
  const [cancel] = useThrottle(() => setB(a), 500, [a]);
  const changeIpt = (e: InputProp) => {
    setA(e.target.value);
  };
  return (
    <Fragment>
      <h1>节流</h1>
      <div>
        <Input type="text" onChange={changeIpt} />
        {b} ---- {a}
        <Button
          onClick={() => {
            cancel(500);
          }}
        >
          开始节流
        </Button>
        <Button
          onClick={() => {
            cancel(0);
          }}
        >
          取消节流
        </Button>
      </div>
    </Fragment>
  );
};

/**
 * 防抖hooks测试
 * @returns
 */
const DebounceCom = () => {
  const [a, setA] = useState<number | string>(0);
  const [b, setB] = useState<number | string>(0);
  const [cancel] = useDebounce(
    () => {
      setB(a);
    },
    2000,
    [a],
  );
  const changeIpt = (e: InputProp) => {
    setA(e.target.value);
  };
  return (
    <Fragment>
      <h1>防抖</h1>
      <div>
        <Input type="text" onChange={changeIpt} />
        {b} ---- {a}
        <Button
          onClick={() => {
            cancel();
          }}
        >
          cancel
        </Button>
      </div>
    </Fragment>
  );
};

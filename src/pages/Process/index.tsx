import { ContentCard } from '@/components/card';
import ProgressTech from '@/components/ProgressTech';
import Progress2 from '@/components/ProgressTech/Progress2';
import { useSafeState } from 'ahooks';
import { Button, message, Row } from 'antd';
import { observer, useLocalStore } from 'mobx-react-lite';
import { Fragment, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import styled from 'styled-components';
import { process1Path, process2Path } from './tempCode';
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  .ant-card-body {
    padding: 0 !important;
  }
  .process-outer {
    width: 100%;
    height: 100%;
    background-color: #05031f;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .process-line-outer {
    width: 400px;
    height: 50px;
    border: 1px solid #333;
    position: relative;
    .process-img {
      height: 100%;
      position: absolute;
      width: 50px;
      background-color: aquamarine;
      border: 1px solid blue;
      cursor: pointer;
    }
  }
`;

export default observer(() => {
  const store = useLocalStore(() => ({
    canMove: false,
  }));
  const list = [{ name: 'nnnn' }];
  const [data, setData] = useSafeState<Array<{ name: string }>>([]);
  const handleSetValue = () => {
    setData(list);
  };
  const [processNum1, setProcessNum1] = useSafeState(10);
  useEffect(() => {
    handleSetValue();
    let interval = setInterval(() => {
      setProcessNum1(Math.random() * 100);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log('store.canMove', store.canMove);
  }, [store.canMove]);

  return (
    <Wrapper>
      <Row>
        <ContentCard
          content={<ProgressTech radius={180} progressNum={processNum1} />}
          title={'进度条1 ↓'}
          contentBgColor="black"
          code={process1Path}
        />
        <ContentCard
          content={<Progress2 />}
          title={'进度条2 ↓'}
          code={process2Path}
        />
      </Row>
      <Button onClick={handleSetValue}>重新设置值</Button>
      <Child data={data} />
    </Wrapper>
  );
});
const Child = ({ data }: { data: Array<{ name: string }> }) => {
  const markdown = `# Just a link: https://reactjs.com.\n \`\`\`javascript public static void main(){}\`\`\``;

  return (
    <Fragment>
      {(data && data.length && data.map((item) => <div>{item.name}</div>)) ||
        '数组为空'}
      <div id="preview"></div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
    </Fragment>
  );
};

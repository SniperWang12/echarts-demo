import { ContentCard } from '@/components/card';
import ProgressTech from '@/components/ProgressTech';
import { useSafeState } from 'ahooks';
import { Button, message, Row } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import styled from 'styled-components';
import { process1Path, process2Path } from './tempCode';
const Wrapper = styled.div`
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
`;

export default () => {
  const list = [{ name: 'nnnn' }];
  const [data, setData] = useSafeState<Array<{ name: string }>>([]);
  const handleSetValue = () => {
    setData(list);
  };
  useEffect(() => {
    handleSetValue();
  }, []);
  return (
    <Wrapper>
      <Row>
        <ContentCard
          content={<ProgressTech radius={180} progressNum={30} />}
          title={'进度条1 ↓'}
          contentBgColor="black"
          code={process1Path}
        />
        <ContentCard
          content={<ProgressTech radius={180} progressNum={30} />}
          title={'进度条2 ↓'}
          contentBgColor="black"
          code={process2Path}
        />
      </Row>
      {/* <Button onClick={handleSetValue}>重新设置值</Button> */}
      {/* <Child data={data} /> */}
    </Wrapper>
  );
};
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

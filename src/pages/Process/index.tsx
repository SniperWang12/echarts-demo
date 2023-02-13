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
  useEffect(() => {
    handleSetValue();
  }, []);

  const [left, setLeft] = useSafeState(0);

  const mouseMove = (e: any) => {
    if (store.canMove) {
      var mouseMoveX = e.pageX - parent - 80;
      let tempData = 0;
      if (mouseMoveX > 350) {
        tempData = 350;
      } else if (mouseMoveX < 0) {
        tempData = 0;
      } else {
        tempData = mouseMoveX;
      }
      console.log('tempData', tempData);
      setLeft(tempData);
    }
  };
  const mouseDown = () => {
    setLeft(0);
    store.canMove = true;
  };
  const mouseUp = () => {
    if (store.canMove) {
      store.canMove = false;
      message.loading({ duration: 0, content: '正在判断' });
      setTimeout(() => {
        setLeft(0);
        message.destroy();
      }, 1000);
    } else {
      return;
    }
  };
  const [parent, setParent] = useSafeState(0);
  useEffect(() => {
    document.body.onmouseup = mouseUp;
    document.body.onmousemove = mouseMove;
    let tempsSda = document.getElementById('img')!.getBoundingClientRect().left;
    setParent(tempsSda);
  }, []);

  useEffect(() => {
    console.log('store.canMove', store.canMove);
  }, [store.canMove]);

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
          content={<Progress2 />}
          title={'进度条2 ↓'}
          code={process2Path}
        />
      </Row>
      <Button onClick={handleSetValue}>重新设置值</Button>
      <Child data={data} />

      {/* <div
        style={{ width: '100%', height: '100vh' }}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
      > */}
      <div
        id="outerouter"
        className="process-line-outer"
        // onMouseUp={mouseUp}
        // onMouseMove={mouseMove}
      >
        <div
          style={{
            left: left + 'px',
          }}
          id="img"
          className="process-img"
          onMouseDown={mouseDown}
        >
          D
        </div>
        {/* </div> */}
      </div>
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

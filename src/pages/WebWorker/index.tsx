import { useSafeState } from 'ahooks';
import { Button, message } from 'antd';
import { Fragment, useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
    <Fragment>
      <Button onClick={handleSetValue}>重新设置值</Button>
      <Child data={data} />
    </Fragment>
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

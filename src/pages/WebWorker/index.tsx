import { observer } from 'mobx-react-lite';
import Code from '@/components/Code';
import { Button, message } from 'antd';
import { useSafeState } from 'ahooks';
import worker1 from './worker1';

export default observer(() => {
  const [worker, setWorker] = useSafeState<null | Worker>(null);

  if (worker == null) {
    const tempWorker = new Worker(worker1);
    tempWorker.onmessage = function (event) {
      console.log('Recevied message ' + event.data);
      doSomething(event.data);
    };
    function doSomething(vl: any) {
      console.log('doSomeThings', vl);
    }

    setWorker(tempWorker);
  }
  const handleCalc = () => {
    worker?.postMessage(
      JSON.stringify({
        name: 'BeJson',
        url: 'http://www.bejson.com',
        page: 88,
        isNonProfit: true,
        address: {
          street: '科技园路.',
          city: '江苏苏州',
          country: '中国',
        },
        links: [
          {
            name: 'Google',
            url: 'http://www.google.com',
          },
          {
            name: 'Baidu',
            url: 'http://www.baidu.com',
          },
          {
            name: 'SoSo',
            url: 'http://www.SoSo.com',
          },
        ],
      }),
    );
  };

  const handleDisposeWorker = () => {
    message.info('销毁！！');
    worker?.terminate();
    setWorker(null);
  };

  const [uiText, setUiText] = useSafeState('init');
  return (
    <>
      <h1>{uiText}</h1>
      <Button onClick={handleCalc}>很耗费时间的计算</Button>
      <Button onClick={handleDisposeWorker}>取消很耗费时间的计算</Button>
      <Button
        onClick={() => {
          setUiText(Math.random() + '');
        }}
      >
        改变UI样式
      </Button>
      <h2>浏览器UI线程</h2>
      <p>
        用于执行Javascript和更新用户界面的进程通常被称为浏览器UI线程，UI线程的工作基于一个简单的队列系统。浏览器会保存到队列中知道进程空闲。一旦空闲，队列中的下一个任务就被重新提取出来并运行。这些任务要么是运行js代码，要么执行UI更新，包括重绘和重排。
        也许一个简单的点击事件会导致一个或者多个任务被加入队列。
      </p>
      <Code lang="javascript">
        {`<html>
  <head>
    <title>test</title>
  </head>
  <body>
    <button onclick="handleClick()">Click me</button>
  </body>
  <script type="text/javascript">
    function handleClick(){
      var div = document.createELement('div');
      div.innerHTML = 'Clicked';
      document.body.appendChild(div);
    }
  </script>
</html>
// 当点击按钮的时候会触发UI线程来创建两个任务并添加到队列中。
// 任务1. 更新按钮的UI；任务2. 执行Js代码，包含handleClick中的代码，唯一被运行的就是这个方法和所有被他调用的方法。
// 这就意味着，UI线程执行的内容为：UI Update - Button ==> JavaScript - handleClick() ==> UI Update - <div> 
`}
      </Code>
      <h1>
        当所有UI线程任务都执行完毕，进程进入空闲状态
        <span style={{ color: '#333', fontSize: '12px' }}>
          (空闲是理想的，因为用户的所有操作都会引起UI更新)
        </span>
        如果用户在Js任务执行期间进行界面交互，不仅没有即时UI更新，甚至可能新的UI更新任务都不会创建并加入队列。也就是说js必须尽快结束。避免对用户造成不良影响。
      </h1>
    </>
  );
});

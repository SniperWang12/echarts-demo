import Code from '@/components/Code';
import { Fragment } from 'react';
import { Divider, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const Part2 = () => {
  return (
    <Fragment>
      <h1>接口描述</h1>
      <Paragraph>
        <blockquote>
          <h5>优点</h5>
          <ol>
            <li>具有自我描述性.</li>
            <li>接口有助于稳定不同的类之间的通信方式.</li>
            <li>很清楚的限制类型等，使用接口让调试变得更简单.</li>
          </ol>
          <h5>缺点</h5>
          <ol>
            <li>
              js没有提供对接口的内置支持,试图模仿其他语言的内置功能总会有一些风险.
            </li>
            <li>影响性能.</li>
          </ol>
        </blockquote>
        <pre>{`(function(){
  console.log('你好')
})();
`}</pre>
      </Paragraph>
      <h1>在Js中模仿接口</h1>
      <Paragraph>
        <blockquote>
          <h5>三种方法：</h5>
          <ol>
            <li>注释法</li>
            <li>属性检查法</li>
            <li>鸭式辨型法</li>
          </ol>
          <h5>用注释描述接口</h5>
          <p>
            就是直接的使用注释/* 这个方法包含的参数是xxx...
            */这种的相当于程序文档，依赖于程序员的自觉性不会提供错误信息，对测试以及调试没有帮助。
          </p>
          <h5>用属性检查模仿接口</h5>
          <p></p>
        </blockquote>
        <pre></pre>
      </Paragraph>
    </Fragment>
  );
};

export { Part2 };

import Code from '@/components/Code';
import { Collapse, Typography } from 'antd';
import { Fragment } from 'react';
const { Paragraph } = Typography;
const Part3 = () => {
  return (
    <Fragment>
      <Paragraph>
        <blockquote>
          为对象创建私有成员是面向对象中最基本和有用的特性之一。
          <br />
          通过将一个方法或属性设置成私有属性，可以让对象的实现细节对其他对象保密，并降低对象之间的耦合程度。
        </blockquote>
      </Paragraph>
      <h5>信息隐藏原则</h5>
      <p>信息隐藏是目的，封装是实现信息隐藏的技术。</p>
      <blockquote>
        封装可以被定义为对对象的内部数据表现形式和实现细节进行隐藏。js
        里面没有private属性，将使用闭包的概念创建只允许从对象内部访问的属性和方法，虽然很复杂也很费解，但是可以实现效果。
      </blockquote>
      <h6>接口扮演的角色</h6>
      <blockquote>
        一个理想的软件系统应该为所有类定义接口，这些类只提供实现的接口中规定的方法，任何其他的方法都留作自用。
      </blockquote>
      <h5>创建对象的基本模式</h5>
      <Collapse>
        <Collapse.Panel header="门户大开型" key="门户大开型">
          <h2 style={{ color: 'red' }}>
            但是这种方式仍然会有问题，虽然设置了get和Set方法，但是属性依旧是可以访问的，可以直接进行赋值，不调用set和get.
          </h2>
          <h3>
            唯一的弊端是无法保护内部数据，并且添加了很多get和set方法，添加了非必要的Js代码
          </h3>
          <Code lang="javascript">
            {`
// book(isbn, title, author);
let theHobbit = new Book('编号1111', 'TheHobbit', 'J.R.R.Tas');
theHobbit.display(); // 输出数据

// 门户大开型;
let Book = function (isbn, title, author) {
  if (isbn == undefined) throw new Error('Book constructor requires an isbn.');
  this.isbn = isbn;
  this.title = title || 'No Title Specified';
  this.author = author || 'No Author Specified';
};
Book.prototype.display = function () {
  // ...
};
Book.prototype = {
  checkIsbn: function (isbn) {
    if (isbn == undefined || typeof isbn != 'string') {
      return false;
    }
    isbn = isbn.replace(/-/, '');
    if (isbn.length != 10 && isbn.length != 13) {
      return false;
    }
    let sum = 0;
    if (isbn.length == 10) {
      // 等等
      return false;
    }
    return true; // 通过校验后才会返回true
  },
  display: function () {
    return this.author + '' + this.title + this.isbn;
  },
};

// 上述的代码完成了代码的校验，但是你没有办法控制别人会怎么调用这个代码。
// 因此需要使用setter 和getter方法来处理这个东西
let Publication = new Interface('Publication', [
  'getIsbn',
  'setIsbn',
  'getTitle',
  'setTitle',
  'getAuthor',
  'setAuthor',
  'display',
]); // 定义一个接口，来说明这个这个方法都有什么参数;
let Book = function (isbn, title, author) {
  // implements Publication;
  this.setIsbn(isbn);
  this.setAuthor(author);
  this.setTitle(title);
};
Book.prototype = {
  checkIsbn: function (isbn) {
    // 一系列判断。
    return true; // 或者false;
  },
  getIsbn: function () {
    return this.isbn;
  },
  setIsbn: function (isbn) {
    if (!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN');
    this.isbn = isbn;
  },
  setAuthor(author) {
    this.author = author || 'No author Specified';
  },
  getAuthor() {
    return this.author;
  },
  setTitle() {
    this.title = this.title || 'No title specified';
  },
  getTitle() {
    return this.title;
  },
  display() {
    return '输出想要的数据';
  },
};
`}
          </Code>
        </Collapse.Panel>
        <Collapse.Panel header="命名规范区别" key="命名规范区别">
          使用命名规范模式标明某个 属性/方法 是私有的
          <p style={{ color: 'red' }}>
            众所周知，_表示这个属性和方法是私有的。仅供对象内部使用。
          </p>
          <Code lang="javascript">{`_isbn: 私有, author: 公有
这个要求就是要求大家遵守约定，因为只是声明是假的，但是和公用属性无异。`}</Code>
        </Collapse.Panel>
        <Collapse.Panel
          header="作用域、嵌套函数和闭包"
          key="作用域、嵌套函数和闭包"
        >
          <p>
            <strong>
              原理，javascript中只有函数有作用域，也就是说函数内部声明的变量，函数外部无法访问，这为实现公有属性私有化提供可能性。
            </strong>
          </p>
          <h5>闭包的例子</h5>
          <Code lang="javascript">
            {`function foo(){
  let a = 10;
  function zoo(){
   a*=2;
   return a;
  }
  return zoo;
}
let baz = foo();
baz(); // 20
baz(); // 40
baz(); // 80
let asd = foo(); // 重新拷贝一个foo的作用域出来。
asd(); // 20`}
          </Code>
          <h4>闭包实现私有成员</h4>
          <Code lang="javascript">{`// 门户大开型好，好在哪里：内存中只会存在一份数据，但是不能做到私有化。但是闭包创建对象的话，创建一个就会产生一个作用域，在内存中就多一份副本，比较耗费内存，因此使用要谨慎。
如果创建的对象会派生出子类，就还是用 门户大开型 或者 声明式  `}</Code>
          <h5>单体和对象工厂</h5>
          <pre>对象和单体工厂是两个重要的设计模式来保护受保护的变量空间</pre>
        </Collapse.Panel>
      </Collapse>
    </Fragment>
  );
};

export default Part3;

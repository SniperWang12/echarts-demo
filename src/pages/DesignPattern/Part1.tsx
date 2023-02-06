import Code from '@/components/Code';
import { Fragment } from 'react';

const Part1 = () => {
  return (
    <Fragment>
      <h1>第一章 - 富有表现力的javaScript</h1>
      <p>我们实现有关于动画播放和结束的代码</p>
      <Code lang="javascript">
        {`/* 方法一👇🏻 */
/* 开始动画 */
function startAnimation(){...}
/* 结束动画 */
function stopAnimation(){...}

/* 方法二👇🏻 */
let Anim = function(){...}
Anim.property.start = function(){...}
Anim.property.end = function(){...}
/* Usage */
let myAnim = new Anim();
myAnim.start();
...
myAnim.end();

/* 方法三👇🏻 */
Function.prototype.method = function(name, fn){
  this.prototype[name] = fn;
}
let Anim = function(){...};
Anim.method('start', function(){...});
Anim.method('stop', function(){...});

// 进一步修改方法三，使其可以被链式调用，只需要让它返回this值即可。
Function.prototype.method = function(name, fn){
  this.prototype[name] = fn;
  return this;
}
let Anim = function(){...};
Anim.method('start',function(){...}).method('stop', function(){...});
`}
      </Code>
      <h2>函数是一等对象</h2>
      <p>
        它们可以存储在变量中，可以作为参数传给其他函数，可以作为返回值从其他函数传出，还可以在运行时构造。这种灵活的能力正是构建传统面向对象框架的基础。
      </p>
      <Code lang="javascript">
        {`// 闭包介绍
let baz;
(function(){
  let foo = 10;
  let zoo = 20;
  baz = function(){
    return foo + zoo;
  }
})();
baz();`}
      </Code>
      <h2>对象的易变性</h2>
      <p>可以对函数添加属性，可以对实例化对象进行修改</p>
      <Code lang="javascript">
        {`function Person(name,age){
  this.name = name;
  this.age = age;
}
Person.prototype = {
  getName: function(){
    return this.name;
  },
  getAge: function(){
    return this.age;
  }
}
Instantiate the class;
// 这里例子里面，类的实例化对象已经生成了，但是对alice依旧可以获得getGreeting()这个方法，并且，alice还有一个单独的displayGreeting方法，其他的实例化对象没有。
let alice = new Person('Alice', 29);
Person.prototype.getGreeting = function(){
  return 'Hi' + this.getName() + '!';
}
alice.displayGreeting = function(){
  alert(this.getGreeting());
}
`}
      </Code>
      <p>
        还有内省的概念，可以在运行时检查对象所具有的属性和方法，还可以使用这种信息动态实例化类和执行其方法，《反射》。甚至不需要在开发的时候知道他们的名称。
      </p>
    </Fragment>
  );
};

export default Part1;

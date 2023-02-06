// // Function.prototype['method'] = function (name, fn) {
// //   this.prototype[name] = fn;
// // };
// // let Anim = function () {};
// // Anim.method('start', function () {
// //   console.log('start Animation');
// // });
// // Anim.method('stop', function () {
// //   console.log('stop Animation');
// // });
// // let myAnim = new Anim();
// // myAnim.start();
// // myAnim.stop();

// // Interfaces
// let Composite = new Interface('Composite', ['add', 'remove', 'getChild']);
// let FormItem = new Interface('FormItem', ['save']);

// // CompositeForm class
// let CompositeForm = function (id, method, action) {
//   // implements Composite, FormItem
// };

// function addForm(formInstance) {
//   Interface.ensureImplements(formInstance, Composite, FormItem);
// }

// // book(isbn, title, author);
// let theHobbit = new Book('编号1111', 'TheHobbit', 'J.R.R.Tas');
// theHobbit.display(); // 输出数据

// // 门户大开型;
// let Book = function (isbn, title, author) {
//   if (isbn == undefined) throw new Error('Book constructor requires an isbn.');
//   this.isbn = isbn;
//   this.title = title || 'No Title Specified';
//   this.author = author || 'No Author Specified';
// };
// Book.prototype.display = function () {
//   // ...
// };
// Book.prototype = {
//   checkIsbn: function (isbn) {
//     if (isbn == undefined || typeof isbn != 'string') {
//       return false;
//     }
//     isbn = isbn.replace(/-/, '');
//     if (isbn.length != 10 && isbn.length != 13) {
//       return false;
//     }
//     let sum = 0;
//     if (isbn.length == 10) {
//       // 等等
//       return false;
//     }
//     return true; // 通过校验后才会返回true
//   },
//   display: function () {
//     return this.author + '' + this.title + this.isbn;
//   },
// };
// // 上述的代码完成了代码的校验，但是你没有办法控制别人会怎么调用这个代码。
// // 因此需要使用setter 和getter方法来处理这个东西
// let Publication = new Interface('Publication', [
//   'getIsbn',
//   'setIsbn',
//   'getTitle',
//   'setTitle',
//   'getAuthor',
//   'setAuthor',
//   'display',
// ]); // 定义一个接口，来说明这个这个方法都有什么参数;
// let Book = function (isbn, title, author) {
//   // implements Publication;
//   this.setIsbn(isbn);
//   this.setAuthor(author);
//   this.setTitle(title);
// };
// Book.prototype = {
//   checkIsbn: function (isbn) {
//     // 一系列判断。
//     return true; // 或者false;
//   },
//   getIsbn: function () {
//     return this.isbn;
//   },
//   setIsbn: function (isbn) {
//     if (!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN');
//     this.isbn = isbn;
//   },
//   setAuthor(author) {
//     this.author = author || 'No author Specified';
//   },
//   getAuthor() {
//     return this.author;
//   },
//   setTitle() {
//     this.title = this.title || 'No title specified';
//   },
//   getTitle() {
//     return this.title;
//   },
//   display() {
//     return '输出想要的数据';
//   },
// };
// //  常量
// var Class = (() => {
//   // private static attributes.
//   var constants = {
//     UPPER_BOUND: 100,
//     LOWER_BOUND: -100,
//   };
//   // Constructor
//   var ctor = function (constructorArgument) {};
//   // Privileged static method.
//   ctor.getConstant = function (name) {
//     return constants[name];
//   };
//   // Return the constructor.
//   return ctor;
// })();
// let asd = Class.getConstant('UPPER_BOUND');
// console.log('asd', Class);

// const ASD = {
//   a: {
//     a1: 'qweqwe',
//   },
//   b: 2,
// };
// Object.freeze(ASD);
// Object.seal(ASD);
// Object.preventExtensions(ASD);
// ASD.a.a1 = { a1222: 123123 };
// console.log(ASD);

// const CONSTANT = (function () {
//   const constants = {
//     ASD: 1,
//     GRE: {
//       yuedu: 122,
//       grade: 300,
//     },
//   };
//   Object.freeze(constants);
//   Object.seal(constants);
//   var ctor = function () {};
//   ctor.getCONSTANT = (name) => {
//     return constants[name];
//   };
//   return ctor;
// })();
// CONSTANT.getCONSTANT('GRE').grade = 22;
// let asdaa = CONSTANT.getCONSTANT('GRE');
// console.log(asdaa);

// const CONST = {};
// Object.defineProperty(CONST, 'A', {
//   value: Object.defineProperty({}, 'A1', {
//     value: { name: '我是Aのname' },
//     enumerable: true,
//     configurable: false,
//     writable: false,
//   }),
//   enumerable: true,
// });
// CONST.A.A2 = '你好';
// CONST.A.A3 = '你好';
// console.log(CONST);

// let person = {
//   name_: '',
//   get name() {
//     console.log('get name 调用');
//     return this.name_;
//   },
//   set name(name) {
//     console.log('set name调用');
//     this.name_ = name;
//   },
//   sayName() {
//     console.log(`My name is ${this.name_}`);
//   },
// };
// person.name = '王斌';
// console.log('as', person.name_);
// person.sayName();

/**
 * 创建对象的几种模式
 */
// 1. 工厂模式
// function createPerson(name, age, sex) {
//   let o = new Object();
//   o.name = name;
//   o.age = age;
//   o.sex = sex;
//   o.getInfo = () => {
//     return o.name + o.sex + o.age;
//   };
//   return o;
// }
// let person1 = createPerson('王斌1', '12', ' 男 ');
// let person2 = createPerson('王斌2', '21', ' 女 ');
// console.log(person1.getInfo());
// console.log(person2.getInfo());

// 构造函数模式
// > 没有显式地创建对象。
// > 属性和方法直接赋值给了 this。没有 return。
// function Person(name, sex, age) {
//   let age1 = age;
//   this.name = name;
//   this.sex = sex;
//   this.getInfo = function () {
//     console.log(`姓名:${this.name},性别:${this.sex},年龄：${age1}`);
//   };
// }
// let person1 = new Person('王斌', '男', '22');
// let person2 = new Person('王泽', '女', '18');
// person1.getInfo();
// person2.getInfo();
// console.log(person1.getInfo === person2.getInfo); // 每次都会开辟新的内存空间存放这个Function对象，不合适，因此产生原型模式

// 原型模式
// function Person() {}
// Person.prototype.name = '王斌';
// Person.prototype.age = 18;
// Person.prototype.sex = '男';
// Person.prototype.getName = function () {
//   console.log(`姓名：${this.name}`);
// };
// let person1 = new Person();
// let person2 = new Person();
// person1.getName();
// person2.getName();
// console.log(person1.getName === person2.getName);

// 理解原型链
function Person() {}

console.log('1', typeof Person.prototype); //Object;
console.log('2', Person.prototype); // {};
console.log('3', Person.prototype.constructor === Person); // true;
console.log('4', Person.prototype.__proto__ === Object.prototype); // true;
// 正常的原型链都会终止于Object的原型对象
console.log('5', Person.prototype.__proto__.constructor === Object); // true;
console.log('6', Person.prototype.__proto__.__proto__ === null); // true;
console.log('7', Person.prototype.__proto__);
//

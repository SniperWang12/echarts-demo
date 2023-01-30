// function prop(obj, key) {
//   return obj[key];
// }
// // 1
function prop1(obj: {}, key: string): any {
  return obj[key];
}

// 因为我们不知道Obj的类型，因此返回值的类型也没办法确定；
// 假设我们调用一下;
const todo = {
  id: 1,
  text: '',
  due: new Date(),
};
const todo2 = {
  t: 'JJJ',
};
prop1(todo, 'id'); //这样的返回值依旧是any，尽管你知道返回类型是什么;

interface Todo {
  id: number;
  text: string;
  due: Date;
}

type TodoKeys = keyof Todo; // 'id' | 'text' | 'due'

const todo1 = {
  id: 1,
  text: '',
  due: new Date(),
};
function prop4(obj: Todo, key: keyof Todo) {
  return obj[key];
}

let id = prop4(todo1, 'id');

function prop3<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const asd = prop3(todo1, 'id');

type A1 = 'x' extends 'x' ? string : number; // string
type A2 = 'x' | 'y' extends 'x' ? string : number; // number

type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'>; // string | number !!!!! description：分配条件类型
// 分配条件类型👇🏻
/**
 * 对于使用extends关键字的条件类型《上面的三元表达式类型》，如果extends 前面的参数是一个泛型类型，当传入该参数是
 * 联合类型，则使用分配律计算最终结果。
 * 分配律：将联合类型的联合项拆成单项，分别代入条件类型，然后将每个单项代入得到的结果再联合起来，得到最终的判断结果。
 */

// 特殊的never, never类型是所有类型的子类型。

// 防止条件判断中的分配
type P1<T> = [T] extends ['x'] ? string : number;
type A11 = P1<'x' | 'y'>; // number
type A22 = P1<never>; // string

/*
 * @Author: harvey_li
 * @Date: 2022-06-16 20:49:46
 * @LastEditors: harvey_li
 * @LastEditTime: 2022-08-26 15:10:35
 * @FilePath: \frontend_pre\src\utils\work.ts
 * @Description:
 */

const workercode = () => {
  self.onmessage = (e) => {
    // 创建layer 以及加载 加载结果文件
    console.log('接收到消息', JSON.parse(e.data));
    let i = 0;
    setInterval(() => {
      i++;
      self.postMessage('i=' + i);
    }, 1000);
  };
};

let code = workercode.toString();
code = code.substring(code.indexOf('{') + 1, code.lastIndexOf('}'));

const blob = new Blob([code], { type: 'application/javascript' });
const worker_script = URL.createObjectURL(blob);

export default worker_script;

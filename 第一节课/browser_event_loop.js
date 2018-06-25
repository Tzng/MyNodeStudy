console.log('脚本开始');

setTimeout(() => {
  console.log('进入setTimeout1回调函数');
}, 0);

//这个是不会直接运行运行的，需要在主线程执行完成之后，再去查任务队列来进行运行，下面的会被放到宏任务队列
setTimeout(() => {
  console.log('进入setTimeout2回调函数');
  Promise.resolve().then(() => {
    console.log('进入promise2回调函数');
    Promise.resolve().then(() => {
      console.log('进入promise3回调函数');
    });
    console.log('promise2回调函数结束');
  });
  setTimeout(() => console.log('进入setTimeout3回调函数'), 0);
}, 0);

//当遇到Promise的回调时，这个会被放到微任务队列中去
Promise.resolve().then(() => {
  console.log('进入promise1回调函数');
});

console.log('脚本结束');

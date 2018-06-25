const flag = false;
let p1 = new Promise((resolve, reject) => {
  console.log('开始异步');
  throw 'ee';
  setTimeout(() => {
    flag ? resolve('成功') : reject('失败');
  }, 1000);
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", url);
  // xhr.onload = () => resolve(xhr.responseText);
  // xhr.onerror = () => reject(xhr.statusText);
  // xhr.send();
});

p1.then(
  result => {
    console.log('success1: ', result);
    // throw '报错啦';
    return '成功回调函数的结果';
  },
  result => {
    console.log('fail1: ', result);
    return '失败回调函数的结果';
  }
)
  .catch(reason => {
    console.log('error1:', reason);
    return '异常处理结果';
  })
  .then(
    result => {
      console.log('success2: ', result);
    },
    result => {
      console.log('fail2: ', result);
    }
  )
  .catch(reason => {
    console.log('error2:', reason);
  });

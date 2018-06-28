// 异步编程解决方案
var fs = require('fs');

// 回调函数
// fs.readFile('./readme.txt', 'utf8', function(err, data) {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
//   fs.readFile('./readme.txt', 'utf8', function(err, data) {
//     if (err) {
//       throw err;
//     }
//     console.log(data);
//   });
// });

// 回调地狱

// Promise

var read = function(filename) {
  var promise = new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
  return promise;
};

// read('./readme.txt')
//   .then(
//     data => {
//       console.log(data);
//       return read('./readme.txt');
//     },
//     err => {
//       console.log('错误：', err);
//     }
//   )
//   .then(
//     data => {
//       console.log(data);
//     },
//     err => {
//       console.log('错误：', err);
//     }
//   );

// async await
var asyncRead = async function () {
  var file1 = await read('./readme.txt');
  var file2 = await read('./readme.txt');
  console.log(file1);
  console.log(file2);
}

asyncRead();

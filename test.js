console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
setImmediate(() => console.log('immediate'));
setTimeout(() => console.log('settimeout'),0);
console.log('scheduled');
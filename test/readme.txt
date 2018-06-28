大纲
1. 浏览器中的事件循环

a. JS线程读取并执行JS代码
b. 执行JS代码的过程中，指定异步的操作给对应的线程处理
c. 异步线程处理完毕之后，讲对应的回调函数推入任务队列
d. JS线程执行完毕之后，查询任务队列，取一个任务推入JS线程运行
e. 重复b-d

macrotask queue宏任务队列(有多个)：Ajax请求、绑定事件的回调函数、定时器的回调函数...
microtask queue微任务队列(只有一个)：promises、Object.observe、MutationObserver...

脚本开始
脚本结束
进入promise1回调函数
进入setTimeout1回调函数
进入setTimeout2回调函数
进入promise2回调函数
promise2回调函数结束
进入promise3回调函数
进入setTimeout3回调函数

脚本执行完毕时
宏任务队列 [st1,st2]
微任务队列 [p1]

执行微任务队列p1
宏任务队列 [st1,st2]
微任务队列 []

执行宏任务队列st1
宏任务队列 [st2]
微任务队列 []

执行宏任务队列st2
宏任务队列 [st3]
微任务队列 [p2]

执行微任务队列p2、p3
宏任务队列 [st3]
微任务队列 []

执行宏任务队列st3
宏任务队列 []
微任务队列 []

执行流程：
一、查询宏任务队列，取一个执行，把脚本执行当作一个宏任务来看待
二、查询微任务队列，全部执行完毕，包括当前微任务队列执行时产生的新的微任务

2. Node中的事件循环

定时器阶段：setTimeout/setInterval
等待回调阶段：执行某些系统操作的回调，TCP错误处理
闲置阶段、准备阶段：只在内部使用
轮询阶段：I/O 回调
检查阶段：setImmediate
关闭回调阶段：关闭类的回调，socket.on('close',...)

注意事项：process.nextTick > promise
每个阶段都有自己的先进先出队列，当事件循环进入到该阶段，就会执行指定的队列，直到队列被耗尽，或者达到回调的最大数量
在进入到每一个阶段之前，都会执行NextTick队列和微任务队列，前者优先级更高

3. 避免阻塞Node => 高并发(性能)，DOS攻击(安全)

Node中的线程
JS引擎的线程：启动阶段，解析模块，注册事件回调，进入事件循环(执行事件回调，非阻塞的异步请求)
libuv的线程池(少量线程)：操作系统不提供非阻塞版本的I/O操作(DNS)，CPU密集型的任务

确保回调函数的时间复杂度为常数

可能阻塞Node的情况
糟糕的正则表达式： (a+)、(a|a)、(a.*)\1 => safe-regex
复杂JSON对象的操作 => JSONStream
复杂计算 => Child Process/Cluster

4. 异步编程方案

a. 先执行构造函数内的同步代码
b. 支持链式调用，而且then和catch返回的是全新的promise对象
c. catch只会在异步操作失败或者异常，并且前面流程未定义reject回调函数的时候触发

作业1：Node中process.nextTick、promise、setTimeout、setImmediate的优先级
作业2：预习express的知识，搭建一个简单的服务器并成功运行
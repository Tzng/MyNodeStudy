const express = require('express');
const router = express.Router();

router.use((req,res) => {
    console.log('请求的事件：' + new Date().toDateString);
    next();
})

router.route('/').get((req,res) => {
    res.send('来自user模块的get');
}).post((req,res) => {
    res.send('来自user模块的post');
})

module.exports = router;
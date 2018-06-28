const request = require('request');
const cheerio = require('cheerio');

const fs = require('fs');

var url = "https://tieba.baidu.com/f?kw=%E4%B8%96%E7%95%8C%E6%9D%AF&ie=utf-8&pn=";

function myRequest(url,callback) {
    var options = {
        url: url,
        // 判断范围类型
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3371.0 Safari/537.36'
    }
    request(options, callback)
}

function getcontent(url) {
    url = url + 0;
    myRequest(url,function (error,response,body) {
        //var content = JSON.parse(body)
        //fs.appendFile('2824ajax.text',content.info);
        //对dom结构进行操作
        var $ = cheerio.load(body);
        var content = $('.threadlist_title.pull_left.j_th_tit');
        console.log(content.text());     
    })
}

getcontent(url);
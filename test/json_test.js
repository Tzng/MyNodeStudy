var obj = { a: 1 };
var len = 20;

var before, res, took, str;

for (var i = 0; i < len; i++) {
  obj = { obj1: obj, obj2: obj };
}

before = process.hrtime();
str = JSON.stringify(obj);
took = process.hrtime(before);
console.log('JSON.stringify took ' + took);//1,154349355

before = process.hrtime();
res = str.indexOf('nomatch');
took = process.hrtime(before);
console.log('Pure indexof took ' + took);//0,64328285

before = process.hrtime();
res = JSON.parse(str);
took = process.hrtime(before);
console.log('JSON.parse took ' + took);//1,825796840

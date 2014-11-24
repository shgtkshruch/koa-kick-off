var koa = require('koa');
var app = koa();
var port = process.argv[2];

app.keys = ['view'];

app.use(function *(next) {
  var n = ~~this.cookies.get('view', {signed: true}) + 1;
  this.cookies.set('view', n, {signed: true});
  this.body = n + ' views';
});

app.listen(port);

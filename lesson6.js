var koa = require('koa');
var app = koa();
var port = process.argv[2];

app.use(responseTime());
app.use(upperCase());

app.use(function *() {
  this.body = 'hello koa';
});

function responseTime () {
  return function *(next) {
    var start = new Date();
    yield next;
    var time = new Date() - start;
    this.set('X-Response-Time', time);
  };
}

function upperCase() {
  return function *(next) {
    yield next;
    this.body = this.body.toUpperCase();
  };
}

app.listen(port);

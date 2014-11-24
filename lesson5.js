var koa = require('koa');
var app = koa();
var port = process.argv[2];

app.use(function *() {
  this.body = this.request.is('json') ? {message: 'hi!'} : 'ok';
});

app.listen(port);




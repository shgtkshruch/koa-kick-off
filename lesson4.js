var fs = require('fs');
var koa = require('koa');
var app = koa();
var port = process.argv[2];
var file = process.argv[3];

app.use(function *(next) {
  if (this.path !== '/json') return yield next;
  this.body = {foo: 'bar'};
});

app.use(function *(next) {
  if (this.path !== '/stream') return yield next;
  this.body = fs.createReadStream(file);
});

app.listen(port);



var koa = require('koa');
var session = require('koa-session');
var port = process.argv[2];

var app = koa();
app.keys = ['secret', 'keys'];

app.use(session());

app.use(function *(next) {
  var n = ~~this.session.view + 1;
  this.session.view = n;
  this.body = n + ' views';
});

app.listen(port);

var koa = require('koa');
var app = koa();
var port = process.argv[2];

var views = require('co-views');
var render = views(__dirname, {
  ext: 'ejs'
});

var user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(function *(next) {
  this.body = yield render('lesson10', {user: user});
});

app.listen(port);


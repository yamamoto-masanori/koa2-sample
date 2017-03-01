# koa2-sample

インストール
```
npm install
export NODE_LOCAL=local
NODE_CONFIG_DIR=app/config
```
ファイル修正
node_module/koa2-mysql/dist/index.js
Line:72に下記を追記
```
                        ctx.execute = function (query) {
                            return execute(query, db);
                        };
```
node_module/koa2-mysql/models/mysql.js
module.exports = function() {より上の記述を下記に変更
```
var config = require('config');
var wrapper = require('co-mysql'),
    mysql = require('mysql'),
    co = require('co');

var options = {
    host:  config.database.host,
    port: config.database.port,
    user: config.database.username,
    password: config.database.password,
    database: config.database.database
};
```

導入記事
```
https://mseeeen.msen.jp/koa-js-v2-beginning/
http://qiita.com/satzz/items/6e154dbcf896440b6aec
```

公式・サンプル
```
http://koajs.com/
https://github.com/koajs/koa/blob/master/docs/guide.md
https://github.com/koajs/examples
```

内部動作
```
http://kotatu.org/blog/2013/12/31/experiments-with-koa-and-javascript-generators-ja/
https://havelog.ayumusato.com/develop/javascript/e583-yield_co_thunkify.html
```
middlewareの作り方
```
http://yosuke-furukawa.hatenablog.com/entry/2013/12/31/135246
```

# A Light Node.js MVC Framework

> create by junyu

-------------------------
## How To Use It .
* git clone git@github.com:ImHype/node_server.git
* move the node_modules into your node_modules
* setting in your app 

### 引入 jyframe
```javascript
var myfw = require("jyframe");
var App = myfw.app;
var server = new App();
```

### 使用中间件
```javascript
server.use(myfw.staticServer('./public/'));
server.use(myfw.sessionMid);
server.use(myfw.getParse);
server.use(myfw.postParse);
server.use(myfw.send);
server.use(myfw.render);
```
### 定义路由
```javascript
server.get('/',function(req,res){
  /** Your Code **/
});
server.post('/:id/:name',function(req,res){
  /** Your Code **/
})
```
### 监听端口
```javascript
var port = 80;
server.listen(port);
```
## Note

* 中间件系统
* query解析
* post解析和文件上传
* 路由构造
* session及cookie写入
* 静态文件服务
* 请求响应
* 模板引擎（待完善）

## License

© Junyu Xu

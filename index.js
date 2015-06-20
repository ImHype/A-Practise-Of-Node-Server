var myfw = require("jyframe");
var App = myfw.app;
var staticServer = myfw.staticServer;
var query = myfw.query;
var server = new App();
server.use(staticServer('./public/'));
server.use(query);
server.get('/:id/:name',function(req,res,next){
	console.log(req.query)
	res.end("index");
});
var port = 80;
server.listen(port);
console.log("服务器已经建立在 http://0.0.0:"+port+"上面");
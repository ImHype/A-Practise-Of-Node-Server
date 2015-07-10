var myfw = require("jyframe");
var App = myfw.app;
var staticServer = myfw.staticServer;
var query = myfw.query;
var server = new App();
server.use(staticServer('./public/'));
server.use(query);
server.use(myfw.sessionMid);
server.get('/index',function(req,res){
	res.end(req.session.name);
})
server.get('/:id/:name',function(req,res,next){
	req.session.name="nihao";
	console.log(req.session.name)
	console.log(req.query);

	res.end("index");
});
var port = 80;
server.listen(port);
console.log("服务器已经建立在 http://0.0.0:"+port+"上面");
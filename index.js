var myfw = require("jyframe");
var App = myfw.app;
var server = new App();
var fs = require("fs");
server.use(myfw.staticServer('./public/'));
server.use(myfw.sessionMid);
server.use(myfw.getParse);
server.use(myfw.postParse);
server.use(myfw.send);
server.use(myfw.render);
global.dirname = __dirname;

/**
server.get('/',function(req,res){
	res.end(req.query.toString());
});
server.get('/test',function(req,res){
	res.render("index",{
		"nihao":"nihao"
	});
})
// 上传组件
server.post('/post',function(req,res){
	res.end("its a post request");
	var data = req.files.file;
	for (var i = 0; i < data.length; i++) {
		fs.writeFile("./upload/"+new Date().getTime() + Math.floor(100 * Math.random())+data[i].filename,data[i],function(err){
			if(!err){
				console.log("ok");
			}
		});
	};
})
server.get('/:id/:name',function(req,res,next){
	req.session.name="nihao";
	console.log(req.session.name)
	console.log(req.query);
	res.end("index");
});
**/
var port = 80;
server.listen(port);
console.log("服务器已经建立在 http://0.0.0:"+port+"上面");
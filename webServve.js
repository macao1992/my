var http=require("http")
var fs=require("fs")
var server=http.createServer();
console.log(server)
server.listen(80);
server.on("request",(req,res)=>{	
	if(req.url=="/index"){
		console.log("接收到一个首页请求")
		fs.readFile("./html/index.html",(err,data)=>{
			if(err){
				console.log("错误")
			}else{
				res.end(data);
			}
		})
	}else if(req.url=="/news"){
		console.log("接受到一个新闻请求")
		fs.readFile("./html/news.html",(err,data)=>{
			if(err){
				console.log("错误")
			}else{
				res.end(data);
			}
		})
	}else if(req.url=="/about"){
		console.log("接受到一个关于请求")
		fs.readFile("./html/index.html",(err,data)=>{
			if(err){
				console.log("错误")
			}else{
				res.end(data);
			}
		})
	}else if(req.url=="/pro"){
		console.log("接受到一个产品请求")
		fs.readFile("./html/pro.html",(err,data)=>{
			if(err){
				console.log("错误")
			}else{
				res.end(data);
			}
		})
	}else{
		res.statusCode==404
		fs.readFile("./html/404.html",(err,data)=>{
			if(err){
				console.log("错误")
			}else{
				res.end(data);
			}
		})
	}
})


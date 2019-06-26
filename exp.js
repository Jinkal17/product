var express=require('express')
var app=express();

var productController=function(req,resp)
{
	console.log("invoking rest api for product");
	var products=[
	{id:1,name:"bottle",price:40,color:"pink"},
	{id:2,name:"glass",price:80,color:"red"},
	{id:3,name:"bucket",price:40,color:"pink"},
];
resp.send(products);	
};

app.get('/products',productController);
var server=app.listen(8000,function()
{
	var host=server.address().address
	var port=server.address().port
})
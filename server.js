const express = require('express');
const path = require('path');

// create a instance of express
const app = express();

//listen to the instance on the default port of express 
const port = process.env.PORT || 3000;

//let expres know where to serve the static files from
app.use(express.static(path.join(__dirname,'./static')));

// index page will be loaded. 
app.get('/',(request,response)=>{
	console.log('index page loaded');
	response.sendFile(path.join(__dirname,'./index.html'));
});

//one has to listen to the port so that node knows 
app.listen(port,()=>{
	console.log(`Express is listeningn on port ${port}!`);
});
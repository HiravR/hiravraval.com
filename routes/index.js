const express = require('express');

const  router = express.Router();

const aboutMeRoute = require('./aboutme');
const contactMeRoute = require('./contactme');

//import fs from 'fs'

//by doing this we can pass arguments from our application down to the route as function parameters and we will use that later
module.exports = () =>{
	router.get('/',(request,response,next)=>{
		
		try{

			return response.render('layouts/index',{pageTitle:"Portfolio - Hirav Raval"});
		//response.sendFile(path.join(__dirname,'./index.html')); //we can send the html another below too.
		/*fs.readFile('./index.html',(err,data)=>{
		response.send(data.toString());
		})*/ 	
		}catch(err){
			return next(err);
		}
		
	});

	router.use('/aboutme',aboutMeRoute());
	router.use('/contactme', contactMeRoute());
	return router;
};
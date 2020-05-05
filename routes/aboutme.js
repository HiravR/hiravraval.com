const express = require('express');

const router = express.Router();


module.exports = ()=>{
	router.get('/',(request,response,next)=>{
		try{
			return response.render('layouts/aboutme',{pageTitle:'About Me - Hirav Raval'});
		}catch(err){
			return next(err);
		}
	});
	return router;
}
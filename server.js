const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const routes= require('./routes');
const createError = require('http-errors');

// create a instance of express
const app = express();

//listen to the instance on the default port of express 
const port = process.env.PORT || 3000;

//this makes expressjs trust cookier that are pass through reverse proxy.
app.set('trust proxy',1);

app.use(cookieSession({
	name:'session',
	keys: ['hello123','hello456']

}));

//Let us set the view engine for the template rendering. No need ot declare ejs node will automatically find it.
app.set("view engine","ejs");
//let the node konw where to get the templates from
app.set("views",path.join(__dirname,"./views"));

//let expres know where to serve the static files from and use express.static as middleware.
app.use(express.static(path.join(__dirname,'./static')));


app.use('/',routes());
//one has to listen to the port so that node knows 

app.use((request,response,next)=>{
	return next(createError(404,'The page you are looking for was not found.'));
});
app.use((err,request,response,next)=>{
	response.locals.message = err.message;
	const status = err.status|| 500;
	response.locals.status = status;
	response.status(status);
	console.error(err);
	response.render('error');
});
app.listen(port,()=>{
	console.log(`Express is listeningn on port ${port}! Yay!` );
});
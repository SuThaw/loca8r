module.exports.about = function(req,res,next){
	return res.render('index',{title:'About '});
};
/*----------  GET Home Page  ----------*/

module.exports.index = function(req,res,next){
	res.render('index',{'title':'loca8r'});
};

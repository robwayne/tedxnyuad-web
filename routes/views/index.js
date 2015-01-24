var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.

    	locals.panoramaText = '<h4>Jovan Jovancevic</h4>My talk is about raising awareness of and teach training methods connected to playing blindfold chess.';
    
	// Render the view
	view.render('index');
	
};

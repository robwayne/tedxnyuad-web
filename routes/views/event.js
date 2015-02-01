var keystone = require('keystone');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'event';
    
    locals.content = [{ template:'focus',
                        macro:'standard',
                        arguments:{ text:'<p>At TEDxNYUAD we believe in opening new horizons and broadening our perspectives. As we dream to inspire people to make an impact, this year we have assembled a host of speakers who question how we view the world. We want to take our audience on a journey of the unconventional.</p><p>For TEDxNYUAD 2015 we will be exploring the theme <span style="color:red">Question.</span>Our speakers will be sharing their untold stories as they redefine the concepts of home and memory, provide a fresh look on traditions and videogaming, change the way we see – or don’t see – chess, and show the true power of youth.',
                                    theme:'Question.'
                        }
                      },
                      { template:'panorama',
                        macro:'standard',
                        arguments:{src:'venue.jpg',
                                   text:'<h4>Venue</h4>The 2015 TEDxNYUAD will take place in the Conference Center, located in the A6 building on the east side of NYUAD\'s Saadiyat Island campus.  The Conference Center contains black leather chairs, ample lighting, and excellent acoustics, ensuring that those attending will have a comfortable and educational experience.'
                                  }
                      },
                      { template:'standard',
                        macro:'image',
                        arguments:{src:'images/location.jpg',
                                   title:'Address',
                                   text:'<p>The address of the campus at which the TEDxNYUAD will be held is: </p><ul><li><p>New York University Abu Dhabi (NYUAD)</p></li><li><p>Saadiyat Island</p></li><li><p>P.O. Box 129188</p></li><li><p>Abu Dhabi, UAE</p></li></ul><p>See the map for directions. Upon arrival look follow the signs to the Conference Center. In case you come by car, make sure to get a parking ticket.</p>'
                                  }
                      } 
                     ];
    
    //Required for newsletter signup
    locals.formData = req.body || {};
    view.on('post', { action: 'newsletter' }, function(next) {
		var newNewsletter = new Newsletter.model(),
			updater = newNewsletter.getUpdateHandler(req);

        updater.process(req.body, {
			flashErrors: true,
			fields: 'email',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.newsletterSignup = true;
			}
			next();
		});
	});
    //--------------
    
	// Render the view
	view.render('event');
	
};

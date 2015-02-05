var keystone = require('keystone');
    
exports = module.exports = function(req,res){
    var view = new keystone.View(req, res),
		locals = res.locals;
    
    locals.section = 'faq';
    locals.content = {title:'Frequently Asked Questions',
                      text:'<p>Below you find a compiled list of the most asked questions. The list is not exhaustive, so feel free to <a href="contact">contact us</a> any time and we will get back to you as soon as possible.</p>',
                      questions:[{id:'1',
                                title:'When will TEDxNYUAD 2015 take place?',
                                text:'<p>Sunday, April 19, 2015 at 6pm.</p>'},
                               {id:'2',
                                title:'Where will it happen?',
                                text:'<p>TEDxNYUAD’s live event is taking place in the Conference Center on New York University Abu Dhabi\'s campus.</p><p>We will also be hosting additional video-streaming parties in the East and West forum in the main Campus Center.</p>'},
                               {id:'3',
                                title:'What is the difference between the live event and the video-streaming events?',
                                text:'<p>The live event will be where the 12 speakers will give their talks to a selected audience of 100 people. This event will also be concurrently video-streamed to two additional locations on Campus for the general public and other NYUAD students, faculty and staff to watch.</p>'},
                                {id:'4',
                                title:'Why are only 100 people invited to the live event?',
                                text:'<p>According to TEDx rules, the live event cannot have more than 100 audience members and therefore the event will be by invitation only, except from a public ticket lottery.</p>'},
                                {id:'5',
                                title:'Why are there three locations?',
                                text:'<p>We want NYUAD students, faculty and staff, as well as the Abu Dhabi community to be able to watch the event and so we have designed two video-streaming  events (also limited to 100 audience members each) that will take place in East and West fora in the Campus Center.</p>'},
                                {id:'6',
                                title:'How can I secure a ticket to the event(s)?',
                                text:'<p>We will be releasing more information about how to attend TEDxNYUAD soon. Please stay tuned by following us on Twitter and Facebook.</p><p>There will be three events happening simultaneously on campus and three ways to secure your ticket:</p><h5>1) By Invitation</h5><p>In order to attend the live event, you will need a personal invitation from the TEDxNYUAD organizers. Recipients must RSVP in order to secure their ticket. You will then be provided an access pass to attend the event on the day.</p><h5>2) Ticket Lottery</h5><p>We have reserved additional tickets for the live event for the public and the NYUAD community to win. Register online to add your name to the lottery (will soon be possible). Ticket recipients will be notified and asked to confirm their attendance in advance.</p><h5>3) By RSVP to video-streaming events</h5><p>There will be two video-streaming events on campus. Anyone You can RSVP to these video-streaming events (link will be provided soon).</p>'},
                                {id:'7',
                                title:'Does it cost anything to attend TEDxNYUAD?',
                                text:'<p>No. The event is completely free of charge.</p>'},
                                {id:'8',
                                title:'I am abroad, are there any ways of watching the event live?',
                                text:'<p>TEDxNYUAD will be streamed at selected NYU sites around the world. If you are currently at a site that is not hosting a live-stream event, and would like to help host one yourself, please <a href="/contact">contact us</a>.</p>'},
                                {id:'9',
                                title:'Who is speaking at the event?',
                                text:'<p>We have selected 12 unique speakers who are all questioning our conventional views of the world. You can read more about them under the <a href="/speakers">speakers</a> tab.</p>'},
                                {id:'10',
                                title:'How did you select the speakers?',
                                text:'<p>We requested stories and ideas from the NYUAD community from which we received about 60 amazing stories. Of those we invited 28 speakers to a “Pitch session” where each speaker presented their talks for 3 minutes.</p><p>Of the 28 speakers at the Pitch session, a committee of TEDxNYUAD organizers and NYUAD staff selected a composition of 12 speakers that makes up the 2015 speakers team.</p>'},
                                {id:'11',
                                title:'What is the theme for this year\'s event?',
                                text:'<p>For TEDxNYUAD 2015 we will be exploring the theme <span style="color:red">Question.</span></p><p>At TEDxNYUAD we believe in opening new horizons and broadening our perspectives. As we dream to inspire people to make an impact, this year we have assembled a host of speakers who question how we view the world. We want to take our audience on a journey of the unconventional.</p><p>Our speakers will be sharing their untold stories as they redefine the concepts of home and memory, provide a fresh look on traditions and videogaming, change the way we see (or don’t see) chess, and show the true power of youth.</p>'}
                                ]
                     };
    
    // Render the view
	view.render('faq');
}




                                 


















 



import { Template } from 'meteor/templating';

import './about.html';

if(Meteor.isClient) {
	Router.route('/about',function (){
		this.render('about');
	});
}
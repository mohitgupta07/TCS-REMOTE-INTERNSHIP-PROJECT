import { Template } from 'meteor/templating';

import './home.html';

if(Meteor.isClient) {
	Router.route('/',function (){
		this.render('home');
	});
}
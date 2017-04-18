import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './about.js';
import './home.js' ;
import './body.html';

if(Meteor.isClient) {
	Router.route('/',function (){
		this.render('body');
	});
}
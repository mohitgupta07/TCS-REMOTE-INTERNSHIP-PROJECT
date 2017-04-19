import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './about.js';
import './home.js' ;
import './body.html';
import './register.js';
import './login.js';

if(Meteor.isClient) {
	Router.route('/',function (){
		this.render('body');
	});
}
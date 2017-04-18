import { Template } from 'meteor/templating';

import './register.html';

if(Meteor.isClient) {
	Router.route('/register',function (){
		this.render('register');
	});
}

Template.register.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
});

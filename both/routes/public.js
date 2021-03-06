const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/', {
  action() {
    FlowRouter.go( '/login' );
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

publicRoutes.route( '/contactUs', {
  name: 'contactUs',
  action() {
    BlazeLayout.render( 'default', { yield: 'contactUs' } );
  }
});

publicRoutes.route( '/about', {
  name: 'about',
  action() {
    BlazeLayout.render( 'default', { yield: 'about' } );
  }
});

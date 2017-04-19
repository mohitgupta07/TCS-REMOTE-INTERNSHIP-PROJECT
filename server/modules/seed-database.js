import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
  Seed( 'users', {
    environments: [ 'development', 'staging', 'production' ],
    data: [{
      username: 'MohitGupta',
      email: 'mohit@parpanch.com',
      password: 'password',
      profile: {
        name: { first: 'Mohit', last: 'Gupta' }
      },
      roles: [ 'admin' ]
    },{
      username: 'AshutoshBajpai ',
      email: 'ashutosh@admin.com',
      password: 'password',
      profile: {
        name: { first: 'Ashutosh', last: 'Bajpai' }
      },
      roles: [ 'admin' ]
    }]
  });
};

let _seedChannels = () => {
  Seed( 'channels', {
    environments: [ 'development', 'staging', 'production' ],
    data: [ { name: 'general' } ]
  });
};

export default function() {
  _seedUsers();
  _seedChannels();
}

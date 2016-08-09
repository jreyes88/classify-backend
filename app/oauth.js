describe('OAuth1.0',function(){
  var OAuth = require('oauth');
 
  it('tests trends Twitter API v1.1',function(done){
    var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'your application consumer key',
      'your application secret',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=23424977',
      'your user token for this app', //test user token 
      'your user secret for this app', //test user secret             
      function (e, data, res){
        if (e) console.error(e);        
        console.log(require('util').inspect(data));
        done();      
      });    
  });
});

// describe('OAuth2',function(){
//   var OAuth = require('oauth');
 
//    it('gets bearer token', function(done){
//      var OAuth2 = OAuth.OAuth2;    
//      var twitterConsumerKey = 'your key';
//      var twitterConsumerSecret = 'your secret';
//      var oauth2 = new OAuth2(server.config.keys.twitter.consumerKey,
//        twitterConsumerSecret, 
//        'https://api.twitter.com/', 
//        null,
//        'oauth2/token', 
//        null);
//      oauth2.getOAuthAccessToken(
//        '',
//        {'grant_type':'client_credentials'},
//        function (e, access_token, refresh_token, results){
//        console.log('bearer: ',access_token);
//        done();
//      });
//    });
var nock = require('nock'),
    makeRequest = function(callback) {
      var http = require('http'),
          options = {
            host: 'www.google.com',
            path: '/'
          };

      http.get(options, callback);
    };

describe('makeRequest', function () {
  it('should return the correct response', function (done) {
    nock('http://www.google.com')
      .get('/')
      .reply(200, 'Hello from Google!');

    makeRequest(function (response) {
      response.should.equal('Hello from Google!');
      done();
    });
  });
});
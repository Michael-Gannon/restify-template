var server = require('../../app/core/server'),
    request = require('supertest');

describe('listings operations', function() {

  describe('when getting all listings', function () {
    var expected_body = {
      "listings": [
        { "listingName":"foo", "links": [ {"self":"/listing/foo"} ] },
        { "listingName":"bar", "links": [ {"self":"/listing/bar"} ] },
        { "listingName":"moo", "links": [ {"self":"/listing/moo"} ] }
      ],
      "length": 3
    };

    it('then returns 200 and all the listings', function(done) {
      request(server)
        .get('/listing')
        .expect(200, expected_body, done);
    });
  });

  describe('when getting a specific listing', function () {
    var expected_body = {
      "listings": [
        { "listingName":"moo", "links": [ { "self":"/listing/moo" } ] }
      ],
      "length": 1
    };

    it('then returns 200 and the listing', function(done) {
      request(server)
        .get('/listing/moo')
        .expect(200, expected_body, done);
    });
  });

  describe('when getting a missing listing', function () {
    var expected_body = { "message": "daves_not_here_man not found" };

    it('returns 404 and a not found message', function(done) {
      request(server)
        .get('/listing/daves_not_here_man')
        .expect(404, expected_body, done);
    });
  });
});
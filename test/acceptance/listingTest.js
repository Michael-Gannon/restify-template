var server = require('../../app/core/server'),
    request = require('supertest');

describe('/listings', function () {
  it('should return status 200', function (done) {
    request(server)
      .get('/listing')
      .expect(200)
      .end(done);
  });

  it('should return the listings', function (done) {
    request(server)
      .get('/listing')
      .expect({ "listings": [
        {"listingName":"foo","links":[{"self":"/listing/foo"}]},
        {"listingName":"bar","links":[{"self":"/listing/bar"}]},
        {"listingName":"moo","links":[{"self":"/listing/moo"}]}],
        "length": 3 })
      .end(done);
  });
});
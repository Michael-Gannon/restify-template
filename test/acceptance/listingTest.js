var client = require('restify').createJsonClient('http://localhost:8080');

before(function(done){
  client.get('/health', function(err, req, res, obj) {
    done(err);
  });
});

describe('/listings', function () {
  var statusCode,
      body;

  before(function(done) {
    client.get('/listing', function(err, req, res, obj) {
      statusCode = res.statusCode;
      body = obj;
      done(err);
    });
  });

  it('should return status 200', function () {
    statusCode.should.equal(200);
  });

  it('should return the listings', function () {
    var expectedResponse = {
      "listings": [
        {"listingName":"foo","links":[{"self":"/listing/foo"}]},
        {"listingName":"bar","links":[{"self":"/listing/bar"}]},
        {"listingName":"moo","links":[{"self":"/listing/moo"}]}
      ],
      "length": 3
    };

    body.should.eql(expectedResponse);
  });
});
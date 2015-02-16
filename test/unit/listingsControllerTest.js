var rewire = require('rewire'),
  listingsController = rewire('../../app/controllers/listingsController');

describe('the listings controller', function() {

  var result;

  before(function() {
    listingsController.__set__('listingRepository', {
      all: function(done) {
        var listings = [{
          name: 'Listing 1'
        }, {
          name: 'Listing 2'
        }, {
          name: 'Listing 3'
        }];
        done(listings);
      },
      find: function(name, done) {
        done();
      }
    });
  });

  describe('find all listings', function() {

    before(function(done) {
      listingsController.list(null, {
        send: function(body) {
          result = body;
        }
      }, done);
    });

    it('should return JSON of listings', function() {
      result.should.have.property('listings');
      result.should.have.property('listings').with.lengthOf(3);
    });

    it('should return length of listings', function() {
      result.should.have.property('length');
      result.length.should.equal(3);
    });

  });

  describe('show a listing', function() {

    before(function() {
      var req = { params: { name: 'my listing' } };
      listingsController.show(req, {}, function(err) {
        result = err;
      });
    });

    it('should return error when no listing found', function() {
      result.should.have.property('message');
      result.should.have.property('body');
      result.should.have.property('statusCode');

      result.message.should.equal('my listing not found');
      result.statusCode.should.equal(404);
    });

  });

});

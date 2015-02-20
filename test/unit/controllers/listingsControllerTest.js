var sinon = require('sinon');

var rewire = require('rewire'),
    listingsController = rewire('../../../app/controllers/listingsController'),
    repository = listingsController.__get__('listingRepository'),
    presenter = listingsController.__get__('listingPresenter');

describe('listings controller', function() {
  var body,
      statusCode,
      mockResponse = {
        send: function(_statusCode, _body) {
          statusCode = _statusCode;
          body = _body;
        }
      };

  var asJson = sinon.stub(presenter, 'asJson');
  before(function() {
    asJson.returns('presented listing');
  });

  after(function() {
    asJson.restore();
  });

  describe('when getting all listings', function() {
    var listings = [ 'Listing 1', 'Listing 2' ];
    var all = sinon.stub(repository, 'all');

    after(function() {
      all.restore();
    });

    describe('and there are listings', function() {
      before(function(done) {
        all.yields(listings);
        listingsController.list(null, mockResponse, done);
      });

      it('then returns a 200 OK', function() {
        statusCode.should.equal(200);
      });

      it('then returns the listings after being transformed by the presenter', function() {
        body.should.have.property('listings');
        body.listings.should.eql(['presented listing', 'presented listing']);
      });

      it('then returns total number of listings', function() {
        body.should.have.property('length');
        body.length.should.equal(2);
      });
    });

    describe('and there are no listings', function() {
      before(function(done) {
        all.yields([]);
        listingsController.list(null, mockResponse, done);
      });

      it('then returns a 200 OK', function() {
        statusCode.should.equal(200);
      });

      it('then returns an empty list', function() {
        body.should.have.property('listings');
        body.listings.should.eql([]);
      });

      it('then the total number of listings is 0', function() {
        body.should.have.property('length');
        body.length.should.eql(0);
      });
    })
  });

  describe('when getting a listing', function() {
    var req = { params: { name: 'listing name' } },
        find = sinon.stub(repository, 'find')

    after(function() {
      find.restore();
    });

    describe('and the listing exists', function() {
      before(function(done) {
        find.withArgs('listing name').yields('Listing that exists');
        listingsController.show(req, mockResponse, done);
      });

      it('then returns a 200 OK', function() {
        statusCode.should.equal(200);
      });

      it('then returns the listing after being transformed by the presenter', function() {
        body.should.have.property('listings');
        body.listings.should.eql(['presented listing']);
      });

      it('then the total number of listings is 1', function() {
        body.should.have.property('length');
        body.length.should.eql(1);
      });
    });

    describe('and it does not exist', function() {
      before(function(done) {
        find.withArgs('listing name').yields(null);
        listingsController.show(req, mockResponse, done);
      });

      it('then returns error when no listing found', function() {
        body.should.eql({ message:'listing name not found' });
        statusCode.should.equal(404);
      });
    });
  });
});
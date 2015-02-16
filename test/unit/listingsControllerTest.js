var rewire = require('rewire'),
  listingsController = rewire('../../app/controllers/listingsController');

describe('the listings controller', function() {
  describe('find all listings', function() {
    it('returns json of listings', function() {
      // listingsController.__set__('listingRepository', {});
      // listingsController.list(null, {
      //   send: function(body) {
      //     body.listings.length.should.equal(3);
      //     body.length.should.equal(3);
      //   }
      // }, function() {
      //   // do smth
      // });
    });
    it('returns length of listings', function() {

    })
  })
});
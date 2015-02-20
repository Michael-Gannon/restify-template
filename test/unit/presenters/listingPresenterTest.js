var listingPresenter = require('../../../app/presenters/listingPresenter');

describe('ListingPresenter', function() {

  describe('when presenting a listing', function() {
    var json;

    before(function() {
      json = listingPresenter.asJson({name: 'my listings name'});
    });

    it('then presents the listing name', function() {
      json.should.have.property('listingName');
      json.listingName.should.eql('my listings name');
    });

    it('then presents the links for the listing', function() {
      json.should.have.property('links');
      json.links.should.eql([ { self: '/listing/my%20listings%20name' } ]);
    });
  });

});
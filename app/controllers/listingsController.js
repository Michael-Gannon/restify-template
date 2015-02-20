var listingPresenter = require('../presenters/listingPresenter'),
    listingRepository = require('../repositories/listingRepository');

var formatResponse = function(listings) {
  return {
    listings: listings.map(listingPresenter.asJson),
    length: listings.length
  };
};

module.exports.list = function(req, res, next) {
  listingRepository.all(function(listings) {
    res.send(200, formatResponse(listings));
    next();
  });
};

module.exports.show = function(req, res, next) {
  var name = req.params.name;
  listingRepository.find(name, function(listing) {
    if(!listing) {
      res.send(404, { message: name + ' not found' });
      return next();
    }
    res.send(200, formatResponse([listing]));
    next();
  });
};

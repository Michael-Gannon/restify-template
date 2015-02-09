var restify = require('restify'),
    listingPresenter = require('../presenters/listingPresenter'),
    listingRepository = require('../repositories/listingRepository');

var formatResponse = function(listings) {
  return {
    listings: listings.map(listingPresenter.asJson),
    length: listings.length
  };
};

module.exports.list = function(req, res, next) {
  listingRepository.all(function(listings) {
    res.send(formatResponse(listings));
    next();
  });
};

module.exports.show = function(req, res, next) {
  var name = req.params.name;
  listingRepository.find(name, function(listing) {
    if(!listing) {
      return next(new restify.errors.NotFoundError(name + ' not found'));
    }

    res.send(formatResponse([listing]));
    next();
  });
};
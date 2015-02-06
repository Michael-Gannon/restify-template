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
  res.send(formatResponse(listingRepository.all()));
  next();
};

module.exports.show = function(req, res, next) {
  var name = req.params.name,
      listing = listingRepository.find(name);

  if(!listing) {
    return next(new restify.errors.NotFoundError(name + ' not found'));
  }

  res.send(formatResponse([listing]));
  next();
};
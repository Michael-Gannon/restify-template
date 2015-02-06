var routeHelper = require('../core/routeHelper');

module.exports.asJson = function(listing) {
  return {
    listingName: listing.name,
    links: [{
        self: routeHelper.getPath('listing', { name: listing.name })
    }]
  };
};
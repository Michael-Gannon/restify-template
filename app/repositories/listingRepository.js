var Listing = require('../models/listing'),
    listingsDataStore = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'moo' }
    ];

module.exports.ping = function(done) {
  var error;
  //if(cant ping the db or something) {
  // error = new Error('moo');
  //}
  return done(error);
};

module.exports.find = function(id, done) {
  for(var i = 0; i < listingsDataStore.length; i++) {
    if(listingsDataStore[i].name === id) {
      done(new Listing({ name: listingsDataStore[i].name }));
      return;
    }
  }
};

module.exports.all = function(done) {
  listings = listingsDataStore.map(function(dataStoreListing) {
    return new Listing({ name: dataStoreListing.name });
  });

  done(listings);
};
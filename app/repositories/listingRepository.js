var Listing = require('../models/listing'),
    listingsDataStore = [
      { name: 'foo' },
      { name: 'bar' },
      { name: 'moo' }
    ];

module.exports.ping = function(done) {
  var error;
  process.nextTick(function() {
    //if(cant ping the db or something) {
    // error = new Error('moo');
    //}
    return done(error);
  });
};

module.exports.find = function(id, done) {
  process.nextTick(function() {
    for(var i = 0; i < listingsDataStore.length; i++) {
      if(listingsDataStore[i].name === id) {
        done(new Listing({ name: listingsDataStore[i].name }));
        return;
      }
    }
    done();
  });
};

module.exports.all = function(done) {
  process.nextTick(function() {
    var listings;
    listings = listingsDataStore.map(function(dataStoreListing) {
      return new Listing({ name: dataStoreListing.name });
    });
    done(listings);
  });
};
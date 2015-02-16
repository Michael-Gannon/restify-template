var listingRepository = require('../repositories/listingRepository');

module.exports.get = function(req, res, next) {
  listingRepository.ping(function(err) {
    if(err) {
      res.send(500, { ok: false, dbPing: false });
    } else {
      res.send({ ok: true });
    }
    next();
  });
};
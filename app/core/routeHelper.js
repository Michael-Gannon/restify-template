var server = require('./server');

module.exports.getPath = function(name, args) {
  return server.router.render(name, args);
};
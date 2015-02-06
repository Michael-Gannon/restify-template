var restify = require('restify'),
    requestLogger = require('./requestLogger'),
    uncaughtServerExceptionHandler = require('./uncaughtServerExceptionHandler');

var server = restify.createServer({
  name: 'ListingService'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.authorizationParser());
server.use(restify.dateParser());
server.use(restify.queryParser());
server.use(restify.jsonp());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());
server.use(requestLogger.logRequests({ ignore: [/\/health/] }));
server.on('uncaughtException', uncaughtServerExceptionHandler);

module.exports = server;

var healthController = require('../controllers/healthController'),
    listingsController = require('../controllers/listingsController');

server.get('/health', healthController.get);
server.get({ name: 'listing', path: '/listing/:name' }, listingsController.show);
server.get({ name: 'listings', path: '/listing' }, listingsController.list);
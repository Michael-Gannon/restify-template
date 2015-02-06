var server = require('./app/core/server'),
    uncaughtProcessExceptionHandler = require('./app/core/uncaughtProcessExceptionHandler');

process.on('uncaughtException', uncaughtProcessExceptionHandler);

server.listen(8080, function() {
  console.log('%s listening at %s\n', server.name, server.url);
});
module.exports = function uncaughtExceptionHandler(req, res, route, err) {
  res.send(500, {});
  console.error(JSON.stringify({
    time: new Date().toUTCString(),
    id: req.id(),
    method:req.method,
    path: req.path(),
    statusCode: res.statusCode,
    length: res.headers()['content-length'],
    error: err.message,
    state: "uncaught error"
  }));
};
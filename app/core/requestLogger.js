var ignore;

var logBefore = function(req) {
  console.log(JSON.stringify({
    time: new Date().getTime(),
    id: req.id(),
    method: req.method,
    path: req.path(),
    state: "started"
  }));
};

var logAfter = function(req, res) {
  console.log(JSON.stringify({
    time: new Date().getTime(),
    id: req.id(),
    method:req.method,
    path: req.path(),
    statusCode: res.statusCode,
    length: res.headers()['content-length'],
    state: "finished"
  }));
};

var ignorePath = function(path) {
  for(var i = 0; i < ignore.length; i++) {
    if(path.match(ignore[i])) {
      return true;
    }
  }
  return false;
};

module.exports.logRequests = function(args) {
  ignore = args.ignore || [];

  return function(req, res, next) {
    if(!ignorePath(req.path())) { logBefore(req, res); }
    next();
    if(!ignorePath(req.path())) { logAfter(req, res); }
  };
};
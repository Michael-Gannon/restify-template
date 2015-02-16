#!/usr/bin/env node

var Table = require('cli-table'),
    server = require('../app/core/server');

var table = new Table({ head: ["", "Path"] }),
    routesByMethod = server.router.routes;

for(var method in routesByMethod) {
  if(routesByMethod.hasOwnProperty(method)) {
    for(var i = 0; i < routesByMethod[method].length; i++) {
      var route = routesByMethod[method][i],
          map = {};

      map[route.method] = [route.spec.path];
      table.push(map);
    }
  }
}

console.log(table.toString());

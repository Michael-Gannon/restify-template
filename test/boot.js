var spawn = require('child_process').spawn,
    fs = require('fs');

console.log('starting server with \'node index.js\'');
var proc = spawn('node', ['index.js'], { stdio: 'pipe' });
proc.stdio[1].pipe(fs.createWriteStream('./log/test_out.log'));
proc.stdio[2].pipe(fs.createWriteStream('./log/test_err.log'));

proc.on('exit', function (code, signal) {
  //so its exiting, what to do....
});

proc.on('error', function (code, signal) {
  console.log('server could not start, exiting', code, signal);
  process.exit(1);
});

process.on('exit', function() {
  proc.kill();
});
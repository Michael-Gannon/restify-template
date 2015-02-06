module.exports = function uncaughtProcessExceptionHandler(err) {
  console.error(JSON.stringify({
    time: new Date().toUTCString(),
    error: err.message(),
    state: "uncaught process error"
  }));
  process.exit(1);
};
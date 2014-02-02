
module.exports = false;

if (!process.execArgv.length) {
  var spawn = require('child_process').spawn;

  var args = [process.argv[1]];
  var argv = process.argv.slice(2);

  argv.forEach(function(arg) {
    var flag = arg.split('=')[0];

    switch (flag) {
      case '-d': arg = '--debug';
      case 'debug':
      case '--debug':
      case '--debug-brk':
      case '-gc': arg = '--expose-gc';
      case '--expose-gc':
      case '--gc-global':
      case '--harmony':
      case '--harmony-proxies':
      case '--harmony-collections':
      case '--harmony-generators':
      case '--prof':
        args.unshift(arg);
        break;
      default:
        if (0 == arg.indexOf('--trace')) args.unshift(arg);
        else args.push(arg);
        break;
    }
  });

  // has special args
  if (args[0] != process.argv[1]) {
    var proc = spawn(process.argv[0], args, { customFds: [ 0, 1, 2 ] });

    proc.on('exit', function(code, signal) {
      process.on('exit', function(){
        if (signal) {
          process.kill(process.pid, signal);
        } else {
          process.exit(code);
        }
      });
    });

    module.exports = true;
  }
}

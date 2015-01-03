var assert = require('assert');
var resolve = require('path').resolve;
var spawn = require('child_process').spawn;

/**
 * Proxy v8 args to node while forwarding the
 * remaining arguments to a custom script.
 *
 * @param {String} path to resolve
 */

module.exports = function() {
  assert(arguments.length > 0, 'v8-argv: path required');
  var args = [].slice.call(arguments);
  var argv = process.argv.slice(2);

  argv.forEach(function(arg) {
    var flag = arg.split('=')[0];

    switch (flag) {
      case '-d':
        args.unshift('--debug');
        break;
      case 'debug':
      case '--debug':
      case '--debug-brk':
        args.unshift(arg);
        break;
      case '-gc':
      case '--expose-gc':
        args.unshift('--expose-gc');
        break;
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

  var proc = spawn(process.argv[0], args, { stdio: 'inherit' });

  proc.on('exit', function(code, signal) {
    process.on('exit', function(){
      if (signal) {
        process.kill(process.pid, signal);
      } else {
        process.exit(code);
      }
    });
  });
};

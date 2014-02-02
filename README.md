# v8-argv [![Build Status](https://travis-ci.org/logicalparadox/v8-argv.png?branch=master)](https://travis-ci.org/logicalparadox/v8-argv)

> handle special v8 args `--harmony`, `--debug` etc..

#### Installation

`v8-argv` is available on [npm](http://npmjs.org).

    npm install v8-argv

#### Usage

  v8-argv exports a `Boolean` telling you if it handled any special v8 arguments. If id did then you are going to want to prevent your scripts body from running since a second process has been spawned which will run that.

##### bin/app

```js
#!/usr/bin/env node
if (require('v8-argv')) return;
// script body goes here
```

#### Test

    npm test

#### Credit Due

- [logicalparadox/matcha#8](https://github.com/logicalparadox/matcha/pull/8) by [visionmedia](https://github.com/visionmedia)

#### License

[WTFPL](http://wtfpl.org/)

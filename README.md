# v8-argv

> Proxy v8 argv for node-based bins.

#### Installation

`v8-argv` is available on [npm](http://npmjs.org).

    npm install v8-argv

#### Usage

- **@param** _{String}_ path to resolve to actual bin (repeatable)

##### bin/app

```js
#!/usr/bin/env node
require('v8-argv')(__dirname, '_app');
```

##### bin/_app

```js
#!/usr/bin/env node
program.parse(process.argv); // etc...
```

#### Credit Due

- [logicalparadox/matcha#8](https://github.com/logicalparadox/matcha/pull/8) by [visionmedia](https://github.com/visionmedia)

#### License

[WTFPL](http://wtfpl.org/)

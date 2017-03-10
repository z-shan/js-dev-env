// This file isnt transpiled, so must use commonjs and es5

// register babel to transpile before our tests run
require('babel-register')();

//diable webpack features that Mocha doesnt understand
require.extensions['.css'] = function() {};

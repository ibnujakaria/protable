const browserEnv = require('browser-env');
browserEnv();

global.fetch = require("node-fetch");
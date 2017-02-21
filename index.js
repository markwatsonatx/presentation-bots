'use strict';

const cfenv = require('cfenv');
const express = require('express');

const appEnv = cfenv.getAppEnv();
const app = express();

app.use(express.static(__dirname));

app.listen(appEnv.port, '0.0.0.0', function() {
    console.log("server starting on " + appEnv.url);
});
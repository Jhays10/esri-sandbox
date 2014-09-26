"use strict";
var app = require('./')

var main = require('./controllers/main')
app.get('/', main.index)
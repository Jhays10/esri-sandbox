var cfg = require('config')
var express = require('express')

var app = module.exports = express()
app.disable('x-powered-by')
app.set('trust proxy', cfg.express.trustProxy)
app.set('views', __dirname+'/views')
app.set('view engine', 'jade')
app.set('view cache', cfg.express.viewCache)

app.locals.cfg = cfg
app.locals.basedir = cfg.libDir
app.locals._ = require('lodash')

// routes
require('./routes')

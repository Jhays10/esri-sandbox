var cfg = require('config')
var express = require('express')

var app = module.exports = express()
app.disable('x-powered-by')
app.set('trust proxy', cfg.express.trustProxy)

// shared middleware
app.use(require('compression')())
app.use(express.static(__dirname+'/public', cfg.express.staticOpts))

// mounted apps
app.use(require('./lib/webapp'))

// fallback error handling -- ideally should never reach here
app.use(function (req, res, next) { res.status(404).send('not found') })
app.use(function (er, req, res, next) { console.log(er); res.status(500).send('internal server error') })


if (!module.parent) {
  app.listen((cfg.port || 3000))
  console.log('esri-sandbox listening on ' + (cfg.port || 3000))
}
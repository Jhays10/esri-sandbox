"use strict";
var moment = require('moment')
var _ = require('lodash')
var path = require('path')
var cfg = module.exports = exports

cfg.env = process.env.NODE_ENV || 'development'
_.merge(cfg, require('./env/'+cfg.env))

cfg.baseDir = path.resolve(__dirname,'../')
cfg.libDir = path.join(cfg.baseDir, '/lib')

if (process.env.NODE_DEBUG) {
  console.log('-----------\nBE CAREFUL!  You are working with the ' + cfg.env + ' databases and configuration!\n-----------')

  cfg.express.viewCache = false
  cfg.port = 3000
}
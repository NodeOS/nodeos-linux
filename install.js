#!/usr/bin/env node

var async   = require('async')
var fs      = require('fs-extra')
var manager = require('download-manager')

const LINUX_VERSION = require('./package.json').version
const LINUX_URL     = "https://www.kernel.org/pub/linux/kernel/v4.x/linux-"+LINUX_VERSION+".tar.gz"
const LINUX_SHA256  = 'b8dd5365c9f4319d41781f65f27b116ae7981d791bbad46491617fee0f87f8cc'

var downloads =
[
  {
    name: 'linux',
    url: LINUX_URL,
    sha256: LINUX_SHA256
  }
]

manager(downloads, function(error)
{
  if(error)
  {
    console.trace(error)
    process.exit(1)
  }
})

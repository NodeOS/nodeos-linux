#!/usr/bin/env node

const manager = require('download-manager')


const PKG = require('../package.json')

const LINUX_VERSION = PKG.version.split('.').filter((item)=>parseInt(item)).join('.')
const LINUX_URL     = `${PKG.buho.url}/linux-${LINUX_VERSION}.tar.gz`
const LINUX_SHA256  = PKG.buho.sha256


// Patch Linux kernel to add Unicode BMP support on `fbcon`
const LINUX_CJKTTY_VERSION = "4.12"
const LINUX_CJKTTY_PATCH = "https://raw.githubusercontent.com/NodeOS/cjktty-patch/master/patches/linux-"+LINUX_CJKTTY_VERSION+"-cjktty.diff"


var download =
{
  name: 'linux',
  url: LINUX_URL,
  sha256: LINUX_SHA256,
  patch:
  [
    {
      url: LINUX_CJKTTY_PATCH,
      strip: 1
    },
    {
      url: 'patches/linux-vagrant.patch',
      strip: 1
    },
    {
      url: 'patches/logo.patch',
      strip: 1
    }
  ]
}

if(process.platform === 'darwin')
  download.patch = 'patches/linux-darwin.diff'


manager(download, function(error)
{
  if(error)
  {
    console.trace(error)
    process.exit(1)
  }
})

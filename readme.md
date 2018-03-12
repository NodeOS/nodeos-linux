[![Build Status](https://semaphoreci.com/api/v1/nodeos/nodeos-linux/branches/master/badge.svg)](https://semaphoreci.com/nodeos/nodeos-linux)

# nodeos-linux

Downloads Linux source for use when compiling NodeOS

## Why?

Because multiple packages within NodeOS rely on kernel headers not found within
all operating systems (eg. OS X). This package simply downloads the Linux source
into a central location to be used by all packages.

#!/bin/bash

#acceptance specs
NODE_ENV=test ./node_modules/.bin/_mocha \
    --recursive \
    -R spec \
    -r should \
    ./test/acceptance/

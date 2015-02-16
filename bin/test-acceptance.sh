#!/bin/bash

#acceptance specs
./node_modules/.bin/_mocha \
    --recursive \
    -R spec \
    -r should \
    -r ./test/boot \
    ./test/acceptance/

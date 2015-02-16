#!/bin/bash

#unit specs
./node_modules/.bin/istanbul cover \
  ./node_modules/.bin/_mocha \
    -- \
    --recursive \
    -R spec \
    -r should \
    ./test/unit/

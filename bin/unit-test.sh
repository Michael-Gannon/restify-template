#!/bin/bash

#unit specs
./node_modules/.bin/istanbul --config=./test/istanbul-config.json cover \
  ./node_modules/.bin/_mocha \
    -- \
    --recursive \
    -R spec \
    -r should \
    ./test/unit/

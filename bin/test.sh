#!/bin/bash

#lint
./node_modules/.bin/jshint index.js ./app/ --reporter unix &&

#code standards
./node_modules/.bin/jscs index.js ./app/ &&

./bin/unit-test.sh &&

#coverage
./node_modules/.bin/istanbul --config=./test/istanbul-config.json check-coverage &&

./bin/acceptance-test.sh

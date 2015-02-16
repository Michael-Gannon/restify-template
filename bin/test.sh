#!/bin/bash

echo "checking code quality"
./node_modules/.bin/jshint index.js ./app/ --reporter unix && #lint
./node_modules/.bin/jscs index.js ./app/ && #code standards

printf "\nrunning unit tests"
./bin/test-unit.sh &&

printf "\nchecking test coverage\n"
./node_modules/.bin/istanbul --config=./test/istanbul-config.json check-coverage &&

printf "\nrunning acceptance tests\n"
./bin/test-acceptance.sh

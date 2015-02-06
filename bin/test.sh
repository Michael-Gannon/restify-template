#!/bin/bash
./node_modules/.bin/jshint index.js ./app/ --reporter unix &&
./node_modules/.bin/jscs index.js ./app/ &&
./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --recursive -R nyan -r should &&
./node_modules/.bin/istanbul check-coverage &&
rm -rf coverage

#!/bin/bash
./node_modules/.bin/forever -o ./log/out.log -e ./log/err.log start index.js

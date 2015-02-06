#!/bin/bash
./node_modules/.bin/forever -w -o ./log/out.log -e ./log/err.log index.js

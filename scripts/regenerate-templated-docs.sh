#!/usr/bin/env bash

set -ex

# initialize submodules
git submodule update --init --recursive

# update to latest submodule
git submodule foreach git pull --rebase origin main

# run the regeneration script
node ./scripts/regenerate-templated-docs.js
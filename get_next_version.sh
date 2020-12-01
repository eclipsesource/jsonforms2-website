#!/usr/bin/env bash

export NEXTVERSION=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/releases" | grep '"tag_name":' | head -1 | sed -E 's/.*"([^"]+)".*/\1/')

DOCZ_NEXTVERSION=$NEXTVERSION npm run build

exit 0

#!/usr/bin/env bash

# 
# Add versions to frontpage
#

function next() {
    NEXTVERSIONCANDIDATE=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/tags" | grep '"name":' | head -1 | sed -E 's/.*"([^"]+)".*/\1/')
    if [[ ${NEXTVERSIONCANDIDATE:0:1} == "v" ]] && [[ $NEXTVERSIONCANDIDATE != $CURRENTVERSION ]] ; then NEXTVERSION="${NEXTVERSIONCANDIDATE:1}"; fi
    echo -e "NEXTVERSION = $NEXTVERSION" >> .env
}

function current() {
    CURRENTVERSION=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
    echo -e "CURRENTVERSION = $CURRENTVERSION" >> .env
}

WITH_NEXT=$1

rm -f .env
if [[ $WITH_NEXT = "next" ]]; then
    current
    next
else
    current
fi

# 
# Add beacon hash to netlify.toml file
#

# Download the file
curl -O https://static.cloudflareinsights.com/beacon.min.js

# Calculate the sha256 hash of the file and convert it to base64
hash=$(openssl dgst -sha256 -binary beacon.min.js | openssl base64)

# Replace the placeholder in netlify.toml file with the calculated hash
sed -i "s|##HASH_PLACEHOLDER##|'sha256-$hash'|g" netlify.toml

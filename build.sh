#!/usr/bin/env bash

# 
# Add versions to frontpage
#

VERSION_FILE="./static/current-version.json"

function next() {
    NEXTVERSIONCANDIDATE=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/tags" | grep '"name":' | head -1 | sed -E 's/.*"([^"]+)".*/\1/')
    if [[ ${NEXTVERSIONCANDIDATE:0:1} == "v" ]] && [[ $NEXTVERSIONCANDIDATE != $CURRENTVERSION ]] ; then NEXTVERSION="${NEXTVERSIONCANDIDATE:1}"; fi
    printf "\n  \"next-version\": \"$NEXTVERSION\"" >> "$VERSION_FILE"
}

function current() {
    CURRENTVERSION=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
    printf "  \"current-version\": \"$CURRENTVERSION\"" >> "$VERSION_FILE"
}

WITH_NEXT=$1

rm -f "$VERSION_FILE"
printf "{\n" >> "$VERSION_FILE"

rm -f .env
if [[ $WITH_NEXT = "next" ]]; then
    current
    printf "," >> "$VERSION_FILE"
    next
else
    current
fi

printf "\n}\n" >> "$VERSION_FILE"

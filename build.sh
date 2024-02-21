#!/usr/bin/env bash

# 
# Add versions to frontpage
#

JS_FILE="./static/current-version.js"

function next() {
    printf "\n" >> "$JS_FILE"

    NEXTVERSIONCANDIDATE=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/tags" | grep '"name":' | head -1 | sed -E 's/.*"([^"]+)".*/\1/')
    if [[ ${NEXTVERSIONCANDIDATE:0:1} == "v" ]] && [[ $NEXTVERSIONCANDIDATE != $CURRENTVERSION ]]; then
        NEXTVERSION="${NEXTVERSIONCANDIDATE:1}"
    fi
    printf "export const nextVersion = '$NEXTVERSION';" >> "$JS_FILE"
}

function current() {
    CURRENTVERSION=$(curl --silent "https://api.github.com/repos/eclipsesource/jsonforms/releases/latest" | grep '"tag_name":' | sed -E 's/.*"([^"]+)".*/\1/')
    printf "export const currentVersion = '$CURRENTVERSION';" >> "$JS_FILE"
}

WITH_NEXT=$1

rm -f "$JS_FILE"

if [[ $WITH_NEXT = "next" ]]; then
    current
    next
else
    current
fi

printf "\n" >> "$JS_FILE"

#!/bin/bash

PACKAGE_VERSION=$(node -p "require('./package.json').version")
git tag "v$PACKAGE_VERSION"

npm version patch

git add package.json

PACKAGE_VERSION=$(node -p "require('./package.json').version")
git commit -m "Prepare release v$PACKAGE_VERSION"

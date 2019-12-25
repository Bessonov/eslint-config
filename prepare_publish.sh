#!/bin/bash

PACKAGE_VERSION=$(node -p "require('./package.json').version")
git tag "v$PACKAGE_VERSION"

npm version patch

git commit -m "Release $PACKAGE_VERSION"

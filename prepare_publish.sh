#!/bin/bash

PACKAGE_VERSION=$(node -p "require('./package.json').version")

npm version patch

git add package.json

git commit -m "Release v$PACKAGE_VERSION"
git tag "v$PACKAGE_VERSION"

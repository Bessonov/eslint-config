# Standard eslint config

Opinionated eslint configuration. Primarly it's an override for airbnb config. Although airbnb config is recommended, you can use this config standalone.

## Install and setup

```bash
npm install -D @bessonovs/eslint-config
yarn add -D @bessonovs/eslint-config
pnpm install -D @bessonovs/eslint-config
```

Add appropriate entries to your eslint configuration:
```javascript
extends: [
  'airbnb-base', // or 'airbnb' for react project
  'plugin:@typescript-eslint/recommended',
  'plugin:react/recommended',
  '@bessonovs/eslint-config', // base configuration
  '@bessonovs/eslint-config/node', // additional configuration for node project
  '@bessonovs/eslint-config/react', // additional configuration for react project
  '@bessonovs/eslint-config/typescript', // additional configuration for typescript project
],
```

License
-------

The MIT License (MIT)

Copyright (c) 2019, Anton Bessonov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
#!/usr/bin/env bash

rm cjs esm -rf

npx tsc --module commonjs --target es5 --outdir cjs
npx tsc --outdir esm
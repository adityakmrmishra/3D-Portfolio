# !/usr/bin/env sh

# abort on errors
set -e

# build
npm run build 

# navigate into the build output directory
cd dist

# place .nojekyll to bypass jekyll processing
echo > .nojekyll



git init
git checkout -B main
git add -A
git commit -m 'deploy'


git push -f git@github.com:adityakmrmishra/3D-Portfolio.git main:gh-pages


cd -
commit="build(deploy): deploy v$1"
yarn clean
yarn build
cd ../alexandre-lelain.github.io
rm -rf *
cp -r ../home/public/* .
cp ../home/README.md .
git add -vA
git commit -am "$commit"
git push -f origin master
export V=$(cat lerna.json| jq .version -r)
# 让 latest 都打上 release 的 dist-tag
npx lerna exec --no-bail --no-private --no-sort --stream -- '[ -n $V ] && npm --registry https://registry.npmjs.org/ dist-tag add ${LERNA_PACKAGE_NAME}@$V release'

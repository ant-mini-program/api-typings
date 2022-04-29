# 让 latest 都打上 release 的 dist-tag
npx lerna exec --no-bail --no-private --no-sort --stream -- '[ -n "$(npm v . dist-tags.latest)" ] && npm --registry https://registry.npmjs.org/ dist-tag add ${LERNA_PACKAGE_NAME}@$(npm v . dist-tags.latest) release'

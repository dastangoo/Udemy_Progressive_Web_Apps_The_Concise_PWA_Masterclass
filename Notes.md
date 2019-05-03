```bash

git init testgithubpages
cd testgithubpages
hub create testgithubpages
git ci --allow-empty -m "Initial Commit"
git push origin master
git push origin master:gh-pages
hub delete testgithubpages
hub create giphgram <name>
git remote add production <repo link>
git push production <branc>:master
git push production <branc>:gh-pages
```

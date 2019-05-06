```bash
curl -I http://localhost:3333
curl -I http://localhost:8888
npm i -g nodemon
npm list -g --depth=0 2> /dev/null | grep nodemon
npm i web-push
node_modules/.bin/web-push generate-vapid-keys --json > server/vapid.json
npm i urlsafe-base64
```

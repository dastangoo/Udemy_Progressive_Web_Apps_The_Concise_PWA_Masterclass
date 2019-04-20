```
npm list -g --depth=0 2> /dev/null | grep http-server
http-server &
http-server -p 8080 &
python3 -m http.server 8080 &
python -m SimpleHTTPServer 8080 &
ruby -r un -e httpd . --port 8080
php -S localhost:8080
```

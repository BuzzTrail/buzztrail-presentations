#!/bin/bash
# Create 404.html and inject SPA routing script for GitHub Pages
# Based on https://github.com/rafgraph/spa-github-pages

DECK_DIR=$1

# Create 404.html that redirects to index with query params
cat > "$DECK_DIR/404.html" << 'EOF'
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script type="text/javascript">
      // SPA redirect for GitHub Pages
      // pathSegmentsToKeep = 2 for /buzztrail-presentations/deck-id/
      var pathSegmentsToKeep = 2;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
EOF

# Inject redirect handler into index.html
# This script reads the query string and restores the original URL
sed -i 's|<head>|<head><script type="text/javascript">(function(l){if(l.search[1]==="/"){var decoded=l.search.slice(1).split("\&").map(function(s){return s.replace(/~and~/g,"\&")}).join("?");window.history.replaceState(null,null,l.pathname.slice(0,-1)+decoded+l.hash)}}(window.location))</script>|' "$DECK_DIR/index.html"

echo "SPA routing configured for $DECK_DIR"

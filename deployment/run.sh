#!/bin/sh
printenv
for file in $HTMLFOLDER;
do
  cat $file | envsubst | tee $file
  cat $file
done
nginx -g 'daemon off;'
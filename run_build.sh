#!/bin/bash

npm run build
cp ./get_info.php dist/
php -S localhost:3000 -t dist/


#!/bin/bash
set -e  # Exit if any command fails

echo "Stopping web server..."
sudo systemctl stop apache2 || sudo systemctl stop httpd
echo "Web server stopped successfully."

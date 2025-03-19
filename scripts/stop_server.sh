#!/bin/bash
set -e

echo "Stopping web server..."
if systemctl is-active --quiet httpd; then
    sudo systemctl stop httpd
    echo "Web server stopped successfully."
else
    echo "Web server is not running."
fi
#!/bin/bash
set -e  # Exit if any command fails

echo "Starting web server..."
sudo systemctl start apache2 || sudo systemctl start httpd
echo "Web server started successfully."

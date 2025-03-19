#!/bin/bash
set -e

echo "Starting web server..."
sudo systemctl start httpd
echo "Web server started successfully."

# Verify the server is running
if systemctl is-active --quiet httpd; then
    echo "Apache is running."
else
    echo "Error: Apache failed to start."
    exit 1
fi

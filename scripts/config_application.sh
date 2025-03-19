#!/bin/bash
set -e

echo "Configuring application..."
# Set proper permissions for the web root
sudo chown -R apache:apache /var/www/html
sudo chmod -R 755 /var/www/html

# You can add more configuration steps here if needed
echo "Application configured successfully."
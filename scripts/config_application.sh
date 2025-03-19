#!/bin/bash
set -e  # Exit if any command fails

APP_DIR="/var/www/html"

echo "Setting permissions for application directory..."
sudo chown -R www-data:www-data $APP_DIR || sudo chown -R apache:apache $APP_DIR
sudo chmod -R 755 $APP_DIR

echo "Configuring environment variables..."
export APP_ENV=production
export APP_DEBUG=false
echo "APP_ENV=production" | sudo tee -a /etc/environment
echo "APP_DEBUG=false" | sudo tee -a /etc/environment

echo "Application configured successfully."

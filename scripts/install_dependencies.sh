#!/bin/bash
set -e  # Exit if any command fails

echo "Updating system packages..."
sudo apt update -y || sudo yum update -y

echo "Installing necessary packages..."
sudo apt install -y git apache2 unzip || sudo yum install -y git httpd unzip

echo "Ensuring Apache (or HTTPD) is enabled..."
sudo systemctl enable apache2 || sudo systemctl enable httpd

echo "Dependencies installed successfully."
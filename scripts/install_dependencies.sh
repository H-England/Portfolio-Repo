#!/bin/bash
set -e

echo "Installing dependencies..."
sudo yum update -y
sudo yum install -y httpd

echo "Dependencies installed successfully."

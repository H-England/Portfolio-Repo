#!/bin/bash

# Set the target directory
TARGET_DIR="/var/www/html"

# Check if the directory exists
if [ -d "$TARGET_DIR" ]; then
  echo "Cleaning up $TARGET_DIR"
  
  # Remove all contents of the directory
  rm -rf $TARGET_DIR/*
  
  echo "Cleanup completed successfully"
else
  echo "Target directory $TARGET_DIR does not exist. Skipping cleanup."
fi
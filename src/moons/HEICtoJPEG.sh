#!/bin/bash

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null
then
    echo "ImageMagick (convert) could not be found. Please install it and try again."
    exit 1
fi

# Root directory where the search should begin
root_dir="."

# Find all .HEIC files recursively and convert to .jpeg
find "$root_dir" -type f -name "*.HEIC" | while read -r file; do
    # Get the directory and filename without extension
    dir=$(dirname "$file")
    filename=$(basename "$file" .HEIC)
    
    # Convert to JPEG and save in the same directory
    output_file="$dir/${filename}.jpeg"
    convert "$file" "$output_file"
    
    # Confirm the conversion
    echo "Converted: $file -> $output_file"
done

echo "Conversion of all .HEIC files to .jpeg is complete."

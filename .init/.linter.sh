#!/bin/bash
cd /home/kavia/workspace/code-generation/resident-directory-viewer-198065-198075/frontend_resident_directory
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


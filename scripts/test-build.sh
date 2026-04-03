#!/bin/bash

# Test Build Script
# This script mimics what DeployHQ will do during deployment

echo "🚀 Testing Yoder Construction Website Build"
echo "=========================================="

# Check Node.js version
echo "📋 Node.js Version:"
node --version

# Check npm version  
echo "📋 npm Version:"
npm --version

# Install dependencies
echo "📦 Installing Dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

# Run the build
echo "🏗️  Building Static Site..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Check if build output exists
if [ -d "out" ]; then
    echo "✅ Build successful!"
    echo "📊 Build Statistics:"
    du -sh out/
    echo "📁 Files created: $(find out -type f | wc -l)"
    echo "🌐 Test locally: cd out && python3 -m http.server 8080"
else
    echo "❌ Build output directory not found"
    exit 1
fi

echo "✅ All checks passed! Ready for deployment."
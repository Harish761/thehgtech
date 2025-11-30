#!/bin/bash
# Quick test script for CVE enrichment

echo "=================================================="
echo "CVE Enrichment Quick Test"
echo "=================================================="
echo ""

# Check for NVD API key
if [ -z "$NVD_API_KEY" ]; then
    echo "❌ NVD_API_KEY not set!"
    echo ""
    echo "Please set it first:"
    echo "  export NVD_API_KEY=\"your-key-here\""
    echo ""
    echo "Or add to ~/.zshrc for permanent setup:"
    echo "  echo 'export NVD_API_KEY=\"your-key\"' >> ~/.zshrc"
    echo "  source ~/.zshrc"
    exit 1
fi

echo "✓ NVD_API_KEY found: ${NVD_API_KEY:0:8}...${NVD_API_KEY: -4}"
echo ""

# Check for OpenAI API key (optional)
if [ -z "$OPENAI_API_KEY" ]; then
    echo "⚠️  OPENAI_API_KEY not set (optional)"
    echo "   Titles won't be AI-enhanced, but script will work"
else
    echo "✓ OPENAI_API_KEY found"
fi

echo ""
echo "=================================================="
echo "Running CVE Enrichment..."
echo "=================================================="
echo ""

# Run the enrichment script
python3 enrich_cve_patches.py

echo ""
echo "=================================================="
echo "Test Complete!"
echo "=================================================="
echo ""
echo "Check cve-data.json for results"

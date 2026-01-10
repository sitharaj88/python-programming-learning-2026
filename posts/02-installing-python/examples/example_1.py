"""
Example 1: Verifying Python Installation
Python Programming Learning 2026 - Post 02

This script helps verify that Python is installed correctly.
Run this after installing Python to confirm your setup.

Author: Sitharaj Seenivasan
"""

import sys
import platform

# Print a welcome message
print("=" * 50)
print("Python Installation Verification")
print("=" * 50)

# Check Python version
print(f"\nPython Version: {sys.version}")
print(f"Version Info: {sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}")

# Check if we're using Python 3.12 or higher
if sys.version_info.major >= 3 and sys.version_info.minor >= 12:
    print("✅ Python version is 3.12 or higher - Perfect!")
elif sys.version_info.major >= 3:
    print("⚠️ Python 3 detected, but consider upgrading to 3.12+")
else:
    print("❌ Python 2 detected - Please install Python 3.12+")

# Operating system information
print(f"\nOperating System: {platform.system()}")
print(f"OS Version: {platform.version()}")
print(f"Machine: {platform.machine()}")

# Python executable location
print(f"\nPython Executable: {sys.executable}")

# Simple functionality test
print("\n" + "=" * 50)
print("Functionality Test")
print("=" * 50)

# Test basic arithmetic
result = 10 + 20
print(f"10 + 20 = {result} ✅")

# Test string operations
greeting = "Hello, Python!"
print(f'String test: "{greeting}" ✅')

# Test list operations
numbers = [1, 2, 3, 4, 5]
print(f"List test: {numbers} ✅")

print("\n" + "=" * 50)
print("All tests passed! Your Python installation is working.")
print("=" * 50)

# Output example:
# ==================================================
# Python Installation Verification
# ==================================================
#
# Python Version: 3.12.1 (main, Dec  8 2025, 00:00:00) [Clang 15.0.0]
# Version Info: 3.12.1
# ✅ Python version is 3.12 or higher - Perfect!
#
# Operating System: Darwin
# OS Version: 23.0.0
# Machine: arm64
#
# Python Executable: /usr/local/bin/python3
#
# ==================================================
# Functionality Test
# ==================================================
# 10 + 20 = 30 ✅
# String test: "Hello, Python!" ✅
# List test: [1, 2, 3, 4, 5] ✅
#
# ==================================================
# All tests passed! Your Python installation is working.
# ==================================================

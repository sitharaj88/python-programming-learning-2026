"""
Example 3: Understanding pip - Python Package Manager
Python Programming Learning 2026 - Post 02

This script demonstrates pip concepts and shows how to check
installed packages programmatically.

Author: Sitharaj Seenivasan
"""

import subprocess
import sys

print("=" * 50)
print("Understanding pip - Python's Package Manager")
print("=" * 50)

# What is pip?
print("""
pip stands for "Pip Installs Packages" (recursive acronym).
It's Python's official package installer.

Common pip commands:
  pip install package_name    → Install a package
  pip uninstall package_name  → Remove a package
  pip list                    → Show installed packages
  pip show package_name       → Show package details
  pip freeze                  → List packages in requirements format
""")

# Show pip version
print("-" * 50)
print("Your pip installation:")
print("-" * 50)

try:
    result = subprocess.run(
        [sys.executable, "-m", "pip", "--version"],
        capture_output=True,
        text=True
    )
    print(result.stdout.strip())
except Exception as e:
    print(f"Could not get pip version: {e}")

# Show a few installed packages
print("\n" + "-" * 50)
print("Some built-in modules (no pip install needed):")
print("-" * 50)

# These are standard library modules - always available
standard_modules = [
    ("os", "Operating system interface"),
    ("sys", "System-specific parameters"),
    ("json", "JSON encoder/decoder"),
    ("datetime", "Date and time handling"),
    ("math", "Mathematical functions"),
    ("random", "Random number generation"),
    ("re", "Regular expressions"),
    ("collections", "Specialized container types"),
]

for module, description in standard_modules:
    try:
        __import__(module)
        print(f"  ✅ {module:15} - {description}")
    except ImportError:
        print(f"  ❌ {module:15} - Not available")

# Popular packages you might install later
print("\n" + "-" * 50)
print("Popular packages to install later in your journey:")
print("-" * 50)

popular_packages = [
    ("requests", "HTTP library for web requests"),
    ("numpy", "Numerical computing"),
    ("pandas", "Data analysis"),
    ("flask", "Web framework"),
    ("django", "Full-stack web framework"),
    ("pytest", "Testing framework"),
]

for package, description in popular_packages:
    print(f"  pip install {package:10} → {description}")

print("\n" + "=" * 50)
print("Remember: Use virtual environments for projects!")
print("We'll cover this in Post 79.")
print("=" * 50)

# Output:
# ==================================================
# Understanding pip - Python's Package Manager
# ==================================================
#
# pip stands for "Pip Installs Packages" (recursive acronym).
# It's Python's official package installer.
# ...

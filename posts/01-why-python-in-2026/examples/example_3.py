"""
Example 3: Python's "Batteries Included" Standard Library
Python Programming Learning 2026 - Post 01

This example demonstrates Python's rich standard library -
you can do a lot without installing any additional packages.

Author: Sitharaj Seenivasan
"""

# ============================================
# 1. Working with Dates and Times
# ============================================
from datetime import datetime, timedelta

print("=== Date and Time ===")
now = datetime.now()
print(f"Current time: {now.strftime('%Y-%m-%d %H:%M:%S')}")

# Calculate a date 30 days from now
future = now + timedelta(days=30)
print(f"30 days from now: {future.strftime('%Y-%m-%d')}")

# ============================================
# 2. Working with Random Numbers
# ============================================
import random

print("\n=== Random Numbers ===")
# Random number between 1 and 100
random_num = random.randint(1, 100)
print(f"Random number (1-100): {random_num}")

# Choose a random item from a list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
random_fruit = random.choice(fruits)
print(f"Random fruit: {random_fruit}")

# ============================================
# 3. Working with Math
# ============================================
import math

print("\n=== Math Operations ===")
number = 16
print(f"Square root of {number}: {math.sqrt(number)}")
print(f"Pi: {math.pi:.4f}")
print(f"Ceiling of 4.3: {math.ceil(4.3)}")
print(f"Floor of 4.7: {math.floor(4.7)}")

# ============================================
# 4. Working with Operating System
# ============================================
import os

print("\n=== OS Information ===")
print(f"Current directory: {os.getcwd()}")
print(f"Python file: {os.path.basename(__file__)}")

# ============================================
# 5. Working with JSON Data
# ============================================
import json

print("\n=== JSON Handling ===")
# Convert Python dict to JSON string
data = {"name": "Python", "year": 2026, "awesome": True}
json_string = json.dumps(data, indent=2)
print(f"JSON output:\n{json_string}")

# Parse JSON back to Python
parsed = json.loads(json_string)
print(f"Parsed back: {parsed['name']} is awesome: {parsed['awesome']}")

# ============================================
# Key Takeaway
# ============================================
print("\n=== Key Takeaway ===")
print("All of this was done with Python's BUILT-IN libraries!")
print("No pip install needed for these common tasks.")

# Output will vary based on current time and random values, but format is:
# === Date and Time ===
# Current time: 2026-01-11 00:15:30
# 30 days from now: 2026-02-10
#
# === Random Numbers ===
# Random number (1-100): 42
# Random fruit: cherry
#
# === Math Operations ===
# Square root of 16: 4.0
# Pi: 3.1416
# Ceiling of 4.3: 5
# Floor of 4.7: 4
#
# === OS Information ===
# Current directory: /path/to/examples
# Python file: example_3.py
#
# === JSON Handling ===
# JSON output:
# {
#   "name": "Python",
#   "year": 2026,
#   "awesome": true
# }
# Parsed back: Python is awesome: True

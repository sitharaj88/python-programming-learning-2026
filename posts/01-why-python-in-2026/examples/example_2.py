"""
Example 2: Python's Versatility - Multiple Domains
Python Programming Learning 2026 - Post 01

This example shows how Python can be used across different domains
using just a few lines of code for each task.

Author: Sitharaj Seenivasan
"""

# ============================================
# DOMAIN 1: Basic Calculations (Data Science Preview)
# ============================================
print("=== Basic Calculations ===")

numbers = [10, 20, 30, 40, 50]

# Calculate average
total = sum(numbers)
count = len(numbers)
average = total / count

print(f"Numbers: {numbers}")
print(f"Sum: {total}")
print(f"Average: {average}")

# ============================================
# DOMAIN 2: Text Processing (Automation Preview)
# ============================================
print("\n=== Text Processing ===")

# Clean and format user input
raw_email = "   JOHN.DOE@EXAMPLE.COM   "
clean_email = raw_email.strip().lower()

print(f"Original: '{raw_email}'")
print(f"Cleaned: '{clean_email}'")

# ============================================
# DOMAIN 3: Data Structures (Web Dev Preview)
# ============================================
print("\n=== Data Structures ===")

# A simple user profile (like you'd see in web applications)
user = {
    "name": "Alice",
    "age": 28,
    "skills": ["Python", "Data Analysis", "Machine Learning"],
    "is_active": True
}

print(f"User: {user['name']}")
print(f"Skills: {', '.join(user['skills'])}")

# ============================================
# DOMAIN 4: Logic and Decisions (All Domains)
# ============================================
print("\n=== Decision Making ===")

score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score: {score} → Grade: {grade}")

# ============================================
# Key Takeaway
# ============================================
print("\n=== Key Takeaway ===")
print("Notice how each of these tasks uses clear, readable syntax.")
print("Python lets you express complex ideas with simple code.")

# Output:
# === Basic Calculations ===
# Numbers: [10, 20, 30, 40, 50]
# Sum: 150
# Average: 30.0
#
# === Text Processing ===
# Original: '   JOHN.DOE@EXAMPLE.COM   '
# Cleaned: 'john.doe@example.com'
#
# === Data Structures ===
# User: Alice
# Skills: Python, Data Analysis, Machine Learning
#
# === Decision Making ===
# Score: 85 → Grade: B
#
# === Key Takeaway ===
# Notice how each of these tasks uses clear, readable syntax.
# Python lets you express complex ideas with simple code.

"""
Example 2: Split, Join, and Alignment Methods
Python Programming Learning 2026 - Post 09

This example covers splitting, joining, and text alignment.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Split, Join, and Alignment")
print("=" * 50)

# ============================================
# 1. Split Method
# ============================================
print("\n--- 1. Split ---")

# Split by whitespace (default)
sentence = "Python is a great language"
words = sentence.split()
print(f"Original: '{sentence}'")
print(f"Split by whitespace: {words}")

# Split by specific character
data = "apple,banana,cherry,date"
fruits = data.split(',')
print(f"\nCSV data: '{data}'")
print(f"Split by comma: {fruits}")

# Split with max splits
text = "one-two-three-four-five"
print(f"\nText: '{text}'")
print(f".split('-'): {text.split('-')}")
print(f".split('-', 2): {text.split('-', 2)}")  # Only 2 splits

# Splitlines
multi = "Line 1\nLine 2\nLine 3"
lines = multi.splitlines()
print(f"\nSplitlines: {lines}")

# ============================================
# 2. Join Method
# ============================================
print("\n--- 2. Join ---")

words = ['Python', 'is', 'awesome']

# Join with space
sentence = ' '.join(words)
print(f"Words: {words}")
print(f"' '.join(): '{sentence}'")

# Join with different separators
print(f"'-'.join(): '{'-'.join(words)}'")
print(f"'_'.join(): '{'_'.join(words)}'")
print(f"''.join(): '{''.join(words)}'")  # No separator

# Practical: Create path
parts = ['home', 'user', 'documents', 'file.txt']
path = '/'.join(parts)
print(f"\nPath parts: {parts}")
print(f"Path: '{path}'")

# Practical: Create CSV line
values = ['Alice', '25', 'Seattle']
csv_line = ','.join(values)
print(f"\nValues: {values}")
print(f"CSV: '{csv_line}'")

# ============================================
# 3. Alignment Methods
# ============================================
print("\n--- 3. Alignment ---")

text = "Python"
width = 20

print(f"Text: '{text}' (width: {width})")
print(f".center({width}):    '{text.center(width)}'")
print(f".ljust({width}):     '{text.ljust(width)}'")
print(f".rjust({width}):     '{text.rjust(width)}'")

# With fill character
print(f"\nWith fill characters:")
print(f".center({width}, '-'): '{text.center(width, '-')}'")
print(f".ljust({width}, '.'):  '{text.ljust(width, '.')}'")
print(f".rjust({width}, '.'):  '{text.rjust(width, '.')}'")

# zfill for numbers
print("\n.zfill() for numbers:")
numbers = ['1', '42', '123', '1000']
for num in numbers:
    print(f"  '{num}'.zfill(5) = '{num.zfill(5)}'")

# ============================================
# 4. Practical: Format Table
# ============================================
print("\n--- 4. Formatted Table ---")

headers = ["Name", "Age", "City"]
data = [
    ["Alice", "28", "Seattle"],
    ["Bob", "34", "Portland"],
    ["Charlie", "22", "Boston"],
]

# Print headers
header_line = " | ".join(h.center(10) for h in headers)
separator = "-" * len(header_line)

print(separator)
print(header_line)
print(separator)

# Print data rows
for row in data:
    row_line = " | ".join(cell.center(10) for cell in row)
    print(row_line)

print(separator)

# ============================================
# 5. Method Chaining
# ============================================
print("\n--- 5. Method Chaining ---")

# Clean and format data in one line
raw_input = "   JOHN.DOE@EMAIL.COM   "
email = raw_input.strip().lower()
print(f"Raw: '{raw_input}'")
print(f"Clean: '{email}'")

# Create URL slug
title = "  Hello World! This is a Test...  "
slug = title.strip().lower().replace(" ", "-").replace("!", "").replace(".", "")
print(f"\nTitle: '{title}'")
print(f"Slug: '{slug}'")

print("\n" + "=" * 50)
print("Split, Join, Alignment complete!")
print("=" * 50)

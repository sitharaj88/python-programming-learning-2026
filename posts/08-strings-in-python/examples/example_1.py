"""
Example 1: Creating and Accessing Strings
Python Programming Learning 2026 - Post 08

This example covers string creation, indexing, and slicing.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Creating and Accessing Strings")
print("=" * 50)

# ============================================
# 1. Creating Strings
# ============================================
print("\n--- 1. Creating Strings ---")

# Single quotes
single = 'Hello, Python!'
print(f"Single quotes: {single}")

# Double quotes
double = "Hello, Python!"
print(f"Double quotes: {double}")

# Quotes inside strings
with_apostrophe = "It's a beautiful day"
with_quotes = 'She said "Hello"'
print(f"Apostrophe: {with_apostrophe}")
print(f"Quotes: {with_quotes}")

# Triple quotes (multi-line)
multi_line = """This is a
multi-line
string"""
print(f"Multi-line:\n{multi_line}")

# Raw strings (for paths)
normal_path = "C:\\Users\\name\\folder"
raw_path = r"C:\Users\name\folder"
print(f"\nNormal: {normal_path}")
print(f"Raw: {raw_path}")

# ============================================
# 2. String Indexing
# ============================================
print("\n--- 2. String Indexing ---")

text = "Python"
print(f"String: '{text}'")
print(f"Length: {len(text)}")

# Show index positions
print("\nPositive indexes:")
for i, char in enumerate(text):
    print(f"  text[{i}] = '{char}'")

print("\nNegative indexes:")
for i in range(-len(text), 0):
    print(f"  text[{i}] = '{text[i]}'")

# Accessing characters
print(f"\nFirst character: text[0] = '{text[0]}'")
print(f"Last character: text[-1] = '{text[-1]}'")
print(f"Third character: text[2] = '{text[2]}'")

# ============================================
# 3. String Slicing
# ============================================
print("\n--- 3. String Slicing ---")

text = "Python Programming"
print(f"String: '{text}'")

# Basic slicing [start:stop]
print(f"\ntext[0:6]  = '{text[0:6]}'")   # Python
print(f"text[7:18] = '{text[7:18]}'")    # Programming

# Omitting start or stop
print(f"\ntext[:6]   = '{text[:6]}'")    # From start
print(f"text[7:]   = '{text[7:]}'")      # To end
print(f"text[:]    = '{text[:]}'")       # Full copy

# Slicing with step
print(f"\ntext[::2]  = '{text[::2]}'")   # Every 2nd
print(f"text[::-1] = '{text[::-1]}'")    # Reversed

# ============================================
# 4. Practical Slicing Examples
# ============================================
print("\n--- 4. Practical Examples ---")

# Get file extension
filename = "document.pdf"
extension = filename[-3:]
print(f"File: {filename}")
print(f"Extension: {extension}")

# Get first name from full name
full_name = "John Smith"
first_name = full_name[:full_name.find(' ')]
print(f"\nFull name: {full_name}")
print(f"First name: {first_name}")

# Reverse a word
word = "Python"
reversed_word = word[::-1]
print(f"\nOriginal: {word}")
print(f"Reversed: {reversed_word}")

# Check palindrome
test_word = "radar"
is_palindrome = test_word == test_word[::-1]
print(f"\n'{test_word}' is palindrome: {is_palindrome}")

print("\n" + "=" * 50)
print("String access examples complete!")
print("=" * 50)

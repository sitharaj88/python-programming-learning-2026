"""
Example 1: Essential String Methods
Python Programming Learning 2026 - Post 09

This example covers the most commonly used string methods.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Essential String Methods")
print("=" * 50)

# ============================================
# 1. Case Methods
# ============================================
print("\n--- 1. Case Methods ---")

text = "Hello, World!"

print(f"Original:   '{text}'")
print(f".upper():   '{text.upper()}'")
print(f".lower():   '{text.lower()}'")
print(f".title():   '{text.title()}'")
print(f".capitalize(): '{text.capitalize()}'")
print(f".swapcase(): '{text.swapcase()}'")

# Practical use
name = "jOHN sMITH"
fixed = name.title()
print(f"\nFixed name: '{name}' → '{fixed}'")

# ============================================
# 2. Whitespace Methods
# ============================================
print("\n--- 2. Whitespace Methods ---")

padded = "   Hello, World!   "
print(f"Original: '{padded}'")
print(f".strip():  '{padded.strip()}'")
print(f".lstrip(): '{padded.lstrip()}'")
print(f".rstrip(): '{padded.rstrip()}'")

# Strip specific characters
url = "///path/to/file///"
print(f"\nURL: '{url}'")
print(f".strip('/'): '{url.strip('/')}'")

# ============================================
# 3. Search Methods
# ============================================
print("\n--- 3. Search Methods ---")

text = "Python Programming is fun. Python is great!"
print(f"Text: '{text}'")

# Find
print(f"\n.find('Python'): {text.find('Python')}")  # First occurrence
print(f".find('Java'): {text.find('Java')}")        # Not found = -1
print(f".rfind('Python'): {text.rfind('Python')}")  # Last occurrence

# Count
print(f".count('Python'): {text.count('Python')}")
print(f".count('is'): {text.count('is')}")

# Startswith / Endswith
print(f".startswith('Python'): {text.startswith('Python')}")
print(f".endswith('!'): {text.endswith('!')}")

# ============================================
# 4. Check Methods (is* methods)
# ============================================
print("\n--- 4. Check Methods ---")

test_strings = [
    ("Hello", "letters only"),
    ("12345", "digits only"),
    ("Hello123", "letters and digits"),
    ("   ", "whitespace only"),
    ("HELLO", "uppercase letters"),
    ("hello", "lowercase letters"),
    ("Hello World", "title case"),
]

for string, description in test_strings:
    print(f"'{string}' ({description}):")
    print(f"  .isalpha(): {string.isalpha()}")
    print(f"  .isdigit(): {string.isdigit()}")
    print(f"  .isalnum(): {string.isalnum()}")
    print()

# ============================================
# 5. Replace
# ============================================
print("\n--- 5. Replace Method ---")

text = "Hello, World! Hello, Python!"
print(f"Original: '{text}'")

# Replace all
print(f".replace('Hello', 'Hi'): '{text.replace('Hello', 'Hi')}'")

# Replace limited
print(f".replace('Hello', 'Hi', 1): '{text.replace('Hello', 'Hi', 1)}'")

# Common use: remove characters
dirty = "a...b...c...d"
clean = dirty.replace("...", " ")
print(f"\nClean: '{dirty}' → '{clean}'")

print("\n" + "=" * 50)
print("String methods complete!")
print("=" * 50)

"""
Example 2: String Operations and Immutability
Python Programming Learning 2026 - Post 08

This example covers string operations and demonstrates immutability.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("String Operations and Immutability")
print("=" * 50)

# ============================================
# 1. Concatenation (+)
# ============================================
print("\n--- 1. Concatenation ---")

first_name = "John"
last_name = "Smith"

# Using +
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")

# Building strings
greeting = "Hello"
greeting = greeting + ", "
greeting = greeting + "Python"
greeting = greeting + "!"
print(f"Greeting: {greeting}")

# ============================================
# 2. Repetition (*)
# ============================================
print("\n--- 2. Repetition ---")

line = "-" * 40
print(line)

echo = "Hello! " * 3
print(echo)

box = "* " * 10
print(box)

# ============================================
# 3. Length (len)
# ============================================
print("\n--- 3. Length ---")

messages = ["Hello", "Hello, World!", "Python Programming"]

for msg in messages:
    print(f"'{msg}' has {len(msg)} characters")

# Empty string
empty = ""
print(f"Empty string length: {len(empty)}")

# ============================================
# 4. Membership (in)
# ============================================
print("\n--- 4. Membership Testing ---")

sentence = "Python is a great programming language"

words_to_check = ["Python", "python", "great", "Java", "is"]

for word in words_to_check:
    if word in sentence:
        print(f"  '{word}' IS in sentence")
    else:
        print(f"  '{word}' NOT in sentence")

# Using 'not in'
print(f"\n'Java' not in sentence: {'Java' not in sentence}")

# ============================================
# 5. String Immutability
# ============================================
print("\n--- 5. Immutability ---")

original = "Hello"
print(f"Original: '{original}' (id: {id(original)})")

# Concatenation creates NEW string
modified = original + " World"
print(f"Modified: '{modified}' (id: {id(modified)})")
print(f"Original unchanged: '{original}'")

# This would fail:
# original[0] = 'J'  # TypeError!

# Instead, create new string
fixed = "J" + original[1:]
print(f"Fixed: '{fixed}'")

# ============================================
# 6. String Comparisons
# ============================================
print("\n--- 6. Comparisons ---")

# Equality
print(f"'hello' == 'hello': {'hello' == 'hello'}")
print(f"'hello' == 'Hello': {'hello' == 'Hello'}")

# Ordering (lexicographic)
print(f"\n'apple' < 'banana': {'apple' < 'banana'}")
print(f"'apple' < 'Apple': {'apple' < 'Apple'}")  # lowercase > uppercase

# Compare alphabetically
words = ["banana", "Apple", "cherry", "apple"]
sorted_words = sorted(words)
print(f"\nOriginal: {words}")
print(f"Sorted: {sorted_words}")

# Case-insensitive sort
sorted_case_insensitive = sorted(words, key=str.lower)
print(f"Sorted (case-insensitive): {sorted_case_insensitive}")

# ============================================
# 7. Combining Operations
# ============================================
print("\n--- 7. Combined Example ---")

# Creating a simple text box
title = "Python"
width = len(title) + 4

border = "+" + "-" * (width - 2) + "+"
content = "| " + title + " |"

print(border)
print(content)
print(border)

print("\n" + "=" * 50)
print("String operations complete!")
print("=" * 50)

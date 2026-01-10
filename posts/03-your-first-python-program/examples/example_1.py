"""
Example 1: The print() Function - Complete Guide
Python Programming Learning 2026 - Post 03

This example demonstrates all the ways to use the print() function.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("The print() Function - Complete Guide")
print("=" * 50)

# ============================================
# 1. Basic Printing
# ============================================
print("\n--- 1. Basic Printing ---")

print("Hello, World!")
print('Single quotes work too!')
print(42)
print(3.14159)

# ============================================
# 2. Printing Multiple Items
# ============================================
print("\n--- 2. Printing Multiple Items ---")

# Python automatically adds spaces between items
print("Python", "is", "awesome")
print("Score:", 100)
print("Name:", "Alice", "| Age:", 30)

# ============================================
# 3. The sep Parameter
# ============================================
print("\n--- 3. The sep Parameter ---")

# Default separator is a space
print("A", "B", "C")  # A B C

# Custom separators
print("A", "B", "C", sep="-")  # A-B-C
print("2026", "01", "11", sep="/")  # 2026/01/11
print("apple", "banana", "cherry", sep=", ")  # apple, banana, cherry
print("P", "Y", "T", "H", "O", "N", sep="")  # PYTHON (no separator)

# ============================================
# 4. The end Parameter
# ============================================
print("\n--- 4. The end Parameter ---")

# Default end is newline (\n)
print("Line 1")
print("Line 2")

# Custom endings
print("Loading", end="...")
print("Done!")

print("Same", end=" ")
print("line", end=" ")
print("output")

# ============================================
# 5. Combining sep and end
# ============================================
print("\n--- 5. Combining sep and end ---")

print("X", "Y", "Z", sep="-", end=" | ")
print("A", "B", "C", sep="-")

# ============================================
# 6. Printing Empty Lines
# ============================================
print("\n--- 6. Empty Lines ---")

print("Before empty line")
print()  # Prints an empty line
print("After empty line")

# ============================================
# 7. Printing Special Characters
# ============================================
print("\n--- 7. Special Characters ---")

print("Tab:\tIndented text")
print("Newline:\nSecond line")
print("Backslash: \\")
print("Quotes: \"Hello\" and 'World'")

# ============================================
# 8. String Multiplication
# ============================================
print("\n--- 8. String Multiplication ---")

print("=" * 30)
print("*" * 20)
print("-" * 40)

print("=" * 50)
print("All print() examples complete!")
print("=" * 50)

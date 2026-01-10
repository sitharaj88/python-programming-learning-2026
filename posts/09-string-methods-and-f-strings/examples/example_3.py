"""
Example 3: f-String Formatting Masterclass
Python Programming Learning 2026 - Post 09

This example covers all f-string formatting capabilities.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("f-String Formatting Masterclass")
print("=" * 50)

# ============================================
# 1. Basic f-Strings
# ============================================
print("\n--- 1. Basic f-Strings ---")

name = "Alice"
age = 30
city = "Seattle"

# Simple variable insertion
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"{name} is {age} years old and lives in {city}.")

# ============================================
# 2. Expressions in f-Strings
# ============================================
print("\n--- 2. Expressions ---")

x, y = 10, 5

print(f"{x} + {y} = {x + y}")
print(f"{x} - {y} = {x - y}")
print(f"{x} * {y} = {x * y}")
print(f"{x} / {y} = {x / y}")

# Function calls
name = "python"
print(f"Uppercase: {name.upper()}")
print(f"Length: {len(name)}")

# ============================================
# 3. Number Formatting
# ============================================
print("\n--- 3. Number Formatting ---")

# Decimal places
pi = 3.14159265359
print(f"Pi (default): {pi}")
print(f"Pi (2 places): {pi:.2f}")
print(f"Pi (4 places): {pi:.4f}")
print(f"Pi (0 places): {pi:.0f}")

# Thousands separator
big = 1234567890
print(f"\nBig number: {big}")
print(f"With commas: {big:,}")
print(f"With underscores: {big:_}")

# Percentage
rate = 0.8567
print(f"\nRate: {rate}")
print(f"As percentage: {rate:.1%}")
print(f"As percentage: {rate:.2%}")

# ============================================
# 4. Width and Alignment
# ============================================
print("\n--- 4. Width and Alignment ---")

text = "Hi"
num = 42

# Text alignment
print(f"|{text:10}|  ← left (default for strings)")
print(f"|{text:>10}| ← right")
print(f"|{text:^10}| ← center")

# With fill character
print(f"|{text:*<10}| ← left, fill with *")
print(f"|{text:*>10}| ← right, fill with *")
print(f"|{text:*^10}| ← center, fill with *")

# Number alignment
print(f"\n|{num:10}|  ← right (default for numbers)")
print(f"|{num:<10}| ← left")
print(f"|{num:010}| ← zero-padded")

# ============================================
# 5. Format Types
# ============================================
print("\n--- 5. Format Types ---")

num = 255

print(f"Decimal: {num:d}")
print(f"Binary: {num:b}")
print(f"Octal: {num:o}")
print(f"Hex (lower): {num:x}")
print(f"Hex (upper): {num:X}")
print(f"Character: {num:c}")  # ÿ

sci = 12345.6789
print(f"\nScientific: {sci:e}")
print(f"Scientific: {sci:.2e}")
print(f"Fixed: {sci:f}")
print(f"General: {sci:g}")

# ============================================
# 6. Debug Mode (Python 3.8+)
# ============================================
print("\n--- 6. Debug Mode (=) ---")

x = 10
y = 20
name = "Python"

print(f"{x=}")
print(f"{y=}")
print(f"{name=}")
print(f"{x + y=}")
print(f"{name.upper()=}")

# ============================================
# 7. Practical: Receipt Formatting
# ============================================
print("\n--- 7. Practical: Receipt ---")

items = [
    ("Widget", 2, 15.99),
    ("Gadget", 1, 24.50),
    ("Gizmo", 3, 8.75),
]

print("=" * 45)
print(f"{'Item':<15} {'Qty':>5} {'Price':>10} {'Total':>10}")
print("-" * 45)

grand_total = 0
for name, qty, price in items:
    total = qty * price
    grand_total += total
    print(f"{name:<15} {qty:>5} ${price:>9.2f} ${total:>9.2f}")

print("-" * 45)
tax = grand_total * 0.08
final = grand_total + tax
print(f"{'Subtotal:':<22} ${grand_total:>20.2f}")
print(f"{'Tax (8%):':<22} ${tax:>20.2f}")
print(f"{'Total:':<22} ${final:>20.2f}")
print("=" * 45)

print("\n" + "=" * 50)
print("f-String formatting complete!")
print("=" * 50)

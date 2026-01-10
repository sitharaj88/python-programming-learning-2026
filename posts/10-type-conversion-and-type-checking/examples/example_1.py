"""
Example 1: Basic Type Conversion Functions
Python Programming Learning 2026 - Post 10

This example demonstrates all the basic type conversion functions.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Basic Type Conversion Functions")
print("=" * 50)

# ============================================
# 1. Converting to Integer (int)
# ============================================
print("\n--- 1. int() Conversion ---")

# From string
print(f"int('42') = {int('42')}")
print(f"int('-17') = {int('-17')}")

# From float (truncates toward zero)
print(f"int(3.9) = {int(3.9)}")
print(f"int(-3.9) = {int(-3.9)}")
print(f"int(3.1) = {int(3.1)}")

# From boolean
print(f"int(True) = {int(True)}")
print(f"int(False) = {int(False)}")

# With base
print(f"int('1010', 2) = {int('1010', 2)} (binary)")
print(f"int('ff', 16) = {int('ff', 16)} (hex)")
print(f"int('77', 8) = {int('77', 8)} (octal)")

# ============================================
# 2. Converting to Float (float)
# ============================================
print("\n--- 2. float() Conversion ---")

# From string
print(f"float('3.14') = {float('3.14')}")
print(f"float('-2.5') = {float('-2.5')}")
print(f"float('42') = {float('42')}")

# From integer
print(f"float(42) = {float(42)}")

# Scientific notation
print(f"float('3.5e10') = {float('3.5e10')}")
print(f"float('1.5e-5') = {float('1.5e-5')}")

# Special values
print(f"float('inf') = {float('inf')}")
print(f"float('-inf') = {float('-inf')}")

# ============================================
# 3. Converting to String (str)
# ============================================
print("\n--- 3. str() Conversion ---")

# From numbers
print(f"str(42) = '{str(42)}'")
print(f"str(3.14) = '{str(3.14)}'")
print(f"str(-17) = '{str(-17)}'")

# From boolean
print(f"str(True) = '{str(True)}'")
print(f"str(False) = '{str(False)}'")

# From collections
print(f"str([1, 2, 3]) = '{str([1, 2, 3])}'")
print(f"str({{'a': 1}}) = '{str({'a': 1})}'")

# ============================================
# 4. Converting to Boolean (bool)
# ============================================
print("\n--- 4. bool() Conversion ---")

print("Truthy values (→ True):")
truthy = [1, -1, 3.14, "hello", [1], {"a": 1}]
for val in truthy:
    print(f"  bool({str(val):15}) = {bool(val)}")

print("\nFalsy values (→ False):")
falsy = [0, 0.0, "", [], {}, None]
for val in falsy:
    print(f"  bool({str(val):15}) = {bool(val)}")

# ============================================
# 5. Converting to List, Tuple, Set
# ============================================
print("\n--- 5. Collection Conversions ---")

# String to list
print(f"list('hello') = {list('hello')}")

# Range to list
print(f"list(range(5)) = {list(range(5))}")

# List to tuple
print(f"tuple([1, 2, 3]) = {tuple([1, 2, 3])}")

# List to set (removes duplicates)
print(f"set([1, 2, 2, 3, 3]) = {set([1, 2, 2, 3, 3])}")

# Tuple to list
print(f"list((1, 2, 3)) = {list((1, 2, 3))}")

# Dict keys/values
d = {"a": 1, "b": 2}
print(f"list(d.keys()) = {list(d.keys())}")
print(f"list(d.values()) = {list(d.values())}")

print("\n" + "=" * 50)
print("Basic conversion complete!")
print("=" * 50)

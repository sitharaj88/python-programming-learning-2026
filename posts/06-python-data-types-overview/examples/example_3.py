"""
Example 3: Mutable vs Immutable Types
Python Programming Learning 2026 - Post 06

This example demonstrates the critical difference between
mutable and immutable types in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Mutable vs Immutable Types")
print("=" * 50)

# ============================================
# 1. Immutable Types Demo (int, str, tuple)
# ============================================
print("\n--- 1. Immutable Types ---")

# Integers are immutable
print("\n[Integer]")
a = 10
print(f"a = {a}, id(a) = {id(a)}")

a = a + 5  # Creates NEW object
print(f"a = {a}, id(a) = {id(a)}  ← Different id (new object)")

# Strings are immutable
print("\n[String]")
s = "hello"
print(f"s = '{s}', id(s) = {id(s)}")

s = s.upper()  # Creates NEW string
print(f"s = '{s}', id(s) = {id(s)}  ← Different id (new object)")

# Tuples are immutable
print("\n[Tuple]")
t = (1, 2, 3)
print(f"t = {t}, id(t) = {id(t)}")
# t[0] = 10  # This would raise TypeError!
print("Cannot modify tuple elements")

# ============================================
# 2. Mutable Types Demo (list, dict, set)
# ============================================
print("\n--- 2. Mutable Types ---")

# Lists are mutable
print("\n[List]")
my_list = [1, 2, 3]
print(f"my_list = {my_list}, id = {id(my_list)}")

my_list.append(4)  # Modifies SAME object
print(f"my_list = {my_list}, id = {id(my_list)}  ← Same id!")

# Dictionaries are mutable
print("\n[Dictionary]")
my_dict = {"a": 1}
print(f"my_dict = {my_dict}, id = {id(my_dict)}")

my_dict["b"] = 2  # Modifies SAME object
print(f"my_dict = {my_dict}, id = {id(my_dict)}  ← Same id!")

# Sets are mutable
print("\n[Set]")
my_set = {1, 2, 3}
print(f"my_set = {my_set}, id = {id(my_set)}")

my_set.add(4)  # Modifies SAME object
print(f"my_set = {my_set}, id = {id(my_set)}  ← Same id!")

# ============================================
# 3. The Sharing Problem with Mutables
# ============================================
print("\n--- 3. The Sharing Problem ---")

print("\n[Immutable - Safe to share]")
a = "hello"
b = a
b = b.upper()

print(f"a = '{a}'  (original unchanged)")
print(f"b = '{b}'  (new value)")

print("\n[Mutable - Be careful when sharing!]")
list_a = [1, 2, 3]
list_b = list_a  # list_b points to SAME list

print(f"Before: list_a = {list_a}, list_b = {list_b}")
list_b.append(4)
print(f"After:  list_a = {list_a}, list_b = {list_b}")
print("Both changed because they're the same object!")

# ============================================
# 4. How to Copy Mutable Objects
# ============================================
print("\n--- 4. Making Copies ---")

original = [1, 2, 3]

# Method 1: .copy()
copy1 = original.copy()

# Method 2: list() constructor
copy2 = list(original)

# Method 3: slice
copy3 = original[:]

# Now modify copies
copy1.append(4)
copy2.append(5)
copy3.append(6)

print(f"Original: {original}  (unchanged)")
print(f"Copy 1:   {copy1}")
print(f"Copy 2:   {copy2}")
print(f"Copy 3:   {copy3}")

# ============================================
# 5. Deep vs Shallow Copy
# ============================================
print("\n--- 5. Deep vs Shallow Copy ---")

import copy

# Nested list
nested = [[1, 2], [3, 4]]

# Shallow copy - nested lists are still shared
shallow = nested.copy()

# Deep copy - everything is copied
deep = copy.deepcopy(nested)

# Modify nested list in shallow copy
shallow[0].append(99)

print(f"Original: {nested}  ← Also changed!")
print(f"Shallow:  {shallow}")
print(f"Deep:     {deep}  ← Not affected")

print("\nShallow copy only copies the outer list")
print("Deep copy copies everything recursively")

# ============================================
# 6. Quick Reference
# ============================================
print("\n" + "=" * 50)
print("Mutability Quick Reference")
print("=" * 50)

print("""
IMMUTABLE (cannot change):
  ❄️ int, float, complex
  ❄️ str (string)
  ❄️ tuple
  ❄️ frozenset
  ❄️ bool

MUTABLE (can change):
  🔥 list
  🔥 dict (dictionary)
  🔥 set
""")

print("=" * 50)
print("Mutability examples complete!")
print("=" * 50)

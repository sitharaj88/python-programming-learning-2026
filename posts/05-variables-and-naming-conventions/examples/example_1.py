"""
Example 1: Creating and Using Variables
Python Programming Learning 2026 - Post 05

This example demonstrates how to create, assign,
and use variables in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Creating and Using Variables")
print("=" * 50)

# ============================================
# 1. Basic Variable Assignment
# ============================================
print("\n--- 1. Basic Assignment ---")

# Creating variables with different types
name = "Alice"           # String
age = 25                 # Integer
height = 5.7             # Float
is_student = True        # Boolean

print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Is Student: {is_student}")

# ============================================
# 2. Variables Can Change
# ============================================
print("\n--- 2. Variables Can Change ---")

score = 0
print(f"Initial score: {score}")

score = 10
print(f"After first round: {score}")

score = 25
print(f"After second round: {score}")

# Even the type can change (dynamic typing)
value = 42
print(f"value = {value} (type: {type(value).__name__})")

value = "forty-two"
print(f"value = {value} (type: {type(value).__name__})")

# ============================================
# 3. Using Variables in Expressions
# ============================================
print("\n--- 3. Variables in Expressions ---")

price = 100
tax_rate = 0.08
quantity = 3

# Using variables in calculations
subtotal = price * quantity
tax = subtotal * tax_rate
total = subtotal + tax

print(f"Price per item: ${price}")
print(f"Quantity: {quantity}")
print(f"Subtotal: ${subtotal}")
print(f"Tax (8%): ${tax:.2f}")
print(f"Total: ${total:.2f}")

# ============================================
# 4. Variables Reference Objects
# ============================================
print("\n--- 4. Variable References ---")

# Simple values (immutable) - assignment creates new object
a = 10
b = a    # b gets a copy of the value
b = 20   # Changing b doesn't affect a
print(f"a = {a}, b = {b}")

# Lists (mutable) - assignment creates reference to same object
list_a = [1, 2, 3]
list_b = list_a      # Both point to SAME list
list_b.append(4)     # Modifying through list_b
print(f"list_a = {list_a}")  # list_a also changed!
print(f"list_b = {list_b}")

# To create an independent copy:
list_c = list_a.copy()
list_c.append(5)
print(f"list_a = {list_a}")  # Unchanged
print(f"list_c = {list_c}")  # Only list_c has 5

# ============================================
# 5. Checking Variable Information
# ============================================
print("\n--- 5. Variable Information ---")

message = "Hello, Python!"

print(f"Value: {message}")
print(f"Type: {type(message)}")
print(f"ID (memory address): {id(message)}")
print(f"Length: {len(message)}")

print("\n" + "=" * 50)
print("Variable basics complete!")
print("=" * 50)

"""
Example 3: Advanced Assignment Patterns
Python Programming Learning 2026 - Post 05

This example demonstrates various ways to assign
values to variables in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Advanced Assignment Patterns")
print("=" * 50)

# ============================================
# 1. Multiple Assignment (Same Value)
# ============================================
print("\n--- 1. Multiple Assignment (Same Value) ---")

# Assign same value to multiple variables
a = b = c = 0
print(f"a = {a}, b = {b}, c = {c}")

# Useful for initialization
red = green = blue = 255
print(f"RGB: ({red}, {green}, {blue})")

# ============================================
# 2. Multiple Assignment (Different Values)
# ============================================
print("\n--- 2. Multiple Assignment (Different Values) ---")

# Assign different values in one line
x, y, z = 1, 2, 3
print(f"x = {x}, y = {y}, z = {z}")

# Practical example
name, age, city = "Alice", 25, "Seattle"
print(f"{name} is {age} years old, lives in {city}")

# From a list/tuple
coordinates = (10.5, 20.3, 30.1)
lat, lng, alt = coordinates
print(f"Latitude: {lat}, Longitude: {lng}, Altitude: {alt}")

# ============================================
# 3. Variable Swapping
# ============================================
print("\n--- 3. Variable Swapping ---")

# Traditional way (other languages)
a = "first"
b = "second"
print(f"Before swap: a = '{a}', b = '{b}'")

# temp = a
# a = b
# b = temp

# Pythonic way (no temp variable needed!)
a, b = b, a
print(f"After swap: a = '{a}', b = '{b}'")

# Swapping numbers
x, y = 10, 20
print(f"Before: x = {x}, y = {y}")
x, y = y, x
print(f"After: x = {x}, y = {y}")

# ============================================
# 4. Unpacking with * (Star/Splat)
# ============================================
print("\n--- 4. Extended Unpacking ---")

numbers = [1, 2, 3, 4, 5]

# Get first and rest
first, *rest = numbers
print(f"First: {first}, Rest: {rest}")

# Get first, last, and middle
first, *middle, last = numbers
print(f"First: {first}, Middle: {middle}, Last: {last}")

# Get first two and rest
first, second, *others = numbers
print(f"First: {first}, Second: {second}, Others: {others}")

# Get last only
*beginning, last = numbers
print(f"Beginning: {beginning}, Last: {last}")

# ============================================
# 5. Augmented Assignment Operators
# ============================================
print("\n--- 5. Augmented Assignment ---")

# Addition
count = 0
count += 1   # count = count + 1
count += 5   # count = count + 5
print(f"count after += : {count}")

# Subtraction
balance = 100
balance -= 25  # balance = balance - 25
print(f"balance after -= : {balance}")

# Multiplication
value = 3
value *= 4    # value = value * 4
print(f"value after *= : {value}")

# Division
amount = 100
amount /= 4   # amount = amount / 4
print(f"amount after /= : {amount}")

# Floor division
total = 17
total //= 5   # total = total // 5 (integer division)
print(f"total after //= : {total}")

# Modulo
remainder = 17
remainder %= 5  # remainder = remainder % 5
print(f"remainder after %= : {remainder}")

# Power
base = 2
base **= 8    # base = base ** 8
print(f"base after **= : {base}")

# String concatenation
message = "Hello"
message += " World"  # message = message + " World"
print(f"message after += : {message}")

# List extension
items = [1, 2]
items += [3, 4]  # items = items + [3, 4]
print(f"items after += : {items}")

# ============================================
# 6. Practical Complete Example
# ============================================
print("\n--- 6. Complete Example ---")

# Shopping cart example using various assignment patterns
DISCOUNT_RATE = 0.10
TAX_RATE = 0.08

# Product data
products = [
    ("Widget", 25.00, 2),
    ("Gadget", 15.50, 3),
    ("Gizmo", 42.00, 1)
]

total = 0

print("Shopping Cart:")
print("-" * 40)

for product_name, unit_price, quantity in products:
    subtotal = unit_price * quantity
    total += subtotal  # Augmented assignment
    print(f"{product_name}: ${unit_price} x {quantity} = ${subtotal:.2f}")

print("-" * 40)

# Apply discount
discount = total * DISCOUNT_RATE
total -= discount

# Apply tax
tax = total * TAX_RATE
total += tax

print(f"Subtotal: ${total + discount - tax:.2f}")
print(f"Discount (10%): -${discount:.2f}")
print(f"Tax (8%): +${tax:.2f}")
print(f"Total: ${total:.2f}")

print("\n" + "=" * 50)
print("Assignment patterns complete!")
print("=" * 50)

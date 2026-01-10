"""
Example 1: Numeric Types and Arithmetic Operators
Python Programming Learning 2026 - Post 07

This example covers integers, floats, and all arithmetic operators.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Numeric Types and Arithmetic Operators")
print("=" * 50)

# ============================================
# 1. Integer Examples
# ============================================
print("\n--- 1. Integers ---")

count = 42
negative = -17
big_number = 999_999_999_999  # Underscore for readability

print(f"Count: {count}")
print(f"Negative: {negative}")
print(f"Big number: {big_number:,}")  # Format with commas

# Python can handle HUGE integers
huge = 10 ** 100  # 10 with 100 zeros
print(f"Huge number has {len(str(huge))} digits!")

# ============================================
# 2. Float Examples
# ============================================
print("\n--- 2. Floats ---")

price = 19.99
temperature = -3.5
pi = 3.14159

print(f"Price: ${price}")
print(f"Temperature: {temperature}°C")
print(f"Pi: {pi}")

# Scientific notation
light_speed = 3e8  # 3 × 10^8
tiny = 1.5e-10

print(f"Speed of light: {light_speed:,.0f} m/s")
print(f"Tiny number: {tiny}")

# ============================================
# 3. Basic Arithmetic
# ============================================
print("\n--- 3. Basic Arithmetic ---")

a, b = 15, 4

print(f"a = {a}, b = {b}")
print(f"Addition:       {a} + {b} = {a + b}")
print(f"Subtraction:    {a} - {b} = {a - b}")
print(f"Multiplication: {a} * {b} = {a * b}")
print(f"Division:       {a} / {b} = {a / b}")

# ============================================
# 4. Floor Division and Modulo
# ============================================
print("\n--- 4. Floor Division & Modulo ---")

print(f"Floor Division: {a} // {b} = {a // b}")
print(f"Modulo:         {a} % {b} = {a % b}")

# Verify: a = (a // b) * b + (a % b)
print(f"\nVerification: {a} = ({a // b}) * {b} + {a % b}")
print(f"             {a} = {(a // b) * b + (a % b)}")

# Practical use of modulo
print("\n--- Modulo Use Cases ---")
number = 17

if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# ============================================
# 5. Exponentiation
# ============================================
print("\n--- 5. Exponentiation ---")

print(f"2 ** 3 = {2 ** 3}")    # 8
print(f"10 ** 2 = {10 ** 2}")  # 100
print(f"2 ** 10 = {2 ** 10}")  # 1024

# Roots using fractional exponent
print(f"Square root of 16: 16 ** 0.5 = {16 ** 0.5}")
print(f"Cube root of 27: 27 ** (1/3) = {27 ** (1/3)}")

# ============================================
# 6. Operator Precedence
# ============================================
print("\n--- 6. Operator Precedence ---")

# Without parentheses
result1 = 2 + 3 * 4
print(f"2 + 3 * 4 = {result1} (multiplication first)")

# With parentheses
result2 = (2 + 3) * 4
print(f"(2 + 3) * 4 = {result2} (parentheses first)")

# Complex expression
result3 = 2 ** 3 + 4 * 5 - 6 / 2
print(f"2 ** 3 + 4 * 5 - 6 / 2 = {result3}")
print("  Step 1: 2 ** 3 = 8")
print("  Step 2: 4 * 5 = 20")
print("  Step 3: 6 / 2 = 3")
print("  Step 4: 8 + 20 - 3 = 25")

print("\n" + "=" * 50)
print("Arithmetic examples complete!")
print("=" * 50)

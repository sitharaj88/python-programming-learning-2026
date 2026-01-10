"""
Example 2: Built-in Numeric Functions
Python Programming Learning 2026 - Post 07

This example covers Python's built-in functions for numbers.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Built-in Numeric Functions")
print("=" * 50)

# ============================================
# 1. abs() - Absolute Value
# ============================================
print("\n--- 1. abs() ---")

print(f"abs(-5) = {abs(-5)}")
print(f"abs(5) = {abs(5)}")
print(f"abs(-3.14) = {abs(-3.14)}")
print(f"abs(0) = {abs(0)}")

# ============================================
# 2. round() - Rounding
# ============================================
print("\n--- 2. round() ---")

print(f"round(3.7) = {round(3.7)}")
print(f"round(3.2) = {round(3.2)}")
print(f"round(3.5) = {round(3.5)}")  # Banker's rounding
print(f"round(4.5) = {round(4.5)}")  # Rounds to even

# With decimal places
print(f"round(3.14159, 2) = {round(3.14159, 2)}")
print(f"round(3.14159, 4) = {round(3.14159, 4)}")

# Rounding to tens, hundreds
print(f"round(1234, -1) = {round(1234, -1)}")  # 1230
print(f"round(1234, -2) = {round(1234, -2)}")  # 1200

# ============================================
# 3. pow() - Power
# ============================================
print("\n--- 3. pow() ---")

print(f"pow(2, 3) = {pow(2, 3)}")      # 8
print(f"pow(10, 2) = {pow(10, 2)}")    # 100

# Three-argument form: pow(base, exp, mod)
print(f"pow(2, 10, 100) = {pow(2, 10, 100)}")  # 2^10 % 100 = 1024 % 100 = 24

# ============================================
# 4. divmod() - Division and Modulo
# ============================================
print("\n--- 4. divmod() ---")

quotient, remainder = divmod(17, 5)
print(f"divmod(17, 5) = ({quotient}, {remainder})")
print(f"  17 = 5 × {quotient} + {remainder}")

# Time conversion example
total_minutes = 137
hours, minutes = divmod(total_minutes, 60)
print(f"\n{total_minutes} minutes = {hours} hours {minutes} minutes")

# ============================================
# 5. min() and max()
# ============================================
print("\n--- 5. min() and max() ---")

numbers = [45, 12, 78, 3, 56]

print(f"Numbers: {numbers}")
print(f"min: {min(numbers)}")
print(f"max: {max(numbers)}")

# With multiple arguments
print(f"min(10, 5, 20) = {min(10, 5, 20)}")
print(f"max(10, 5, 20) = {max(10, 5, 20)}")

# With key function
words = ["apple", "pie", "delicious"]
print(f"\nWords: {words}")
print(f"Shortest word: {min(words, key=len)}")
print(f"Longest word: {max(words, key=len)}")

# ============================================
# 6. sum()
# ============================================
print("\n--- 6. sum() ---")

numbers = [1, 2, 3, 4, 5]
print(f"Numbers: {numbers}")
print(f"sum: {sum(numbers)}")

# With start value
print(f"sum with start=10: {sum(numbers, 10)}")

# Calculate average
average = sum(numbers) / len(numbers)
print(f"Average: {average}")

# ============================================
# 7. Conversion Functions
# ============================================
print("\n--- 7. Type Conversion ---")

# int() - convert to integer
print(f'int("42") = {int("42")}')
print(f"int(3.9) = {int(3.9)}")  # Truncates (not rounds)
print(f"int(-3.9) = {int(-3.9)}")

# float() - convert to float
print(f'float("3.14") = {float("3.14")}')
print(f"float(42) = {float(42)}")

# Binary, Octal, Hexadecimal
print(f"\nbinary 1010: int('1010', 2) = {int('1010', 2)}")
print(f"octal 17: int('17', 8) = {int('17', 8)}")
print(f"hex FF: int('FF', 16) = {int('FF', 16)}")

# Reverse: number to other bases
print(f"\n42 in binary: {bin(42)}")
print(f"42 in octal: {oct(42)}")
print(f"42 in hex: {hex(42)}")

print("\n" + "=" * 50)
print("Built-in functions complete!")
print("=" * 50)

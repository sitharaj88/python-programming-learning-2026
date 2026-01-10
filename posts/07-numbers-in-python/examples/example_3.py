"""
Example 3: The math Module and Practical Calculations
Python Programming Learning 2026 - Post 07

This example covers the math module and real-world number usage.

Author: Sitharaj Seenivasan
"""

import math

print("=" * 50)
print("The math Module and Practical Calculations")
print("=" * 50)

# ============================================
# 1. Math Constants
# ============================================
print("\n--- 1. Math Constants ---")

print(f"Pi (π): {math.pi}")
print(f"Euler's number (e): {math.e}")
print(f"Tau (τ = 2π): {math.tau}")
print(f"Infinity: {math.inf}")
print(f"Not a Number: {math.nan}")

# ============================================
# 2. Root Functions
# ============================================
print("\n--- 2. Roots ---")

print(f"sqrt(16) = {math.sqrt(16)}")
print(f"sqrt(2) = {math.sqrt(2):.6f}")

# Other roots using power
print(f"Cube root of 27: {27 ** (1/3):.6f}")
print(f"Fourth root of 16: {16 ** (1/4):.6f}")

# ============================================
# 3. Rounding Functions
# ============================================
print("\n--- 3. Rounding ---")

values = [1.4, 1.5, 1.6, -1.4, -1.5, -1.6]

print("Value   | floor | ceil  | trunc | round")
print("-" * 45)
for v in values:
    print(f"{v:7.1f} | {math.floor(v):5} | {math.ceil(v):5} | {math.trunc(v):5} | {round(v):5}")

# ============================================
# 4. Logarithms
# ============================================
print("\n--- 4. Logarithms ---")

print(f"log(e) = {math.log(math.e)}")       # Natural log
print(f"log10(100) = {math.log10(100)}")     # Base 10
print(f"log2(8) = {math.log2(8)}")           # Base 2
print(f"log(100, 10) = {math.log(100, 10)}") # Custom base

# ============================================
# 5. Trigonometry
# ============================================
print("\n--- 5. Trigonometry ---")

angle_deg = 45
angle_rad = math.radians(angle_deg)

print(f"Angle: {angle_deg}° = {angle_rad:.4f} radians")
print(f"sin({angle_deg}°) = {math.sin(angle_rad):.6f}")
print(f"cos({angle_deg}°) = {math.cos(angle_rad):.6f}")
print(f"tan({angle_deg}°) = {math.tan(angle_rad):.6f}")

# ============================================
# 6. Factorial and Combinations
# ============================================
print("\n--- 6. Factorial & Combinations ---")

n = 5
print(f"{n}! = {math.factorial(n)}")

# Combinations: C(n, k) = n! / (k! * (n-k)!)
print(f"C(10, 3) = {math.comb(10, 3)}")  # 120

# Permutations: P(n, k) = n! / (n-k)!
print(f"P(10, 3) = {math.perm(10, 3)}")  # 720

# ============================================
# 7. Practical: Circle Calculations
# ============================================
print("\n--- 7. Circle Calculations ---")

radius = 5

# Area = π × r²
area = math.pi * radius ** 2
print(f"Circle with radius {radius}:")
print(f"  Area = π × r² = {area:.2f}")

# Circumference = 2 × π × r
circumference = 2 * math.pi * radius
print(f"  Circumference = 2πr = {circumference:.2f}")

# ============================================
# 8. Practical: Distance Calculation
# ============================================
print("\n--- 8. Distance Between Points ---")

# Two points
x1, y1 = 1, 2
x2, y2 = 4, 6

# Distance formula: sqrt((x2-x1)² + (y2-y1)²)
distance = math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
print(f"Point A: ({x1}, {y1})")
print(f"Point B: ({x2}, {y2})")
print(f"Distance: {distance:.2f}")

# Or use math.dist (Python 3.8+)
distance2 = math.dist([x1, y1], [x2, y2])
print(f"Using math.dist: {distance2:.2f}")

# ============================================
# 9. Financial Calculation: Compound Interest
# ============================================
print("\n--- 9. Compound Interest ---")

principal = 1000        # Initial investment
rate = 0.05             # 5% annual interest
years = 10              # Investment period
compounds = 12          # Monthly compounding

# Formula: A = P(1 + r/n)^(nt)
amount = principal * (1 + rate / compounds) ** (compounds * years)
interest_earned = amount - principal

print(f"Initial: ${principal:,.2f}")
print(f"Rate: {rate * 100}% annually")
print(f"Period: {years} years")
print(f"Compounding: {compounds} times/year")
print(f"Final amount: ${amount:,.2f}")
print(f"Interest earned: ${interest_earned:,.2f}")

# ============================================
# 10. Floating-Point Precision
# ============================================
print("\n--- 10. Floating-Point Precision ---")

print(f"0.1 + 0.2 = {0.1 + 0.2}")  # Imprecise!
print(f"Expected: 0.3")

# Solutions:
print(f"\nUsing round(): {round(0.1 + 0.2, 1)}")

from decimal import Decimal
result = Decimal('0.1') + Decimal('0.2')
print(f"Using Decimal: {result}")

# math.isclose for comparisons
print(f"\nmath.isclose(0.1 + 0.2, 0.3): {math.isclose(0.1 + 0.2, 0.3)}")

print("\n" + "=" * 50)
print("Math module examples complete!")
print("=" * 50)

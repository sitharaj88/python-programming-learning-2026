# Post 07: Numbers in Python

[← Previous: Python Data Types Overview](../06-python-data-types-overview/) | [Back to Index](../../README.md) | [Next: Strings in Python →](../08-strings-in-python/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 07 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 17 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** learning to work with numbers
- **Anyone** needing to understand Python's numeric capabilities
- **Developers** coming from languages with different numeric models

Prerequisites: Posts 01-06 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Work confidently with integers and floats
2. Use all arithmetic operators
3. Understand operator precedence
4. Use the `math` module for advanced operations
5. Handle common numeric pitfalls

---

## 💡 Why This Matters in 2026

Numbers are everywhere in programming:

- **Calculations**: Prices, statistics, measurements
- **Counting**: Loops, iterations, indexes
- **Data Science**: The foundation of all analysis
- **Game Development**: Positions, scores, physics
- **Financial Applications**: Currency, percentages, interest

---

## 🔢 Numeric Types in Python

### Integers (int)

Whole numbers without decimal points:

```python
count = 42
negative = -17
big_number = 1000000
really_big = 999999999999999999999  # Python handles any size!

# Underscore separators for readability
million = 1_000_000
credit_card = 1234_5678_9012_3456
```

### Floating-Point Numbers (float)

Numbers with decimal points:

```python
price = 19.99
temperature = -3.5
pi = 3.14159

# Scientific notation
light_speed = 3e8      # 3 × 10^8 = 300,000,000
tiny = 1.5e-10         # 0.00000000015
```

### Complex Numbers (complex)

Numbers with real and imaginary parts:

```python
c = 3 + 4j
print(c.real)    # 3.0
print(c.imag)    # 4.0
```

---

## ➕ Arithmetic Operators

### Basic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | `8` |
| `-` | Subtraction | `5 - 3` | `2` |
| `*` | Multiplication | `5 * 3` | `15` |
| `/` | Division | `5 / 3` | `1.666...` |
| `//` | Floor Division | `5 // 3` | `1` |
| `%` | Modulo (Remainder) | `5 % 3` | `2` |
| `**` | Exponentiation | `5 ** 3` | `125` |

### Division Types

```python
# Regular division (always returns float)
print(10 / 3)     # 3.333...
print(10 / 2)     # 5.0 (still a float!)

# Floor division (rounds down to integer)
print(10 // 3)    # 3
print(-10 // 3)   # -4 (rounds toward negative infinity)

# Modulo (remainder after division)
print(10 % 3)     # 1 (10 = 3*3 + 1)
print(17 % 5)     # 2 (17 = 5*3 + 2)
```

### Exponentiation

```python
print(2 ** 3)     # 8 (2³)
print(10 ** 2)    # 100 (10²)
print(2 ** 0.5)   # 1.414... (square root of 2)
print(27 ** (1/3)) # 3.0 (cube root of 27)
```

---

## 📊 Operator Precedence

Python follows mathematical order of operations (PEMDAS):

1. **P**arentheses `()`
2. **E**xponents `**`
3. **M**ultiplication/Division `* / // %`
4. **A**ddition/Subtraction `+ -`

```python
# Without parentheses
result = 2 + 3 * 4      # 14 (not 20!)
# Multiplication first: 3 * 4 = 12
# Then addition: 2 + 12 = 14

# With parentheses
result = (2 + 3) * 4    # 20
# Parentheses first: 2 + 3 = 5
# Then multiplication: 5 * 4 = 20

# Complex example
result = 2 ** 3 * 4 + 5
# Step 1: 2 ** 3 = 8
# Step 2: 8 * 4 = 32
# Step 3: 32 + 5 = 37
```

### Best Practice: Use Parentheses for Clarity

```python
# Even if not required, parentheses improve readability
average = (a + b + c) / 3
area = (base * height) / 2
```

---

## 🧮 Built-in Numeric Functions

### abs() - Absolute Value

```python
print(abs(-5))      # 5
print(abs(5))       # 5
print(abs(-3.14))   # 3.14
```

### round() - Rounding

```python
print(round(3.7))       # 4
print(round(3.2))       # 3
print(round(3.14159, 2)) # 3.14 (2 decimal places)
print(round(1234, -2))   # 1200 (round to hundreds)
```

### pow() - Power

```python
print(pow(2, 3))        # 8 (same as 2 ** 3)
print(pow(2, 3, 5))     # 3 (2³ mod 5 = 8 mod 5)
```

### divmod() - Division and Modulo Together

```python
quotient, remainder = divmod(17, 5)
print(quotient)     # 3
print(remainder)    # 2
```

### min() and max()

```python
print(min(3, 1, 4, 1, 5))   # 1
print(max(3, 1, 4, 1, 5))   # 5
print(min([10, 20, 5]))     # 5 (works with lists)
```

### sum()

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))         # 15
print(sum(numbers, 10))     # 25 (start from 10)
```

---

## 📐 The math Module

For advanced mathematical operations, import the `math` module:

```python
import math
```

### Constants

```python
print(math.pi)      # 3.141592653589793
print(math.e)       # 2.718281828459045
print(math.inf)     # Infinity
print(math.nan)     # Not a Number
```

### Common Functions

```python
# Square root
print(math.sqrt(16))      # 4.0

# Power (alternative to **)
print(math.pow(2, 3))     # 8.0

# Logarithms
print(math.log(10))       # 2.302... (natural log)
print(math.log10(100))    # 2.0

# Ceiling and floor
print(math.ceil(4.1))     # 5 (rounds up)
print(math.floor(4.9))    # 4 (rounds down)

# Trigonometry (angles in radians)
print(math.sin(0))        # 0.0
print(math.cos(0))        # 1.0
print(math.degrees(math.pi))  # 180.0

# Factorial
print(math.factorial(5))  # 120 (5! = 5*4*3*2*1)

# Greatest common divisor
print(math.gcd(48, 18))   # 6
```

---

## ⚠️ Common Pitfalls

### Floating-Point Precision

```python
# Seems wrong, but it's floating-point representation
print(0.1 + 0.2)          # 0.30000000000000004

# Solution 1: Use round()
print(round(0.1 + 0.2, 1))  # 0.3

# Solution 2: Use decimal module for precision
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3
```

### Division by Zero

```python
# print(10 / 0)   # ZeroDivisionError!

# Always check before dividing
divisor = 0
if divisor != 0:
    result = 10 / divisor
else:
    result = None
    print("Cannot divide by zero")
```

### Integer Division Gotcha

```python
# Regular division always returns float
print(type(10 / 2))   # <class 'float'>

# Floor division returns int (if both operands are int)
print(type(10 // 2))  # <class 'int'>
```

---

## ✅ Best Practices

1. **Use underscores** for large numbers: `1_000_000`
2. **Use parentheses** for clarity in complex expressions
3. **Be careful with floats** in comparisons:
   ```python
   # ❌ May fail due to precision
   if 0.1 + 0.2 == 0.3:
       print("Equal")
   
   # ✅ Use tolerance for float comparison
   if abs((0.1 + 0.2) - 0.3) < 0.0001:
       print("Equal")
   ```
4. **Use the right type**: `int` for counting, `float` for measurements
5. **Import math** for advanced operations

---

## 💼 Real-World Examples

### Price Calculation

```python
unit_price = 29.99
quantity = 3
discount_rate = 0.10
tax_rate = 0.08

subtotal = unit_price * quantity
discount = subtotal * discount_rate
after_discount = subtotal - discount
tax = after_discount * tax_rate
total = after_discount + tax

print(f"Total: ${total:.2f}")  # Total: $87.57
```

### Temperature Conversion

```python
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")  # 25°C = 77.0°F
```

### Percentage Calculations

```python
total_students = 150
passed = 127
pass_rate = (passed / total_students) * 100
print(f"Pass rate: {pass_rate:.1f}%")  # Pass rate: 84.7%
```

---

## 📝 Mini Exercises

1. Write code to calculate the area of a circle with radius 7.
2. Convert 98.6°F to Celsius: C = (F - 32) × 5/9
3. Calculate 15% tip on a $48.50 bill.
4. Find the remainder when 1000 is divided by 33.

---

## 🔮 What's Next?

In **Post 08: Strings in Python**, you'll learn:

- Creating and manipulating text
- String indexing and slicing
- String operations
- Escape characters

You now have the power of numbers! Let's learn about text.

---

## 📖 Summary

| Topic | Key Points |
|-------|------------|
| Integer | Whole numbers, unlimited size |
| Float | Decimal numbers, approximate |
| Operators | `+`, `-`, `*`, `/`, `//`, `%`, `**` |
| Built-ins | `abs()`, `round()`, `min()`, `max()`, `sum()` |
| math module | `sqrt()`, `ceil()`, `floor()`, `pi` |

---

[← Previous: Python Data Types Overview](../06-python-data-types-overview/) | [Back to Index](../../README.md) | [Next: Strings in Python →](../08-strings-in-python/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

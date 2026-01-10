# Post 05: Variables & Naming Conventions

[← Previous: Python Syntax Basics](../04-python-syntax-basics/) | [Back to Index](../../README.md) | [Next: Python Data Types Overview →](../06-python-data-types-overview/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 05 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 17 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** learning how to store data
- **Developers from other languages** learning Python's variable rules
- **Anyone** wanting to write clean, Pythonic code

Prerequisites: Posts 01-04 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand what variables are and how they work
2. Create and assign values to variables
3. Follow Python naming conventions (PEP 8)
4. Know Python's reserved keywords
5. Use different assignment patterns

---

## 💡 Why This Matters in 2026

Variables are the building blocks of every program. They let you:

- **Store data** for later use
- **Give meaning** to values (what is `42`? Oh, it's the `user_age`)
- **Write maintainable code** that others can understand
- **Build complex applications** by managing state

Good variable naming is a mark of a professional programmer.

---

## 🔍 What Is a Variable?

A variable is a **named container** that stores a value. Think of it as a labeled box:

```
┌─────────────────┐
│    "Alice"      │  ← Value stored inside
├─────────────────┤
│      name       │  ← Label (variable name)
└─────────────────┘
```

In Python:

```python
name = "Alice"
```

Here:
- `name` is the variable (the label)
- `"Alice"` is the value (what's stored inside)
- `=` is the assignment operator (puts value in the box)

---

## ✏️ Creating Variables

### Basic Assignment

```python
# Creating variables
name = "Python"
version = 3.12
is_awesome = True
year = 2026
```

### No Declaration Needed

Unlike some languages, Python doesn't require type declarations:

```python
# Python - just assign
age = 25

# Java - need to declare type first
# int age = 25;

# Python figures out the type automatically
```

### Variables Can Change

Variables can be reassigned to new values (even different types):

```python
x = 10        # x is an integer
print(x)      # 10

x = "hello"   # Now x is a string
print(x)      # hello

x = [1, 2, 3] # Now x is a list
print(x)      # [1, 2, 3]
```

### Variables Reference Objects

In Python, variables are **references** to objects in memory:

```python
a = [1, 2, 3]
b = a           # b points to the SAME list
b.append(4)
print(a)        # [1, 2, 3, 4] - a changed too!

# To create a copy instead:
c = a.copy()    # c points to a NEW list
c.append(5)
print(a)        # [1, 2, 3, 4] - a unchanged
```

---

## 📛 Naming Rules (Required)

These rules are **enforced by Python**. Breaking them causes errors.

### Rule 1: Start with a Letter or Underscore

```python
# ✅ Valid
name = "Alice"
_private = "hidden"
Name2 = "Bob"

# ❌ Invalid
2name = "Error"     # Can't start with number
```

### Rule 2: Contain Only Letters, Numbers, Underscores

```python
# ✅ Valid
user_name = "alice"
userName2 = "bob"
_count = 10

# ❌ Invalid
user-name = "Error"   # No hyphens
user name = "Error"   # No spaces
user@name = "Error"   # No special characters
```

### Rule 3: Case Sensitive

```python
# These are all DIFFERENT variables
name = "lowercase"
Name = "capitalized"
NAME = "uppercase"

print(name)  # lowercase
print(Name)  # capitalized
print(NAME)  # uppercase
```

### Rule 4: Cannot Be Reserved Keywords

Python has reserved words that have special meaning:

```python
# ❌ Invalid - these are keywords
if = 10       # SyntaxError
class = "A"   # SyntaxError
True = 5      # SyntaxError
```

---

## 📝 Naming Conventions (Recommended)

These are **style guidelines** from PEP 8. They're not enforced but are expected.

### Use snake_case for Variables and Functions

```python
# ✅ Recommended (snake_case)
user_name = "Alice"
total_price = 99.99
is_active = True

# ❌ Not recommended (but valid)
userName = "Alice"      # camelCase
TotalPrice = 99.99      # PascalCase
ISACTIVE = True         # UPPERCASE
```

### Use UPPER_CASE for Constants

```python
# Constants (values that shouldn't change)
MAX_USERS = 100
PI = 3.14159
API_KEY = "secret-key-here"
DEFAULT_TIMEOUT = 30
```

### Use PascalCase for Classes

```python
# Classes (covered in Post 52)
class UserProfile:
    pass

class ShoppingCart:
    pass
```

### Use Leading Underscores for Special Purposes

```python
# Single underscore: "private" (convention only)
_internal_value = 42

# Double underscore: name mangling (advanced)
__private_var = "very private"

# Dunder (double underscore both sides): special methods
__init__()  # Constructor
__str__()   # String representation
```

### Naming Summary Table

| Type | Convention | Example |
|------|------------|---------|
| Variables | snake_case | `user_name`, `total_price` |
| Functions | snake_case | `calculate_total()`, `get_user()` |
| Constants | UPPER_CASE | `MAX_SIZE`, `PI` |
| Classes | PascalCase | `UserProfile`, `ShoppingCart` |
| Private | _leading_underscore | `_internal`, `_helper()` |
| Modules | snake_case | `my_module.py` |

---

## 🚫 Python Reserved Keywords

These words have special meaning and **cannot be used as variable names**:

```python
# View all keywords in Python
import keyword
print(keyword.kwlist)
```

| Keywords | | | | |
|----------|--|--|--|--|
| False | None | True | and | as |
| assert | async | await | break | class |
| continue | def | del | elif | else |
| except | finally | for | from | global |
| if | import | in | is | lambda |
| nonlocal | not | or | pass | raise |
| return | try | while | with | yield |

---

## 🔄 Assignment Patterns

### Multiple Assignment

```python
# Assign same value to multiple variables
x = y = z = 0
print(x, y, z)  # 0 0 0

# Assign different values in one line
a, b, c = 1, 2, 3
print(a, b, c)  # 1 2 3

# Swap values (Pythonic way!)
a, b = b, a
print(a, b)  # 2 1 (swapped!)
```

### Unpacking

```python
# Unpack a list/tuple into variables
coordinates = (10, 20)
x, y = coordinates
print(x)  # 10
print(y)  # 20

# Unpack with rest
numbers = [1, 2, 3, 4, 5]
first, *rest = numbers
print(first)  # 1
print(rest)   # [2, 3, 4, 5]

*start, last = numbers
print(start)  # [1, 2, 3, 4]
print(last)   # 5
```

### Augmented Assignment

```python
# Regular assignment
count = 0
count = count + 1
print(count)  # 1

# Augmented assignment (shorthand)
count += 1  # Same as: count = count + 1
print(count)  # 2

# Other augmented operators
x = 10
x -= 3   # x = x - 3  → 7
x *= 2   # x = x * 2  → 14
x /= 7   # x = x / 7  → 2.0
x //= 2  # x = x // 2 → 1.0
x **= 3  # x = x ** 3 → 1.0
```

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Using Reserved Keywords

```python
# ❌ Wrong
class = "Python 101"  # SyntaxError

# ✅ Correct
class_name = "Python 101"
```

### Mistake 2: Starting with Numbers

```python
# ❌ Wrong
1st_place = "Gold"  # SyntaxError

# ✅ Correct
first_place = "Gold"
place_1st = "Gold"
```

### Mistake 3: Using Hyphens

```python
# ❌ Wrong
user-name = "Alice"  # Python sees subtraction

# ✅ Correct
user_name = "Alice"
```

### Mistake 4: Inconsistent Naming

```python
# ❌ Inconsistent
userName = "Alice"
user_age = 25
UserCity = "Seattle"

# ✅ Consistent (snake_case)
user_name = "Alice"
user_age = 25
user_city = "Seattle"
```

### Mistake 5: Non-Descriptive Names

```python
# ❌ Cryptic
x = 100
y = 0.08
z = x * y

# ✅ Descriptive
price = 100
tax_rate = 0.08
tax_amount = price * tax_rate
```

---

## ✅ Best Practices

### 1. Use Descriptive Names

```python
# ❌ Bad
d = 7
# What is d? Days? Distance? Discount?

# ✅ Good
days_until_deadline = 7
```

### 2. Be Consistent

```python
# Pick a style and stick with it
user_first_name = "Alice"
user_last_name = "Smith"
user_email = "alice@example.com"
```

### 3. Avoid Single Letters (Usually)

```python
# ❌ Avoid (except in specific cases)
n = "Alice"

# ✅ Exception: Loop counters and math
for i in range(10):
    print(i)

# Math formulas where letters are standard
e = m * c ** 2
```

### 4. Use Meaningful Prefixes for Booleans

```python
# ✅ Good boolean names (read like questions)
is_active = True
has_permission = False
can_edit = True
should_retry = False
```

### 5. Avoid Abbreviations

```python
# ❌ Abbreviations
usr_nm = "Alice"
btn_clr = "blue"

# ✅ Full words
user_name = "Alice"
button_color = "blue"
```

---

## 💼 Real-World Examples

### User Profile

```python
# User information
user_id = 12345
user_name = "alice_smith"
user_email = "alice@example.com"
is_verified = True
account_balance = 150.75
```

### E-Commerce

```python
# Product details
product_id = "SKU-001"
product_name = "Wireless Mouse"
unit_price = 29.99
quantity_in_stock = 150
is_available = quantity_in_stock > 0
```

### Configuration

```python
# Application settings (constants)
MAX_LOGIN_ATTEMPTS = 3
SESSION_TIMEOUT_MINUTES = 30
API_BASE_URL = "https://api.example.com"
DEBUG_MODE = False
```

---

## 📝 Mini Exercises

### Exercise 1: Fix the Names
What's wrong with these variable names? Fix them:

```python
1user = "Alice"
user-age = 25
class = "Python"
USER NAME = "Bob"
```

### Exercise 2: Convert to snake_case
Convert these to proper Python naming:

```python
firstName = "Alice"
lastName = "Smith"  
totalPrice = 99.99
isActive = True
```

### Exercise 3: Swap Values
Write code to swap the values of `a` and `b` without using a temporary variable.

```python
a = "first"
b = "second"
# Your code here
# Result: a should be "second", b should be "first"
```

---

## 🎯 Mini Project: Variable Showcase

Create a program that:
1. Stores information about yourself (name, age, city, hobby)
2. Uses proper naming conventions
3. Includes at least one constant
4. Uses multiple assignment
5. Displays all information formatted nicely

---

## 🔮 What's Next?

In **Post 06: Python Data Types Overview**, you'll learn:

- The different types of data in Python
- How to check a variable's type
- Mutable vs immutable types
- When to use which type

You now know how to store data. Let's learn about the different kinds of data you can store!

---

## 📖 Summary

| Concept | Rule/Convention |
|---------|----------------|
| Variable creation | `name = value` |
| Naming rules | Start with letter/underscore, alphanumeric, case-sensitive |
| Variables | `snake_case` |
| Constants | `UPPER_CASE` |
| Classes | `PascalCase` |
| Reserved keywords | Cannot be used as names |

---

## 🔗 Additional Resources

- [PEP 8 – Naming Conventions](https://peps.python.org/pep-0008/#naming-conventions)
- [Python Keywords](https://docs.python.org/3/reference/lexical_analysis.html#keywords)
- [Variables in Python (Real Python)](https://realpython.com/python-variables/)

---

[← Previous: Python Syntax Basics](../04-python-syntax-basics/) | [Back to Index](../../README.md) | [Next: Python Data Types Overview →](../06-python-data-types-overview/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

# Post 10: Type Conversion & Type Checking

[← Previous: String Methods & f-Strings](../09-string-methods-and-f-strings/) | [Back to Index](../../README.md) | [Next: Lists →](../11-lists/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 10 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 16 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** understanding type conversion
- **Anyone** handling user input or data from files
- **Developers** needing robust data validation

Prerequisites: Posts 01-09 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Convert between Python's built-in types
2. Handle conversion errors gracefully
3. Validate data before conversion
4. Use type checking effectively
5. Understand implicit vs explicit conversion

---

## 💡 Why This Matters in 2026

Type conversion is essential because:

- **User input** is always a string
- **File data** comes as text
- **APIs** return various formats
- **Calculations** require proper types

Without proper conversion, your programs crash or produce wrong results.

---

## 🔄 Basic Type Conversion Functions

### Converting to Integer (int)

```python
# From string
num = int("42")          # 42

# From float (truncates, doesn't round)
num = int(3.9)           # 3
num = int(-3.9)          # -3

# From boolean
num = int(True)          # 1
num = int(False)         # 0

# With base (for binary, hex, etc.)
num = int("1010", 2)     # 10 (binary)
num = int("ff", 16)      # 255 (hexadecimal)
```

### Converting to Float (float)

```python
# From string
price = float("19.99")   # 19.99

# From integer
price = float(42)        # 42.0

# Scientific notation
val = float("3.5e10")    # 35000000000.0

# Special values
inf = float("inf")       # Infinity
neg_inf = float("-inf")  # -Infinity
```

### Converting to String (str)

```python
# From numbers
text = str(42)           # "42"
text = str(3.14)         # "3.14"

# From boolean
text = str(True)         # "True"

# From any object
text = str([1, 2, 3])    # "[1, 2, 3]"
```

### Converting to Boolean (bool)

```python
# "Truthy" values → True
bool(1)                  # True
bool(-1)                 # True
bool("hello")            # True
bool([1, 2, 3])          # True

# "Falsy" values → False
bool(0)                  # False
bool(0.0)                # False
bool("")                 # False
bool([])                 # False
bool(None)               # False
```

### Converting to List, Tuple, Set

```python
# String to list of characters
list("hello")            # ['h', 'e', 'l', 'l', 'o']

# Range to list
list(range(5))           # [0, 1, 2, 3, 4]

# List to tuple
tuple([1, 2, 3])         # (1, 2, 3)

# List to set (removes duplicates)
set([1, 2, 2, 3, 3, 3])  # {1, 2, 3}

# String to set
set("hello")             # {'h', 'e', 'l', 'o'}
```

---

## ⚠️ Handling Conversion Errors

Conversions can fail. Always handle potential errors.

### The Problem

```python
# This will crash!
age = int("twenty")      # ValueError
age = int("3.14")        # ValueError (can't convert float string directly)
age = int("")            # ValueError
```

### The Solution: try/except

```python
user_input = "twenty"

try:
    age = int(user_input)
    print(f"Age: {age}")
except ValueError:
    print(f"'{user_input}' is not a valid number")
```

### Validation Before Conversion

```python
user_input = "42"

# Check if it's a valid integer
if user_input.isdigit():
    age = int(user_input)
else:
    print("Please enter a valid number")

# Note: isdigit() doesn't handle negative numbers
# For negatives, use try/except
```

### Safe Conversion Function

```python
def safe_int(value, default=0):
    """Convert to int safely, return default on failure."""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

# Usage
print(safe_int("42"))       # 42
print(safe_int("hello"))    # 0
print(safe_int("hello", -1)) # -1
print(safe_int(None))        # 0
```

---

## 🔍 Type Checking

### Using type()

```python
x = 42
print(type(x))               # <class 'int'>
print(type(x) == int)        # True
print(type(x).__name__)      # "int"
```

### Using isinstance() (Preferred)

```python
x = 42

print(isinstance(x, int))            # True
print(isinstance(x, (int, float)))   # True (check multiple)
print(isinstance(True, int))         # True! (bool is subclass of int)
```

### Why isinstance() is Better

```python
# type() checks exact type
# isinstance() considers inheritance

class MyInt(int):
    pass

x = MyInt(42)

print(type(x) == int)        # False
print(isinstance(x, int))    # True
```

---

## 🔀 Implicit vs Explicit Conversion

### Implicit Conversion (Automatic)

Python automatically converts in some operations:

```python
# int + float → float
result = 5 + 3.14
print(type(result))          # <class 'float'>

# int * float → float
result = 2 * 3.5
print(type(result))          # <class 'float'>
```

### Explicit Conversion (Manual)

You must do it yourself:

```python
# String + int → Error!
# "Age: " + 25 → TypeError

# Solution: explicit conversion
age = 25
message = "Age: " + str(age)
# Or use f-string
message = f"Age: {age}"
```

---

## 📊 Common Conversion Patterns

### User Input to Number

```python
# Always returns string
user_input = input("Enter a number: ")

# Convert for calculations
number = int(user_input)
# or
number = float(user_input)
```

### String to Float, Then Int

```python
# Can't do int("3.14") directly
value = int(float("3.14"))   # 3
```

### Clean String to Number

```python
dirty = "  42  "
clean = int(dirty.strip())   # 42

price = "$19.99"
value = float(price.replace("$", ""))  # 19.99
```

### Number Formatting

```python
num = 42
formatted = f"{num:05d}"     # "00042"

price = 19
formatted = f"${price:.2f}"  # "$19.00"
```

---

## ✅ Best Practices

1. **Always validate** user input before conversion
2. **Use try/except** for robust error handling
3. **Use isinstance()** instead of `type() ==`
4. **Use f-strings** instead of `str()` concatenation
5. **Be explicit** — don't rely on implicit conversion

### Good Input Handling Pattern

```python
def get_integer_input(prompt, min_val=None, max_val=None):
    """Get validated integer input from user."""
    while True:
        user_input = input(prompt)
        try:
            value = int(user_input)
            if min_val is not None and value < min_val:
                print(f"Must be at least {min_val}")
                continue
            if max_val is not None and value > max_val:
                print(f"Must be at most {max_val}")
                continue
            return value
        except ValueError:
            print("Please enter a valid integer")

# Usage
age = get_integer_input("Enter age (1-120): ", 1, 120)
```

---

## 💼 Real-World Examples

### Processing CSV Data

```python
data = "Alice,28,85.5"
name, age, score = data.split(",")

# Convert from strings
age = int(age)
score = float(score)

print(f"{name} is {age} years old with score {score}")
```

### API Response Handling

```python
api_response = {"count": "42", "price": "19.99", "active": "true"}

count = int(api_response["count"])
price = float(api_response["price"])
active = api_response["active"].lower() == "true"

print(f"Count: {count}, Price: {price}, Active: {active}")
```

---

## 📝 Mini Exercises

1. Convert "3.14159" to integer (hint: two steps).
2. Write a safe_float() function similar to safe_int().
3. Check if a variable is numeric (int or float).
4. Parse "$1,234.56" into a float.

---

## 🎯 Phase 1 Complete!

**Congratulations!** You've completed Phase 1: Foundations.

You now understand:
- Why Python matters in 2026
- Python installation and setup
- Basic syntax and variables
- Data types and numbers
- Strings and formatting
- Type conversion

---

## 🔮 What's Next?

In **Phase 2: Core Data Structures**, you'll learn:

- **Post 11**: Lists - Ordered, mutable sequences
- **Post 12**: Tuples - Immutable sequences
- **Post 13**: Sets - Unique collections
- **Post 14**: Dictionaries - Key-value pairs

You have the foundation. Now let's build data structures!

---

## 📖 Summary

| Conversion | Function | Example |
|------------|----------|---------|
| To integer | `int()` | `int("42")` → 42 |
| To float | `float()` | `float("3.14")` → 3.14 |
| To string | `str()` | `str(42)` → "42" |
| To boolean | `bool()` | `bool(1)` → True |
| To list | `list()` | `list("abc")` → ['a','b','c'] |
| Type check | `isinstance()` | `isinstance(x, int)` |

---

[← Previous: String Methods & f-Strings](../09-string-methods-and-f-strings/) | [Back to Index](../../README.md) | [Next: Lists →](../11-lists/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

# Post 06: Python Data Types Overview

[← Previous: Variables & Naming Conventions](../05-variables-and-naming-conventions/) | [Back to Index](../../README.md) | [Next: Numbers in Python →](../07-numbers-in-python/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 06 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 18 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** understanding how Python categorizes data
- **Programmers** from other languages learning Python's type system
- **Anyone** wanting a comprehensive overview before diving into specific types

Prerequisites: Posts 01-05 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand Python's built-in data types
2. Know the difference between mutable and immutable types
3. Use `type()` and `isinstance()` to check types
4. Recognize when to use each data type
5. Understand Python's dynamic typing

---

## 💡 Why This Matters in 2026

Understanding data types is fundamental because:

- **Choosing the right type** makes code efficient and clear
- **Avoiding type errors** saves debugging time
- **Modern Python** (with type hints) expects you to understand types
- **Every variable** you create has a type, whether you declare it or not

---

## 🔍 Python's Type System

### Static vs Dynamic Typing

Python uses **dynamic typing**: variables don't have a fixed type; they can hold any value.

```python
# Python (dynamic typing)
x = 10          # x holds an integer
x = "hello"     # Now x holds a string - valid!
x = [1, 2, 3]   # Now x holds a list - also valid!
```

Compare with statically-typed languages:

```java
// Java (static typing)
int x = 10;
x = "hello";  // Error! x must stay an int
```

### Strong Typing

Python is **strongly typed**: it doesn't implicitly convert between incompatible types.

```python
# Python (strong typing)
"hello" + 5  # TypeError! Can't add string and int

# JavaScript (weak typing)
# "hello" + 5  // Would give "hello5"
```

---

## 📊 Built-in Data Types Overview

Python has several built-in data types organized into categories:

### Numeric Types

| Type | Description | Example |
|------|-------------|---------|
| `int` | Integer (whole number) | `42`, `-17`, `1000000` |
| `float` | Floating-point (decimal) | `3.14`, `-0.001`, `2.0` |
| `complex` | Complex number | `3+4j`, `1j` |

### Text Type

| Type | Description | Example |
|------|-------------|---------|
| `str` | String (text) | `"hello"`, `'Python'` |

### Boolean Type

| Type | Description | Example |
|------|-------------|---------|
| `bool` | Boolean (True/False) | `True`, `False` |

### Sequence Types

| Type | Description | Example |
|------|-------------|---------|
| `list` | Ordered, mutable sequence | `[1, 2, 3]` |
| `tuple` | Ordered, immutable sequence | `(1, 2, 3)` |
| `range` | Sequence of numbers | `range(10)` |

### Mapping Type

| Type | Description | Example |
|------|-------------|---------|
| `dict` | Key-value pairs | `{"name": "Alice"}` |

### Set Types

| Type | Description | Example |
|------|-------------|---------|
| `set` | Unordered, unique elements | `{1, 2, 3}` |
| `frozenset` | Immutable set | `frozenset({1, 2, 3})` |

### None Type

| Type | Description | Example |
|------|-------------|---------|
| `NoneType` | Represents absence of value | `None` |

---

## 🔬 Checking Data Types

### The type() Function

```python
# Check the type of any value
print(type(42))           # <class 'int'>
print(type(3.14))         # <class 'float'>
print(type("hello"))      # <class 'str'>
print(type(True))         # <class 'bool'>
print(type([1, 2, 3]))    # <class 'list'>
print(type({"a": 1}))     # <class 'dict'>
print(type(None))         # <class 'NoneType'>
```

### The isinstance() Function

Check if a value is of a specific type:

```python
x = 42

print(isinstance(x, int))    # True
print(isinstance(x, float))  # False
print(isinstance(x, str))    # False

# Check multiple types
print(isinstance(x, (int, float)))  # True (is either int or float)
```

### Comparing type() vs isinstance()

```python
# type() checks exact type
print(type(True) == bool)  # True
print(type(True) == int)   # False

# isinstance() considers inheritance
print(isinstance(True, bool))  # True
print(isinstance(True, int))   # True! (bool is subclass of int)
```

---

## 🔄 Mutable vs Immutable Types

This is a **critical concept** in Python.

### Immutable Types

**Cannot be changed** after creation. Modifying them creates a new object.

```python
# Immutable types: int, float, str, tuple, frozenset, bool

# Strings are immutable
s = "hello"
print(id(s))      # Memory address: 140234567890

s = s + " world"  # Creates NEW string
print(id(s))      # Different address: 140234567999
```

### Mutable Types

**Can be changed** in place. The object itself is modified.

```python
# Mutable types: list, dict, set

# Lists are mutable
my_list = [1, 2, 3]
print(id(my_list))  # Memory address: 140234567123

my_list.append(4)   # Modifies the SAME list
print(id(my_list))  # Same address: 140234567123
print(my_list)      # [1, 2, 3, 4]
```

### Why Does This Matter?

```python
# Immutable - safe to share
a = "hello"
b = a
b = b.upper()  # Creates new string, a is unchanged
print(a)  # "hello"
print(b)  # "HELLO"

# Mutable - be careful when sharing!
x = [1, 2, 3]
y = x          # y points to the SAME list
y.append(4)    # Modifies the list
print(x)       # [1, 2, 3, 4] - x also changed!
```

### Mutability Summary

| Type | Mutable? |
|------|----------|
| `int`, `float`, `complex` | ❌ Immutable |
| `str` | ❌ Immutable |
| `bool` | ❌ Immutable |
| `tuple` | ❌ Immutable |
| `frozenset` | ❌ Immutable |
| `list` | ✅ Mutable |
| `dict` | ✅ Mutable |
| `set` | ✅ Mutable |

---

## 📝 Quick Tour of Each Type

### Numbers (int, float)

```python
count = 42              # int
price = 19.99           # float
large = 1_000_000       # int with underscore separator
scientific = 1.5e10     # 15000000000.0

print(count + price)    # 61.99 (int + float = float)
```

### Strings (str)

```python
name = "Python"
greeting = 'Hello'
multiline = """This is
a multiline string"""

print(name[0])          # 'P' (indexing)
print(len(greeting))    # 5 (length)
```

### Booleans (bool)

```python
is_active = True
is_empty = False

# Booleans in conditions
if is_active:
    print("Active!")

# Boolean from comparisons
print(5 > 3)            # True
print(10 == 5)          # False
```

### Lists (list)

```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])        # "apple"
fruits.append("date")   # Add item
print(len(fruits))      # 4
```

### Tuples (tuple)

```python
coordinates = (10, 20)
rgb = (255, 128, 0)

print(coordinates[0])   # 10
# coordinates[0] = 5    # Error! Tuples are immutable
```

### Dictionaries (dict)

```python
person = {
    "name": "Alice",
    "age": 30,
    "city": "Seattle"
}

print(person["name"])   # "Alice"
person["email"] = "alice@example.com"  # Add key
```

### Sets (set)

```python
unique_numbers = {1, 2, 3, 3, 3}
print(unique_numbers)   # {1, 2, 3} (duplicates removed)

unique_numbers.add(4)
print(unique_numbers)   # {1, 2, 3, 4}
```

### None

```python
result = None

if result is None:
    print("No result yet")

# Common use: default parameters
def greet(name=None):
    if name is None:
        print("Hello, stranger!")
    else:
        print(f"Hello, {name}!")
```

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Comparing Types Wrong

```python
# ❌ Wrong - type returns a class
if type(x) == "int":
    print("Is int")

# ✅ Correct
if type(x) == int:
    print("Is int")

# ✅ Better - use isinstance
if isinstance(x, int):
    print("Is int")
```

### Mistake 2: Modifying Shared Mutable Objects

```python
# ❌ Unexpected behavior
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4] - oops!

# ✅ Make a copy if needed
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)  # [1, 2, 3] - unchanged
```

### Mistake 3: Expecting String Changes In-Place

```python
# ❌ Won't work - strings are immutable
s = "hello"
s.upper()  # Returns new string, doesn't change s
print(s)   # "hello" - unchanged!

# ✅ Assign the result
s = "hello"
s = s.upper()
print(s)   # "HELLO"
```

---

## ✅ Best Practices

1. **Use isinstance()** for type checking:
   ```python
   if isinstance(value, (int, float)):
       # Works with both
   ```

2. **Know mutability** before sharing objects:
   ```python
   # Copy mutable objects when needed
   new_list = old_list.copy()
   ```

3. **Choose appropriate types**:
   - Need to modify? Use `list`
   - Fixed collection? Use `tuple`
   - Need uniqueness? Use `set`
   - Need key-value pairs? Use `dict`

4. **Use type hints** (covered later) for documentation:
   ```python
   def greet(name: str) -> str:
       return f"Hello, {name}!"
   ```

---

## 💼 Real-World Type Usage

```python
# User profile example
user = {
    "id": 12345,                    # int
    "name": "Alice Smith",          # str
    "email": "alice@example.com",   # str
    "is_active": True,              # bool
    "balance": 150.75,              # float
    "roles": ["user", "admin"],     # list
    "preferences": {                # dict (nested)
        "theme": "dark",
        "notifications": True
    },
    "tags": {"premium", "early-adopter"},  # set
    "last_login": None              # NoneType (not yet logged in)
}
```

---

## 📝 Mini Exercises

### Exercise 1: Type Detective
What type is each of these? Use `type()` to check:
```python
a = 42
b = 42.0
c = "42"
d = [42]
e = (42,)
f = {42}
g = {"answer": 42}
```

### Exercise 2: Mutable or Immutable?
For each operation, predict if the original changes:
```python
x = "hello"
y = x.upper()

a = [1, 2, 3]
b = a
b.append(4)
```

### Exercise 3: Type Conversion
Convert the string `"3.14"` to a float, then to an integer.

---

## 🔮 What's Next?

In **Post 07: Numbers in Python**, you'll dive deep into:

- Integer operations and limits
- Floating-point precision
- Mathematical operators
- The `math` module

You now have an overview of Python's type system. Let's explore numbers in detail!

---

## 📖 Summary

| Concept | Key Points |
|---------|------------|
| Dynamic typing | Variables can hold any type |
| Strong typing | No implicit conversion between incompatible types |
| Mutable | `list`, `dict`, `set` - can be modified |
| Immutable | `int`, `str`, `tuple`, `bool`, `float` - cannot be modified |
| Type checking | `type()` for exact type, `isinstance()` for inheritance |

---

## 🔗 Additional Resources

- [Python Built-in Types](https://docs.python.org/3/library/stdtypes.html)
- [Type Checking in Python](https://realpython.com/python-type-checking/)
- [Mutable vs Immutable](https://realpython.com/python-mutable-vs-immutable-types/)

---

[← Previous: Variables & Naming Conventions](../05-variables-and-naming-conventions/) | [Back to Index](../../README.md) | [Next: Numbers in Python →](../07-numbers-in-python/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

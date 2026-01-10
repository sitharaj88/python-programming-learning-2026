# Post 04: Python Syntax Basics

[← Previous: Your First Python Program](../03-your-first-python-program/) | [Back to Index](../../README.md) | [Next: Variables & Naming Conventions →](../05-variables-and-naming-conventions/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 04 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 16 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** learning Python's structure and rules
- **Developers from other languages** adjusting to Python's style
- **Anyone** who wants to understand why Python looks the way it does

Prerequisites: Posts 01-03 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand Python's indentation rules (critical!)
2. Write proper comments to document code
3. Know how Python statements work
4. Recognize Python's significant whitespace
5. Avoid common syntax errors

---

## 💡 Why This Matters in 2026

Python's syntax is designed for **readability**. Understanding these rules means:

- Your code will run without syntax errors
- You'll write code others can easily read
- You'll understand code from tutorials and documentation
- You'll form good habits from the start

---

## 🔍 Python's Philosophy: Readability Counts

Python is famous for clean, readable code. This isn't an accident—it's enforced by the language itself. Let's understand the key syntax rules.

---

## 📐 Indentation: Python's Defining Feature

### What Makes Python Different

In most languages, code blocks are defined by braces `{}`:

```javascript
// JavaScript
if (condition) {
    doSomething();
    doMore();
}
```

In Python, code blocks are defined by **indentation**:

```python
# Python
if condition:
    do_something()
    do_more()
```

### The Rules of Indentation

#### Rule 1: Use Consistent Indentation

Pick 4 spaces (recommended) and stick with it:

```python
# ✅ Correct - 4 spaces
if True:
    print("Line 1")
    print("Line 2")

# ❌ Wrong - inconsistent
if True:
    print("Line 1")
      print("Line 2")  # IndentationError!
```

#### Rule 2: Indent After Colons

Any line ending with `:` requires an indented block:

```python
# After if/elif/else
if x > 0:
    print("Positive")

# After for/while loops
for item in items:
    print(item)

# After function definitions
def greet():
    print("Hello")

# After class definitions
class Dog:
    def bark(self):
        print("Woof!")
```

#### Rule 3: Same Block = Same Indentation

```python
if condition:
    statement_1()  # Same indent level
    statement_2()  # Same indent level
    statement_3()  # Same indent level
```

#### Rule 4: Nested Blocks Add Another Level

```python
if outer_condition:
    print("Outer block")  # 4 spaces
    if inner_condition:
        print("Inner block")  # 8 spaces
        print("Still inner")  # 8 spaces
    print("Back to outer")  # 4 spaces
```

### Visual Representation

```
Level 0: No indent (top-level code)
│
└── Level 1: 4 spaces (first block)
    │
    └── Level 2: 8 spaces (nested block)
        │
        └── Level 3: 12 spaces (deeply nested)
```

---

## 💬 Comments: Explaining Your Code

Comments are notes in your code that Python ignores. They help humans understand your code.

### Single-Line Comments

Use `#` for single-line comments:

```python
# This is a comment - Python ignores this line
print("Hello")  # This is an inline comment

# Calculate area of a circle
radius = 5
area = 3.14159 * radius ** 2  # pi * r^2
```

### Multi-Line Comments

Python doesn't have a special multi-line comment syntax, but you have options:

```python
# Option 1: Multiple # symbols
# This is a longer comment
# that spans multiple lines
# explaining something complex

# Option 2: Triple-quoted strings (often used as docstrings)
"""
This is a multi-line string.
If not assigned to a variable,
Python essentially ignores it.
"""
```

### Docstrings: Special Documentation

Docstrings are triple-quoted strings at the start of functions, classes, or modules:

```python
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius: The radius of the circle
        
    Returns:
        The area of the circle (pi * r^2)
    """
    return 3.14159 * radius ** 2
```

### Comment Best Practices

```python
# ❌ Bad: Obvious comments
x = x + 1  # Add 1 to x

# ✅ Good: Explain WHY, not WHAT
x = x + 1  # Increment to next index after processing

# ❌ Bad: Outdated comment
# Calculate sum of squares
result = x * 2  # This doesn't match the comment!

# ✅ Good: Comment matches code
# Double the value for display scaling
result = x * 2
```

---

## 📝 Statements and Lines

### Simple Statements

Most Python statements are one line:

```python
x = 10
print(x)
name = "Python"
```

### Multiple Statements Per Line (Avoid Usually)

You can use `;` but it's rarely recommended:

```python
# Technically valid, but not Pythonic
x = 1; y = 2; z = 3

# Preferred: One statement per line
x = 1
y = 2
z = 3
```

### Long Lines: Line Continuation

When a line is too long, you can continue it:

```python
# Method 1: Backslash continuation
total = price + tax + shipping + \
        handling + discount

# Method 2: Implicit continuation (inside brackets)
colors = [
    "red",
    "green",
    "blue",
    "yellow"
]

# Method 2 with function calls
result = some_function(
    argument1,
    argument2,
    argument3
)
```

### Maximum Line Length

PEP 8 recommends **79 characters** maximum. Most teams use **100-120** in practice:

```python
# Too long (hard to read on smaller screens)
message = "This is a very long string that exceeds the recommended maximum line length and makes the code harder to read"

# Better: Break it up
message = (
    "This is a very long string that has been "
    "broken across multiple lines for better "
    "readability in the codebase"
)
```

---

## 📦 Code Blocks and Scope

### What Is a Code Block?

A code block is a group of statements that belong together:

```python
# Block 1: if statement body
if temperature > 30:
    print("It's hot!")        # Part of the if block
    print("Stay hydrated!")   # Part of the if block

# Block 2: for loop body
for number in [1, 2, 3]:
    doubled = number * 2      # Part of the for block
    print(doubled)            # Part of the for block
```

### Empty Blocks: The pass Statement

You can't have an empty block in Python. Use `pass` as a placeholder:

```python
# ❌ Wrong: Empty block causes error
if condition:
# IndentationError: expected an indented block

# ✅ Correct: Use pass for empty blocks
if condition:
    pass  # TODO: Implement this later

def future_function():
    pass  # Placeholder for now

class EmptyClass:
    pass
```

---

## 🔤 Case Sensitivity

Python is **case-sensitive**. These are all different:

```python
name = "Alice"
Name = "Bob"
NAME = "Charlie"

print(name)   # Alice
print(Name)   # Bob
print(NAME)   # Charlie

# Common mistake:
Print("Hello")  # NameError: name 'Print' is not defined
print("Hello")  # ✅ Correct: lowercase 'print'
```

---

## ⚠️ Common Syntax Errors

### Error 1: Indentation Errors

```python
# ❌ Wrong: Missing indentation
if True:
print("Hello")  # IndentationError

# ✅ Correct
if True:
    print("Hello")
```

### Error 2: Missing Colons

```python
# ❌ Wrong: Missing colon
if True
    print("Hello")  # SyntaxError

# ✅ Correct
if True:
    print("Hello")
```

### Error 3: Mixing Tabs and Spaces

```python
# ❌ Wrong: Tab then space (invisible error!)
if True:
	print("Tab")    # Uses tab
    print("Space")  # Uses spaces
# TabError: inconsistent use of tabs and spaces

# ✅ Correct: Use only spaces (4 spaces is standard)
if True:
    print("Consistent")
    print("Spacing")
```

### Error 4: Forgetting Quotes

```python
# ❌ Wrong
message = Hello  # NameError: name 'Hello' is not defined

# ✅ Correct
message = "Hello"
```

### Error 5: Unclosed Parentheses

```python
# ❌ Wrong
print("Hello"  # SyntaxError: unexpected EOF

# ✅ Correct
print("Hello")
```

---

## ✅ Best Practices

1. **Always use 4 spaces** for indentation (configure your editor)
2. **Use blank lines** to separate logical sections
3. **Comment judiciously** - explain why, not what
4. **Keep lines under 100 characters** when possible
5. **Be consistent** - pick a style and stick with it

### Good Code Structure Example

```python
"""
temperature_checker.py - Check if it's comfortable outside.

This module provides a simple temperature evaluation.
"""

# Constants
COMFORTABLE_LOW = 18
COMFORTABLE_HIGH = 26

def check_temperature(temp):
    """Evaluate if temperature is comfortable."""
    if temp < COMFORTABLE_LOW:
        return "Too cold!"
    elif temp > COMFORTABLE_HIGH:
        return "Too hot!"
    else:
        return "Perfect!"


# Main execution
current_temp = 22
result = check_temperature(current_temp)
print(f"Temperature {current_temp}°C: {result}")
```

---

## 💼 Real-World Applications

### Configuration Files

```python
# Database configuration
DB_HOST = "localhost"
DB_PORT = 5432
DB_NAME = "myapp"

# Feature flags
ENABLE_LOGGING = True
ENABLE_CACHE = False
```

### Simple Decision Logic

```python
# Age-based access control
age = 18

if age >= 21:
    access_level = "full"
elif age >= 18:
    access_level = "standard"
else:
    access_level = "restricted"
```

---

## 📝 Mini Exercises

### Exercise 1: Fix the Indentation
What's wrong with this code? Fix it:

```python
def greet(name):
print("Hello,", name)
    print("Welcome!")
```

### Exercise 2: Add Comments
Add appropriate comments to explain this code:

```python
price = 100
discount = 0.20
final_price = price * (1 - discount)
print(f"Final price: ${final_price}")
```

### Exercise 3: Line Continuation
Rewrite this long line properly:

```python
message = "This is a very long message that explains something important and should really be split across multiple lines for better readability."
```

---

## 🔮 What's Next?

In **Post 05: Variables & Naming Conventions**, you'll learn:

- How to create and use variables
- Python naming conventions
- Reserved keywords
- Variable assignment patterns

Understanding syntax is the foundation. Now let's learn how to store and work with data!

---

## 📖 Summary

| Concept | Key Rule |
|---------|----------|
| Indentation | 4 spaces, consistent throughout |
| Comments | `#` for single line, explain the "why" |
| Colons | Required before code blocks |
| Case | Python is case-sensitive |
| Line Length | Keep under 100 characters |

---

## 🔗 Additional Resources

- [PEP 8 – Style Guide](https://peps.python.org/pep-0008/)
- [Python Indentation Guide](https://docs.python.org/3/reference/lexical_analysis.html#indentation)
- [Writing Good Comments](https://realpython.com/python-comments-guide/)

---

[← Previous: Your First Python Program](../03-your-first-python-program/) | [Back to Index](../../README.md) | [Next: Variables & Naming Conventions →](../05-variables-and-naming-conventions/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

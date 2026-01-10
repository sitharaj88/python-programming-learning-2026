# Post 03: Your First Python Program

[← Previous: Installing Python](../02-installing-python/) | [Back to Index](../../README.md) | [Next: Python Syntax Basics →](../04-python-syntax-basics/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 03 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 18 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** writing their first lines of code
- **Learners** who have just installed Python
- **Anyone** ready to move beyond "Hello, World!"

Prerequisites: Post 02 completed (Python installed and verified)

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand how Python executes code line by line
2. Master the `print()` function for output
3. Use the `input()` function for user interaction
4. Create your first interactive program
5. Understand basic program flow

---

## 💡 Why This Matters in 2026

Every Python program you'll ever write—from simple scripts to AI applications—builds on these fundamentals:

- **Output**: Showing results to users (`print()`)
- **Input**: Getting data from users (`input()`)
- **Sequential execution**: Understanding code flows top to bottom

These concepts are the foundation of all programming. Master them here, and everything else becomes easier.

---

## 🔍 Understanding Program Execution

### How Python Reads Your Code

Python is an **interpreted language**, meaning it reads and executes code **line by line** from top to bottom.

```python
# Line 1 executes first
print("First line")

# Line 2 executes second
print("Second line")

# Line 3 executes third
print("Third line")
```

Output:
```
First line
Second line
Third line
```

This is called **sequential execution**. Python doesn't skip ahead or jump around (unless you tell it to later with control flow).

---

## 📤 The print() Function: Your Voice to the World

The `print()` function displays output to the screen. It's how your program communicates with users.

### Basic Usage

```python
print("Hello, World!")
```

Output:
```
Hello, World!
```

### What Can You Print?

```python
# Text (strings)
print("I am learning Python")

# Numbers
print(42)
print(3.14159)

# Results of calculations
print(2 + 2)
print(10 * 5)

# Multiple values
print("The answer is", 42)

# Empty line
print()
```

Output:
```
I am learning Python
42
3.14159
4
50
The answer is 42

```

### Print Multiple Items

```python
# Separate with commas - Python adds spaces automatically
print("Name:", "Alice", "| Age:", 30)

# Output: Name: Alice | Age: 30
```

### The `sep` Parameter

Control what goes between items:

```python
print("2026", "01", "11", sep="-")
# Output: 2026-01-11

print("apple", "banana", "cherry", sep=", ")
# Output: apple, banana, cherry

print("Python", "is", "awesome", sep="***")
# Output: Python***is***awesome
```

### The `end` Parameter

Control what comes at the end (default is newline):

```python
print("Hello", end=" ")
print("World")
# Output: Hello World (on same line)

print("Loading", end="...")
print("Done!")
# Output: Loading...Done!
```

---

## 📥 The input() Function: Listening to Users

The `input()` function pauses your program and waits for the user to type something.

### Basic Usage

```python
name = input("What is your name? ")
print("Hello,", name)
```

Execution:
```
What is your name? Alice
Hello, Alice
```

### How input() Works

1. Displays the prompt message (the string inside parentheses)
2. Pauses and waits for user to type
3. User presses Enter
4. Returns whatever the user typed (as a string)

### Important: input() Always Returns a String

```python
age = input("Enter your age: ")
print(type(age))  # <class 'str'>

# Even if user types 25, age is "25" not 25
```

To use the input as a number, you must convert it:

```python
age = input("Enter your age: ")
age_number = int(age)  # Convert string to integer
next_year = age_number + 1
print("Next year you'll be", next_year)
```

We'll cover type conversion in detail in Post 10.

---

## 🛠️ Building Your First Interactive Program

Let's create a complete program that combines what we've learned:

### Program: Personal Greeter

```python
# Personal Greeter Program
# This program gets user information and creates a personalized greeting

print("=" * 40)
print("Welcome to the Personal Greeter!")
print("=" * 40)
print()

# Get user information
name = input("What is your name? ")
city = input("What city do you live in? ")
hobby = input("What is your favorite hobby? ")

# Create personalized output
print()
print("=" * 40)
print("Here's your personalized greeting:")
print("=" * 40)
print()
print(f"Hello, {name}!")
print(f"Greetings from a fellow programmer to someone in {city}!")
print(f"I hear you enjoy {hobby} - that's awesome!")
print()
print("Welcome to your Python journey!")
print("=" * 40)
```

Sample execution:
```
========================================
Welcome to the Personal Greeter!
========================================

What is your name? Sarah
What city do you live in? Seattle
What is your favorite hobby? hiking

========================================
Here's your personalized greeting:
========================================

Hello, Sarah!
Greetings from a fellow programmer to someone in Seattle!
I hear you enjoy hiking - that's awesome!

Welcome to your Python journey!
========================================
```

### Breaking Down the Program

1. **Print decorative header** using `print()` and string multiplication
2. **Collect input** with three `input()` calls
3. **Store data** in variables (`name`, `city`, `hobby`)
4. **Display output** using f-strings (formatted strings)

---

## 📝 Understanding f-Strings

f-strings (formatted string literals) are a powerful way to embed expressions in strings:

```python
name = "Python"
version = 3.12

# f-string syntax: f"text {expression} more text"
print(f"I am learning {name} version {version}")
# Output: I am learning Python version 3.12
```

Key points:
- Start with `f` before the opening quote
- Use `{variable}` to insert variables
- Expressions inside `{}` are evaluated

More examples:

```python
price = 19.99
quantity = 3
total = price * quantity

print(f"Total: ${total}")
# Output: Total: $59.97

print(f"Total: ${price * quantity}")  # Expression inside {}
# Output: Total: $59.97
```

---

## 🔄 Program Flow: Putting It All Together

Here's the complete flow of a Python program:

```
┌─────────────────────────────────────────────┐
│  Program Execution Flow                     │
├─────────────────────────────────────────────┤
│                                             │
│   1. Start at the top                       │
│         ↓                                   │
│   2. Execute line 1                         │
│         ↓                                   │
│   3. Execute line 2                         │
│         ↓                                   │
│   4. If input() → pause, wait for user      │
│         ↓                                   │
│   5. Continue to next line                  │
│         ↓                                   │
│   6. Repeat until end of file               │
│         ↓                                   │
│   7. Program ends                           │
│                                             │
└─────────────────────────────────────────────┘
```

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Forgetting Quotes Around Strings

```python
# ❌ Wrong
print(Hello World)  # Error!

# ✅ Correct
print("Hello World")
```

### Mistake 2: Mismatched Quotes

```python
# ❌ Wrong
print("Hello World')  # Starts with " ends with '

# ✅ Correct
print("Hello World")
print('Hello World')  # Both work if matched
```

### Mistake 3: Treating input() as a Number

```python
# ❌ Wrong
age = input("Age: ")
future_age = age + 5  # Error! Can't add string and int

# ✅ Correct
age = input("Age: ")
future_age = int(age) + 5
```

### Mistake 4: Missing Parentheses

```python
# ❌ Wrong
print "Hello"  # This was Python 2 syntax

# ✅ Correct
print("Hello")
```

### Mistake 5: Using input() Without Assigning

```python
# ❌ Not useful - input is discarded
input("Enter name: ")

# ✅ Correct - store it in a variable
name = input("Enter name: ")
```

---

## ✅ Best Practices

1. **Use descriptive prompts** in `input()`:
   ```python
   # ❌ Vague
   x = input("? ")
   
   # ✅ Clear
   name = input("Please enter your name: ")
   ```

2. **Add a space at the end of prompts**:
   ```python
   # ❌ No space - looks cramped
   name = input("Name:")  # Output: Name:John
   
   # ✅ Space included
   name = input("Name: ")  # Output: Name: John
   ```

3. **Use print() for visual separation**:
   ```python
   print()  # Empty line for spacing
   print("-" * 40)  # Visual separator
   ```

4. **Comment your code**:
   ```python
   # Get user's name
   name = input("Enter your name: ")
   
   # Display personalized greeting
   print(f"Hello, {name}!")
   ```

---

## 💼 Real-World Use Cases

### Simple Calculator Interaction

```python
print("Simple Calculator")
num1 = input("Enter first number: ")
num2 = input("Enter second number: ")
result = float(num1) + float(num2)
print(f"The sum is: {result}")
```

### Basic Form Collection

```python
print("User Registration")
email = input("Email: ")
username = input("Username: ")
print(f"Account created for {username} ({email})")
```

### Quick Note Taker

```python
note = input("Enter your note: ")
print(f"Note saved: '{note}'")
```

---

## 📝 Mini Exercises

### Exercise 1: Temperature Converter (Display Only)
Create a program that:
1. Asks for a temperature in Celsius
2. Converts it to Fahrenheit (Formula: F = C × 9/5 + 32)
3. Displays the result

### Exercise 2: Mad Libs Game
Create a program that:
1. Asks for a noun, verb, and adjective
2. Prints a silly sentence using those words

### Exercise 3: Receipt Generator
Create a program that:
1. Asks for an item name
2. Asks for quantity
3. Asks for price per item
4. Displays a formatted receipt

---

## 🎯 Mini Project: Interactive Story

Create a short interactive story that uses at least:
- 3 `input()` calls
- 5 `print()` statements
- f-strings for personalization

Example idea: An adventure where the user chooses their character name, picks a path, and gets a personalized ending.

---

## 🔮 What's Next?

In **Post 04: Python Syntax Basics**, you'll learn:

- Python's indentation rules
- Comments and documentation
- Statement structure
- The importance of whitespace

You've written your first interactive program! Let's now understand how Python's syntax works.

---

## 📖 Summary

| Concept | Purpose | Example |
|---------|---------|---------|
| `print()` | Display output | `print("Hello")` |
| `input()` | Get user input | `name = input("Name: ")` |
| f-strings | Format strings | `f"Hello, {name}"` |
| Sequential execution | Top-to-bottom flow | Line 1 → Line 2 → Line 3 |

---

## 🔗 Additional Resources

- [Python print() Documentation](https://docs.python.org/3/library/functions.html#print)
- [Python input() Documentation](https://docs.python.org/3/library/functions.html#input)
- [f-String Guide](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals)

---

[← Previous: Installing Python](../02-installing-python/) | [Back to Index](../../README.md) | [Next: Python Syntax Basics →](../04-python-syntax-basics/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

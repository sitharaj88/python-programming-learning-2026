# Post 08: Strings in Python

[← Previous: Numbers in Python](../07-numbers-in-python/) | [Back to Index](../../README.md) | [Next: String Methods & f-Strings →](../09-string-methods-and-f-strings/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 08 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 18 minutes

---

## 🎯 Target Audience

This post is for:

- **Beginners** learning to work with text data
- **Anyone** processing user input, files, or web data
- **Developers** needing solid string fundamentals

Prerequisites: Posts 01-07 completed

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Create strings using various methods
2. Access characters with indexing and slicing
3. Understand string immutability
4. Use common string operations
5. Work with escape characters

---

## 💡 Why This Matters in 2026

Strings are everywhere:

- **User interfaces**: Forms, messages, prompts
- **Data processing**: Files, APIs, databases
- **Web development**: HTML, URLs, JSON
- **Output formatting**: Reports, logs, displays

Almost every program you write will manipulate text.

---

## ✏️ Creating Strings

### Single and Double Quotes

```python
# Both work the same
name = 'Alice'
greeting = "Hello, World!"

# Use one when you need the other inside
message = "It's a beautiful day"
quote = 'She said "Hello"'
```

### Triple Quotes for Multi-line

```python
# Multi-line strings
poem = """Roses are red,
Violets are blue,
Python is awesome,
And so are you!"""

# Preserves line breaks
print(poem)
```

### Raw Strings (Ignore Escapes)

```python
# Normal string - \n is newline
path = "C:\new\folder"   # \n and \f are escape sequences!

# Raw string - treats backslash literally
path = r"C:\new\folder"  # Properly preserved
print(path)  # C:\new\folder
```

---

## 🔤 String Indexing

Strings are sequences of characters. Each character has an index.

```
   H   e   l   l   o
   0   1   2   3   4    ← Positive index
  -5  -4  -3  -2  -1    ← Negative index
```

### Accessing Characters

```python
greeting = "Hello"

# Positive indexing (from start)
print(greeting[0])   # 'H' (first character)
print(greeting[1])   # 'e'
print(greeting[4])   # 'o' (last character)

# Negative indexing (from end)
print(greeting[-1])  # 'o' (last character)
print(greeting[-2])  # 'l' (second to last)
print(greeting[-5])  # 'H' (first, same as [0])
```

### Index Errors

```python
greeting = "Hello"
# print(greeting[10])  # IndexError: string index out of range
```

---

## ✂️ String Slicing

Extract a portion of a string using `[start:stop:step]`.

### Basic Slicing

```python
text = "Python Programming"
#       0123456789...

print(text[0:6])     # 'Python' (index 0 to 5)
print(text[7:18])    # 'Programming'
print(text[:6])      # 'Python' (from start)
print(text[7:])      # 'Programming' (to end)
print(text[:])       # 'Python Programming' (full copy)
```

### Slicing with Step

```python
text = "Python Programming"

print(text[::2])     # 'Pto rgamn' (every 2nd character)
print(text[::3])     # 'Ph oai' (every 3rd character)
print(text[::-1])    # 'gnimmargorP nohtyP' (reversed!)
```

### Practical Examples

```python
email = "user@example.com"

# Get username
username = email[:email.index('@')]
print(username)  # 'user'

# Get domain
domain = email[email.index('@')+1:]
print(domain)  # 'example.com'
```

---

## 🔒 String Immutability

Strings **cannot be changed** after creation.

```python
name = "Python"
# name[0] = 'J'  # TypeError: 'str' object doesn't support item assignment

# Instead, create a new string
name = "J" + name[1:]
print(name)  # 'Jython'
```

---

## 🔗 String Operations

### Concatenation (+)

```python
first = "Hello"
second = "World"

combined = first + " " + second
print(combined)  # 'Hello World'
```

### Repetition (*)

```python
line = "-" * 40
print(line)  # '----------------------------------------'

echo = "Hello! " * 3
print(echo)  # 'Hello! Hello! Hello! '
```

### Length (len)

```python
message = "Hello, Python!"
print(len(message))  # 14
```

### Membership (in)

```python
text = "Python Programming"

print("Python" in text)     # True
print("python" in text)     # False (case-sensitive)
print("Java" in text)       # False
print("Java" not in text)   # True
```

---

## 🔡 Escape Characters

Special characters that start with backslash `\`:

| Escape | Meaning | Example |
|--------|---------|---------|
| `\n` | Newline | `"Line1\nLine2"` |
| `\t` | Tab | `"Col1\tCol2"` |
| `\\` | Backslash | `"C:\\path"` |
| `\'` | Single quote | `'It\'s fine'` |
| `\"` | Double quote | `"She said \"Hi\""` |
| `\r` | Carriage return | Used in some files |

```python
# Newlines
print("Hello\nWorld")
# Hello
# World

# Tabs (for alignment)
print("Name\tAge\tCity")
print("Alice\t25\tSeattle")
# Name    Age     City
# Alice   25      Seattle

# Quotes within quotes
print("She said \"Python is awesome!\"")
# She said "Python is awesome!"
```

---

## 📊 String Comparisons

Strings are compared lexicographically (dictionary order):

```python
print("apple" < "banana")   # True (a comes before b)
print("apple" < "Apple")    # False (lowercase > uppercase in ASCII)
print("abc" == "abc")       # True
print("abc" != "ABC")       # True

# Comparison is character by character
print("apple" < "application")  # True (at 'l' vs 'i')
```

---

## ⚠️ Common Beginner Mistakes

### Mistake 1: Modifying Strings Directly

```python
# ❌ Won't work
s = "hello"
s[0] = "H"  # TypeError!

# ✅ Create new string
s = "H" + s[1:]
```

### Mistake 2: Off-by-One in Slicing

```python
# Remember: end index is EXCLUSIVE
text = "Hello"
print(text[0:3])  # 'Hel' (not 'Hell')
print(text[0:4])  # 'Hell'
```

### Mistake 3: Forgetting Case Sensitivity

```python
# ❌ Won't find it
if "Python" in "python is fun":
    print("Found!")  # Won't print

# ✅ Convert to same case
if "Python".lower() in "python is fun":
    print("Found!")  # Will print
```

---

## ✅ Best Practices

1. **Use f-strings** for formatting (covered in Post 09)
2. **Use raw strings** for file paths: `r"C:\Users\name"`
3. **Check string length** before indexing
4. **Be consistent** with quote style
5. **Use triple quotes** for multi-line strings or docstrings

---

## 💼 Real-World Examples

### Basic User Input Processing

```python
user_input = "  John Smith  "
clean_name = user_input.strip()  # Remove whitespace
print(f"Hello, {clean_name}!")
```

### Extracting File Extension

```python
filename = "document.pdf"
extension = filename[filename.rfind('.')+1:]
print(f"Extension: {extension}")  # pdf
```

### Creating Formatted Output

```python
title = "Python Programming"
line = "=" * len(title)
print(line)
print(title)
print(line)
```

---

## 📝 Mini Exercises

1. Create a string and print its first, last, and middle characters.
2. Reverse a string using slicing.
3. Check if a word is in a sentence (case-insensitive).
4. Extract the year from the string "Date: 2026-01-11".

---

## 🔮 What's Next?

In **Post 09: String Methods & f-Strings**, you'll learn:

- Powerful string methods (.upper(), .split(), etc.)
- f-String formatting
- Advanced string manipulation

You now understand string basics. Let's explore powerful string methods!

---

## 📖 Summary

| Concept | Example |
|---------|---------|
| Create string | `"hello"` or `'hello'` |
| Index | `s[0]` first, `s[-1]` last |
| Slice | `s[0:5]` or `s[::-1]` reverse |
| Concatenate | `"hello" + "world"` |
| Repeat | `"-" * 40` |
| Length | `len(s)` |
| Contains | `"py" in "python"` |

---

[← Previous: Numbers in Python](../07-numbers-in-python/) | [Back to Index](../../README.md) | [Next: String Methods & f-Strings →](../09-string-methods-and-f-strings/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

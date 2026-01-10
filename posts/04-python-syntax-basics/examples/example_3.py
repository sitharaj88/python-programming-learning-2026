"""
Example 3: Line Continuation and Code Structure
Python Programming Learning 2026 - Post 04

This example demonstrates how to handle long lines
and structure Python code properly.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Line Continuation and Code Structure")
print("=" * 50)

# ============================================
# 1. Explicit Line Continuation (Backslash)
# ============================================
print("\n--- 1. Backslash Continuation ---")

# Long mathematical expression
result = 100 + 200 + 300 + \
         400 + 500 + 600 + \
         700 + 800 + 900

print(f"Sum: {result}")

# Long conditional
age = 25
has_license = True
is_insured = True

if age >= 18 and \
   has_license and \
   is_insured:
    print("Can rent a car")

# ============================================
# 2. Implicit Continuation (Brackets)
# ============================================
print("\n--- 2. Bracket Continuation ---")

# Lists naturally continue across lines
colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple"
]
print(f"Colors: {colors}")

# Dictionaries
person = {
    "name": "Alice",
    "age": 30,
    "city": "Seattle",
    "occupation": "Developer"
}
print(f"Person: {person}")

# Function calls with many arguments
print(
    "This is a message",
    "that spans multiple",
    "function arguments",
    sep="\n"
)

# ============================================
# 3. String Continuation
# ============================================
print("\n--- 3. String Continuation ---")

# Method 1: Adjacent strings (automatically concatenated)
message = (
    "This is a long message "
    "that has been split across "
    "multiple lines for readability."
)
print(message)

# Method 2: Triple-quoted strings
paragraph = """
This is a paragraph that spans
multiple lines. It preserves
the line breaks in the output.
"""
print(paragraph)

# Method 3: Explicit concatenation
greeting = "Hello, " + \
           "Python " + \
           "programmer!"
print(greeting)

# ============================================
# 4. Proper Code Formatting
# ============================================
print("\n--- 4. Proper Formatting ---")


# Good: Blank lines between logical sections
def calculate_total(items):
    """Calculate total with tax."""
    subtotal = sum(items)
    
    # Apply tax
    tax_rate = 0.08
    tax = subtotal * tax_rate
    
    # Calculate final total
    total = subtotal + tax
    
    return total


items = [10, 20, 30, 40]
total = calculate_total(items)
print(f"Total with tax: ${total:.2f}")

# ============================================
# 5. The pass Statement
# ============================================
print("\n--- 5. The pass Statement ---")


# Empty function (placeholder)
def future_feature():
    pass  # TODO: Implement later


# Empty class (placeholder)
class FutureClass:
    pass


# Empty conditional branch
x = 10
if x < 5:
    pass  # Handle small numbers later
elif x < 20:
    print(f"{x} is medium")
else:
    pass  # Handle large numbers later

print("pass statement examples complete")

# ============================================
# 6. Multiple Statements (Avoid Usually)
# ============================================
print("\n--- 6. Multiple Statements ---")

# Technical valid but not recommended
a = 1; b = 2; c = 3
print(f"a={a}, b={b}, c={c}")

# Preferred: One statement per line
x = 1
y = 2
z = 3
print(f"x={x}, y={y}, z={z}")

# ============================================
# 7. Case Sensitivity Demo
# ============================================
print("\n--- 7. Case Sensitivity ---")

# These are all different variables
name = "lowercase"
Name = "capitalized"
NAME = "uppercase"
nAmE = "mixed_case"

print(f"name: {name}")
print(f"Name: {Name}")
print(f"NAME: {NAME}")
print(f"nAmE: {nAmE}")

print("\n" + "=" * 50)
print("Code structure examples complete!")
print("=" * 50)

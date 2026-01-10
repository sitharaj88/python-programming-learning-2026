"""
Example 2: Comments and Documentation
Python Programming Learning 2026 - Post 04

This example shows different types of comments and 
how to document your Python code properly.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Comments and Documentation in Python")
print("=" * 50)

# ============================================
# 1. Single-Line Comments
# ============================================
print("\n--- 1. Single-Line Comments ---")

# This is a single-line comment
# Python completely ignores these lines
# Use them to explain your code

x = 10  # Inline comment: initial value
y = 20  # Inline comment: second value

print(f"x = {x}, y = {y}")

# ============================================
# 2. Multi-Line Comments (Using #)
# ============================================
print("\n--- 2. Multi-Line Comments ---")

# This is a multi-line comment using
# multiple hash symbols. Each line
# needs its own # symbol at the start.
# This is common for longer explanations.

result = x + y
print(f"Sum: {result}")

# ============================================
# 3. Triple-Quoted Strings (Multi-Line Text)
# ============================================
print("\n--- 3. Triple-Quoted Strings ---")

"""
This is a triple-quoted string.
It can span multiple lines.
When not assigned to a variable,
it acts like a multi-line comment.
"""

explanation = """
Triple-quoted strings can also be
assigned to variables. They preserve
line breaks and formatting.
"""

print("Triple-quoted string content:")
print(explanation)

# ============================================
# 4. Docstrings (Documentation Strings)
# ============================================
print("\n--- 4. Docstrings ---")


def calculate_rectangle_area(width, height):
    """
    Calculate the area of a rectangle.
    
    This function takes the width and height of a rectangle
    and returns the calculated area.
    
    Args:
        width (float): The width of the rectangle
        height (float): The height of the rectangle
        
    Returns:
        float: The area of the rectangle (width * height)
        
    Example:
        >>> calculate_rectangle_area(5, 3)
        15
    """
    return width * height


# Access docstring programmatically
print("Function docstring:")
print(calculate_rectangle_area.__doc__)
print()

# Use the function
area = calculate_rectangle_area(10, 5)
print(f"Area of 10x5 rectangle: {area}")

# ============================================
# 5. Comment Best Practices
# ============================================
print("\n--- 5. Comment Best Practices ---")

# BAD: Obvious comment that adds no value
counter = 0  # Set counter to 0

# GOOD: Explains WHY, not WHAT
counter = 0  # Reset counter for new calculation batch

# BAD: Comment doesn't match code
# Calculate the sum
result = x * y  # This is multiplication, not sum!

# GOOD: Comment accurately describes code
# Calculate the product for area calculation
result = x * y

print(f"Result: {result}")

# ============================================
# 6. TODO Comments
# ============================================
print("\n--- 6. TODO Comments ---")

# TODO: Add error handling for negative numbers
# TODO: Implement caching for better performance
# FIXME: This calculation may overflow for large numbers
# NOTE: This assumes input is already validated

# These special comments help track work items
print("TODO comments help track future work!")

# ============================================
# 7. Section Dividers
# ============================================
print("\n--- 7. Section Dividers ---")

# ========== CONFIGURATION ==========
config_value = 100

# ========== MAIN LOGIC ==========
processed = config_value * 2

# ========== OUTPUT ==========
print(f"Processed value: {processed}")

print("\n" + "=" * 50)
print("Comments examples complete!")
print("=" * 50)

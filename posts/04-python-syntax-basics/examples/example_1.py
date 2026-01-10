"""
Example 1: Understanding Python Indentation
Python Programming Learning 2026 - Post 04

This example demonstrates how Python uses indentation 
to define code blocks.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Understanding Python Indentation")
print("=" * 50)

# ============================================
# 1. Basic Indentation After Colon
# ============================================
print("\n--- 1. Basic Indentation ---")

condition = True

if condition:
    print("This is inside the if block")
    print("This is also inside the if block")
    print("All these have the same indentation")

print("This is outside the if block (no indentation)")

# ============================================
# 2. Nested Indentation
# ============================================
print("\n--- 2. Nested Indentation ---")

level_1 = True
level_2 = True

if level_1:
    print("Level 1 - 4 spaces")
    
    if level_2:
        print("Level 2 - 8 spaces")
        print("Still at level 2")
    
    print("Back to level 1")

print("Back to level 0 (no indentation)")

# ============================================
# 3. Loop Indentation
# ============================================
print("\n--- 3. Loop Indentation ---")

for i in range(3):
    print(f"  Loop iteration {i}")
    print(f"  Still in loop, same block")

print("Outside the loop now")

# ============================================
# 4. Function Indentation
# ============================================
print("\n--- 4. Function Indentation ---")


def greet(name):
    """Function body is indented."""
    message = f"Hello, {name}!"
    return message


# Function call is at outer level
result = greet("Python Learner")
print(result)

# ============================================
# 5. Multiple Levels (Complex Example)
# ============================================
print("\n--- 5. Multiple Levels ---")

categories = {
    "fruits": ["apple", "banana"],
    "vegetables": ["carrot", "broccoli"]
}

for category, items in categories.items():
    print(f"Category: {category}")
    
    for item in items:
        print(f"  - {item}")
        
        if item.startswith("a"):
            print(f"    (starts with 'a')")
    
    print()  # Empty line between categories

print("=" * 50)
print("Indentation examples complete!")
print("=" * 50)

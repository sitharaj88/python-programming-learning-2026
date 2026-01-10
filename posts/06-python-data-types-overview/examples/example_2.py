"""
Example 2: Type Checking with type() and isinstance()
Python Programming Learning 2026 - Post 06

This example shows how to check and verify data types.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Type Checking in Python")
print("=" * 50)

# ============================================
# 1. Using type()
# ============================================
print("\n--- 1. Using type() ---")

values = [
    42,
    3.14,
    "hello",
    True,
    [1, 2, 3],
    (1, 2, 3),
    {"a": 1},
    {1, 2, 3},
    None
]

for value in values:
    print(f"type({str(value):15}) = {type(value)}")

# ============================================
# 2. Comparing Types
# ============================================
print("\n--- 2. Comparing Types ---")

x = 42

print(f"x = {x}")
print(f"type(x) == int: {type(x) == int}")
print(f"type(x) == float: {type(x) == float}")
print(f"type(x) == str: {type(x) == str}")

# ============================================
# 3. Using isinstance()
# ============================================
print("\n--- 3. Using isinstance() ---")

x = 42

print(f"isinstance({x}, int): {isinstance(x, int)}")
print(f"isinstance({x}, float): {isinstance(x, float)}")
print(f"isinstance({x}, str): {isinstance(x, str)}")

# ============================================
# 4. isinstance() with Multiple Types
# ============================================
print("\n--- 4. Check Multiple Types ---")

values = [42, 3.14, "hello"]

for val in values:
    is_numeric = isinstance(val, (int, float))
    is_text = isinstance(val, str)
    print(f"{val:>8}: numeric={is_numeric}, text={is_text}")

# ============================================
# 5. type() vs isinstance() - The Difference
# ============================================
print("\n--- 5. type() vs isinstance() ---")

# Boolean is a subclass of int
value = True

print(f"value = {value}")
print(f"type(value) == bool: {type(value) == bool}")     # True
print(f"type(value) == int: {type(value) == int}")       # False
print(f"isinstance(value, bool): {isinstance(value, bool)}")  # True
print(f"isinstance(value, int): {isinstance(value, int)}")    # True!

print("\nExplanation: bool is a subclass of int in Python")
print("isinstance() checks inheritance, type() checks exact type")

# ============================================
# 6. Practical Type Checking Function
# ============================================
print("\n--- 6. Practical Example ---")


def describe_value(value):
    """Describe the type and characteristics of a value."""
    if value is None:
        return "None (no value)"
    elif isinstance(value, bool):  # Check bool BEFORE int (bool is subclass)
        return f"Boolean: {value}"
    elif isinstance(value, int):
        return f"Integer: {value}"
    elif isinstance(value, float):
        return f"Float: {value}"
    elif isinstance(value, str):
        return f"String: '{value}' (length: {len(value)})"
    elif isinstance(value, list):
        return f"List: {value} (length: {len(value)})"
    elif isinstance(value, dict):
        return f"Dictionary: {len(value)} keys"
    else:
        return f"Unknown type: {type(value)}"


test_values = [42, 3.14, "hello", True, None, [1, 2, 3], {"a": 1}]

for val in test_values:
    print(describe_value(val))

# ============================================
# 7. Getting Type Name as String
# ============================================
print("\n--- 7. Type Name as String ---")

x = [1, 2, 3]

# Get type name
type_obj = type(x)
type_name = type(x).__name__

print(f"Full type: {type_obj}")
print(f"Type name: {type_name}")

print("\n" + "=" * 50)
print("Type checking examples complete!")
print("=" * 50)

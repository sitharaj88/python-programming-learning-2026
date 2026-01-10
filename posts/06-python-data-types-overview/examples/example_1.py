"""
Example 1: Exploring Python Data Types
Python Programming Learning 2026 - Post 06

This example demonstrates all the built-in data types in Python.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Python Built-in Data Types")
print("=" * 50)

# ============================================
# 1. Numeric Types
# ============================================
print("\n--- 1. Numeric Types ---")

# Integer
integer_value = 42
print(f"Integer: {integer_value} (type: {type(integer_value).__name__})")

# Float
float_value = 3.14159
print(f"Float: {float_value} (type: {type(float_value).__name__})")

# Complex
complex_value = 3 + 4j
print(f"Complex: {complex_value} (type: {type(complex_value).__name__})")

# ============================================
# 2. Text Type
# ============================================
print("\n--- 2. Text Type ---")

string_single = 'Hello'
string_double = "World"
string_multi = """Multi
line"""

print(f"String: '{string_single}' (type: {type(string_single).__name__})")

# ============================================
# 3. Boolean Type
# ============================================
print("\n--- 3. Boolean Type ---")

bool_true = True
bool_false = False

print(f"Boolean True: {bool_true} (type: {type(bool_true).__name__})")
print(f"Boolean False: {bool_false} (type: {type(bool_false).__name__})")

# ============================================
# 4. Sequence Types
# ============================================
print("\n--- 4. Sequence Types ---")

# List - ordered, mutable
my_list = [1, 2, 3, "mixed", True]
print(f"List: {my_list} (type: {type(my_list).__name__})")

# Tuple - ordered, immutable
my_tuple = (1, 2, 3, "mixed", True)
print(f"Tuple: {my_tuple} (type: {type(my_tuple).__name__})")

# Range - sequence of numbers
my_range = range(5)
print(f"Range: {list(my_range)} (type: {type(my_range).__name__})")

# ============================================
# 5. Mapping Type
# ============================================
print("\n--- 5. Mapping Type ---")

my_dict = {
    "name": "Alice",
    "age": 30,
    "active": True
}
print(f"Dictionary: {my_dict}")
print(f"  (type: {type(my_dict).__name__})")

# ============================================
# 6. Set Types
# ============================================
print("\n--- 6. Set Types ---")

my_set = {1, 2, 3, 3, 3}  # Duplicates removed
print(f"Set: {my_set} (type: {type(my_set).__name__})")

my_frozenset = frozenset({1, 2, 3})
print(f"Frozenset: {my_frozenset} (type: {type(my_frozenset).__name__})")

# ============================================
# 7. None Type
# ============================================
print("\n--- 7. None Type ---")

nothing = None
print(f"None: {nothing} (type: {type(nothing).__name__})")

# ============================================
# Summary Table
# ============================================
print("\n" + "=" * 50)
print("Summary of Data Types")
print("=" * 50)

types_data = [
    ("int", 42, "Whole numbers"),
    ("float", 3.14, "Decimal numbers"),
    ("str", "hello", "Text"),
    ("bool", True, "True/False"),
    ("list", [1, 2, 3], "Ordered, mutable"),
    ("tuple", (1, 2, 3), "Ordered, immutable"),
    ("dict", {"a": 1}, "Key-value pairs"),
    ("set", {1, 2, 3}, "Unique elements"),
    ("NoneType", None, "Absence of value"),
]

print(f"\n{'Type':<12} {'Example':<20} {'Description'}")
print("-" * 50)
for type_name, example, description in types_data:
    print(f"{type_name:<12} {str(example):<20} {description}")

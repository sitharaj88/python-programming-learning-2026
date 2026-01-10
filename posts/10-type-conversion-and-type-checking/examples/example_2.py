"""
Example 2: Error Handling in Type Conversion
Python Programming Learning 2026 - Post 10

This example shows how to handle conversion errors safely.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Error Handling in Type Conversion")
print("=" * 50)

# ============================================
# 1. Common Conversion Errors
# ============================================
print("\n--- 1. Common Errors ---")

test_values = ["42", "3.14", "hello", "", None]

for val in test_values:
    print(f"\nTrying: int({repr(val)})")
    try:
        result = int(val)
        print(f"  Success: {result}")
    except ValueError as e:
        print(f"  ValueError: {e}")
    except TypeError as e:
        print(f"  TypeError: {e}")

# ============================================
# 2. Safe Conversion Functions
# ============================================
print("\n--- 2. Safe Conversion Functions ---")


def safe_int(value, default=0):
    """Convert to int safely, return default on failure."""
    try:
        return int(value)
    except (ValueError, TypeError):
        return default


def safe_float(value, default=0.0):
    """Convert to float safely, return default on failure."""
    try:
        return float(value)
    except (ValueError, TypeError):
        return default


# Test safe_int
print("Testing safe_int():")
test_cases = ["42", "3.14", "hello", "", None, True]
for val in test_cases:
    result = safe_int(val)
    print(f"  safe_int({repr(val):10}) = {result}")

print("\nTesting safe_float():")
for val in test_cases:
    result = safe_float(val)
    print(f"  safe_float({repr(val):10}) = {result}")

# ============================================
# 3. Validation Before Conversion
# ============================================
print("\n--- 3. Validation Before Conversion ---")

test_strings = ["42", "-17", "3.14", "hello", "42abc", ""]

print("Checking with .isdigit():")
for s in test_strings:
    is_digit = s.isdigit() if s else False
    print(f"  '{s}'.isdigit() = {is_digit}")

# Note: isdigit() limitation
print("\nLimitation: isdigit() doesn't handle negatives or floats")
print("  '-17'.isdigit() =", "-17".isdigit())  # False
print("  '3.14'.isdigit() =", "3.14".isdigit())  # False


# Better validation
def is_integer_string(s):
    """Check if string represents an integer."""
    if not s:
        return False
    if s[0] in ('+', '-'):
        return s[1:].isdigit()
    return s.isdigit()


def is_float_string(s):
    """Check if string represents a float."""
    try:
        float(s)
        return True
    except (ValueError, TypeError):
        return False


print("\nBetter validation:")
for s in test_strings:
    is_int = is_integer_string(s)
    is_flt = is_float_string(s)
    print(f"  '{s}': is_int={is_int}, is_float={is_flt}")

# ============================================
# 4. Robust Input Function
# ============================================
print("\n--- 4. Robust Input Pattern ---")


def get_validated_number(prompt, num_type=float, min_val=None, max_val=None):
    """
    Get validated numeric input.
    (Demo version - doesn't actually read input)
    """
    # Simulating user input for demo
    test_inputs = ["abc", "-5", "150", "25"]
    
    for user_input in test_inputs:
        print(f"  User enters: '{user_input}'")
        try:
            value = num_type(user_input)
            if min_val is not None and value < min_val:
                print(f"    → Error: Must be at least {min_val}")
                continue
            if max_val is not None and value > max_val:
                print(f"    → Error: Must be at most {max_val}")
                continue
            print(f"    → Valid: {value}")
            return value
        except ValueError:
            print("    → Error: Not a valid number")
            continue
    
    return None


print("\nSimulating: get_validated_number('Age', int, 0, 120)")
result = get_validated_number("Enter age: ", int, 0, 120)

print("\n" + "=" * 50)
print("Error handling complete!")
print("=" * 50)

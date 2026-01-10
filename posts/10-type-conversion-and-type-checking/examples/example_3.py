"""
Example 3: Type Checking and Practical Patterns
Python Programming Learning 2026 - Post 10

This example covers type checking and real-world conversion patterns.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Type Checking and Practical Patterns")
print("=" * 50)

# ============================================
# 1. type() vs isinstance()
# ============================================
print("\n--- 1. type() vs isinstance() ---")

x = 42
y = True  # Note: bool is subclass of int

print(f"x = {x}, y = {y}")
print()

print("Using type():")
print(f"  type(x) == int: {type(x) == int}")
print(f"  type(y) == bool: {type(y) == bool}")
print(f"  type(y) == int: {type(y) == int}")  # False!

print("\nUsing isinstance():")
print(f"  isinstance(x, int): {isinstance(x, int)}")
print(f"  isinstance(y, bool): {isinstance(y, bool)}")
print(f"  isinstance(y, int): {isinstance(y, int)}")  # True!

print("\nisinstance() considers inheritance (preferred)")

# ============================================
# 2. Checking Multiple Types
# ============================================
print("\n--- 2. Checking Multiple Types ---")

values = [42, 3.14, "hello", [1, 2], True]

for val in values:
    is_numeric = isinstance(val, (int, float)) and not isinstance(val, bool)
    is_text = isinstance(val, str)
    is_sequence = isinstance(val, (list, tuple))
    
    print(f"{str(val):12} → numeric: {is_numeric:5}, text: {is_text:5}, sequence: {is_sequence}")

# ============================================
# 3. Implicit vs Explicit Conversion
# ============================================
print("\n--- 3. Implicit vs Explicit Conversion ---")

print("Implicit (automatic):")
result = 5 + 3.14
print(f"  5 + 3.14 = {result} (type: {type(result).__name__})")

result = 2 * 3.5
print(f"  2 * 3.5 = {result} (type: {type(result).__name__})")

print("\nExplicit (manual required):")
age = 25
# message = "Age: " + age  # TypeError!
message = "Age: " + str(age)
print(f"  'Age: ' + str({age}) = '{message}'")

# ============================================
# 4. Practical: Data Cleaning
# ============================================
print("\n--- 4. Practical: Data Cleaning ---")

# Raw data from various sources
raw_data = [
    "  42  ",           # Padded number
    "$1,234.56",        # Currency
    "85%",              # Percentage  
    " True ",           # Boolean string
    "N/A",              # Missing value
]

def clean_and_convert(value):
    """Clean and convert various data formats."""
    # Trim whitespace
    value = str(value).strip()
    
    # Handle currency
    if value.startswith('$'):
        return float(value.replace('$', '').replace(',', ''))
    
    # Handle percentage
    if value.endswith('%'):
        return float(value.rstrip('%')) / 100
    
    # Handle boolean strings
    if value.lower() in ('true', 'yes', '1'):
        return True
    if value.lower() in ('false', 'no', '0'):
        return False
    
    # Handle missing values
    if value.lower() in ('n/a', 'na', 'null', 'none', ''):
        return None
    
    # Try numeric conversion
    try:
        if '.' in value:
            return float(value)
        return int(value)
    except ValueError:
        return value  # Return as-is

print("Cleaning raw data:")
for raw in raw_data:
    cleaned = clean_and_convert(raw)
    print(f"  '{raw:15}' → {cleaned:10} ({type(cleaned).__name__})")

# ============================================
# 5. Practical: CSV Row Processing
# ============================================
print("\n--- 5. Practical: CSV Processing ---")

# Simulated CSV data
csv_rows = [
    "Alice,28,85.5,true",
    "Bob,34,92.3,false",
    "Charlie,,78.9,true",  # Missing age
]

def process_csv_row(row):
    """Process a CSV row with proper type conversion."""
    parts = row.split(',')
    
    name = parts[0]
    age = int(parts[1]) if parts[1] else None
    score = float(parts[2])
    active = parts[3].lower() == 'true'
    
    return {
        'name': name,
        'age': age,
        'score': score,
        'active': active
    }

print("Processed CSV data:")
for row in csv_rows:
    data = process_csv_row(row)
    print(f"  {data}")

# ============================================
# 6. Type Summary
# ============================================
print("\n--- 6. Conversion Quick Reference ---")

print("""
┌─────────────────────────────────────────────────┐
│         Type Conversion Quick Reference         │
├─────────────┬───────────────────────────────────┤
│ int(x)      │ Convert to integer                │
│ float(x)    │ Convert to float                  │
│ str(x)      │ Convert to string                 │
│ bool(x)     │ Convert to boolean                │
│ list(x)     │ Convert to list                   │
│ tuple(x)    │ Convert to tuple                  │
│ set(x)      │ Convert to set                    │
├─────────────┼───────────────────────────────────┤
│ type(x)     │ Get exact type                    │
│ isinstance()│ Check type (with inheritance)     │
└─────────────┴───────────────────────────────────┘
""")

print("=" * 50)
print("Type checking complete!")
print("=" * 50)

print("\n🎉 Congratulations! You've completed Phase 1: Foundations!")
print("   Next up: Phase 2 - Core Data Structures")

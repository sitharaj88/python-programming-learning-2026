"""
Example 3: Escape Characters and Special Strings
Python Programming Learning 2026 - Post 08

This example covers escape characters and special string types.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Escape Characters and Special Strings")
print("=" * 50)

# ============================================
# 1. Common Escape Characters
# ============================================
print("\n--- 1. Common Escape Characters ---")

# Newline \n
print("Hello\nWorld")
print()

# Tab \t
print("Name\tAge\tCity")
print("Alice\t25\tSeattle")
print("Bob\t30\tPortland")
print()

# Backslash \\
print("File path: C:\\Users\\name\\Documents")
print()

# Quotes
print("She said \"Hello, World!\"")
print('It\'s a sunny day')

# ============================================
# 2. All Escape Sequences
# ============================================
print("\n--- 2. Escape Sequence Reference ---")

escapes = [
    ("\\n", "Newline", "Line1\nLine2"),
    ("\\t", "Tab", "Col1\tCol2"),
    ("\\\\", "Backslash", "path\\to\\file"),
    ("\\'", "Single Quote", "It's"),
    ("\\\"", "Double Quote", "Say \"Hi\""),
    ("\\r", "Carriage Return", "ABC\rXY"),  # XY overwrites AB
]

for escape, name, example in escapes:
    print(f"  {escape:6} {name:20}")

# ============================================
# 3. Raw Strings (r"...")
# ============================================
print("\n--- 3. Raw Strings ---")

# Normal string - escapes are processed
normal = "C:\new\folder\test"
print(f"Normal: {repr(normal)}")

# Raw string - escapes are literal
raw = r"C:\new\folder\test"
print(f"Raw: {repr(raw)}")

# Useful for:
# - File paths
# - Regular expressions
# - URLs

regex_pattern = r"\d{3}-\d{3}-\d{4}"  # Phone pattern
print(f"Regex pattern: {regex_pattern}")

# ============================================
# 4. Multi-line Strings
# ============================================
print("\n--- 4. Multi-line Strings ---")

# Using triple quotes
poem = """
    Roses are red,
    Violets are blue,
    Python is awesome,
    And so are you!
"""
print(poem)

# Preserves all formatting
sql_query = """
SELECT name, age, city
FROM users
WHERE age > 18
ORDER BY name;
"""
print("SQL Query:", sql_query)

# ============================================
# 5. String Encoding
# ============================================
print("\n--- 5. Unicode and Special Characters ---")

# Unicode characters
heart = "\u2764"
star = "\u2605"
check = "\u2714"
cross = "\u2718"

print(f"Heart: {heart}")
print(f"Star: {star}")
print(f"Check: {check}")
print(f"Cross: {cross}")

# Emoji (using Unicode)
python = "\U0001F40D"
rocket = "\U0001F680"
fire = "\U0001F525"

print(f"\nEmoji: {python} {rocket} {fire}")

# International text
languages = [
    ("English", "Hello"),
    ("Spanish", "Hola"),
    ("Japanese", "こんにちは"),
    ("Korean", "안녕하세요"),
    ("Arabic", "مرحبا"),
    ("Russian", "Привет"),
]

print("\n--- Greetings ---")
for lang, greeting in languages:
    print(f"  {lang}: {greeting}")

# ============================================
# 6. Practical Formatting Example
# ============================================
print("\n--- 6. Practical Example ---")

def print_receipt():
    """Print a formatted receipt."""
    print("\n" + "=" * 40)
    print("\t\tPYTHON STORE")
    print("=" * 40)
    print("Item\t\t\tPrice")
    print("-" * 40)
    print("Widget\t\t\t$10.00")
    print("Gadget\t\t\t$15.50")
    print("Gizmo\t\t\t$22.99")
    print("-" * 40)
    print("Total:\t\t\t$48.49")
    print("=" * 40)
    print("\n\tThank you for shopping!")
    print("\t\"Come back soon!\"\n")

print_receipt()

print("=" * 50)
print("Escape characters complete!")
print("=" * 50)

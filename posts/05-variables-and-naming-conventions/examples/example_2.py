"""
Example 2: Naming Conventions in Python
Python Programming Learning 2026 - Post 05

This example demonstrates proper Python naming conventions
according to PEP 8 style guide.

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("Python Naming Conventions (PEP 8)")
print("=" * 50)

# ============================================
# 1. Variables and Functions: snake_case
# ============================================
print("\n--- 1. snake_case (variables & functions) ---")

# ✅ Good variable names
user_name = "alice_smith"
account_balance = 1250.50
items_in_cart = 5
last_login_date = "2026-01-11"

print(f"Username: {user_name}")
print(f"Balance: ${account_balance}")
print(f"Cart items: {items_in_cart}")
print(f"Last login: {last_login_date}")


# ✅ Good function names (with snake_case)
def calculate_total_price(price, quantity):
    """Calculate total price with tax."""
    tax_rate = 0.08
    subtotal = price * quantity
    return subtotal * (1 + tax_rate)


def get_user_full_name(first_name, last_name):
    """Combine first and last name."""
    return f"{first_name} {last_name}"


total = calculate_total_price(29.99, 2)
print(f"\nTotal price: ${total:.2f}")

full_name = get_user_full_name("Alice", "Smith")
print(f"Full name: {full_name}")

# ============================================
# 2. Constants: UPPER_CASE
# ============================================
print("\n--- 2. UPPER_CASE (constants) ---")

# ✅ Good constant names
MAX_CONNECTIONS = 100
DEFAULT_TIMEOUT = 30
PI = 3.14159
API_BASE_URL = "https://api.example.com"
DEBUG_MODE = False

print(f"Max connections: {MAX_CONNECTIONS}")
print(f"Default timeout: {DEFAULT_TIMEOUT}s")
print(f"Pi value: {PI}")
print(f"API URL: {API_BASE_URL}")
print(f"Debug mode: {DEBUG_MODE}")

# ============================================
# 3. Boolean Variables: is_, has_, can_, should_
# ============================================
print("\n--- 3. Boolean Prefixes ---")

# ✅ Good boolean names (read like questions)
is_active = True
is_admin = False
has_permission = True
has_discount = False
can_edit = True
can_delete = False
should_notify = True
should_retry = False

print(f"Is active? {is_active}")
print(f"Is admin? {is_admin}")
print(f"Has permission? {has_permission}")
print(f"Can edit? {can_edit}")
print(f"Should notify? {should_notify}")

# ============================================
# 4. Private Variables: _single_underscore
# ============================================
print("\n--- 4. Private Convention ---")

# Convention for "internal use" variables
_internal_counter = 0
_cache_data = {}
public_value = 42

print(f"Public value: {public_value}")
print(f"Internal counter: {_internal_counter}")
print("(Underscore prefix suggests internal use)")

# ============================================
# 5. Comparison: Good vs Bad Names
# ============================================
print("\n--- 5. Good vs Bad Names ---")

print("\n❌ Bad naming examples:")
bad_examples = """
d = 7                  # What is d?
n = "Alice"            # What is n?
temp = 98.6            # Temperature? Temporary?
data = [1, 2, 3]       # What kind of data?
x = 0.08               # What does x represent?
"""
print(bad_examples)

print("✅ Good naming examples:")
good_examples = """
days_until_deadline = 7
user_name = "Alice"
body_temperature = 98.6
order_quantities = [1, 2, 3]
tax_rate = 0.08
"""
print(good_examples)

# ============================================
# 6. Real-World Naming Example
# ============================================
print("\n--- 6. Real-World Example ---")

# E-commerce order processing
ORDER_STATUS_PENDING = "pending"
ORDER_STATUS_SHIPPED = "shipped"
ORDER_STATUS_DELIVERED = "delivered"

MAX_ITEMS_PER_ORDER = 50
FREE_SHIPPING_THRESHOLD = 100.00

customer_name = "John Doe"
customer_email = "john@example.com"
order_items = ["Widget", "Gadget", "Gizmo"]
order_total = 125.50
is_premium_member = True
has_free_shipping = order_total >= FREE_SHIPPING_THRESHOLD

print(f"Customer: {customer_name}")
print(f"Email: {customer_email}")
print(f"Items: {order_items}")
print(f"Total: ${order_total}")
print(f"Premium member: {is_premium_member}")
print(f"Free shipping: {has_free_shipping}")

print("\n" + "=" * 50)
print("Naming conventions complete!")
print("=" * 50)

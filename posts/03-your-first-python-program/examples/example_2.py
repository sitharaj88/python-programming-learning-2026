"""
Example 2: The input() Function and User Interaction
Python Programming Learning 2026 - Post 03

This example demonstrates how to get input from users.
NOTE: This script is interactive - run it to try!

Author: Sitharaj Seenivasan
"""

print("=" * 50)
print("The input() Function - Interactive Demo")
print("=" * 50)
print()

# ============================================
# 1. Basic Input
# ============================================
print("--- Basic Input ---")
name = input("What is your name? ")
print(f"Hello, {name}!")
print()

# ============================================
# 2. Input Always Returns a String
# ============================================
print("--- Input Returns Strings ---")
favorite_number = input("Enter your favorite number: ")
print(f"Your number: {favorite_number}")
print(f"Type: {type(favorite_number)}")  # Will show <class 'str'>
print()

# ============================================
# 3. Converting Input to Numbers
# ============================================
print("--- Converting to Numbers ---")
age_str = input("Enter your age: ")
age = int(age_str)  # Convert string to integer
next_year_age = age + 1
print(f"You are {age} years old")
print(f"Next year you'll be {next_year_age}")
print()

# ============================================
# 4. Direct Conversion (Shorthand)
# ============================================
print("--- Direct Conversion ---")
# You can wrap input() directly with int() or float()
birth_year = int(input("Enter your birth year: "))
current_year = 2026
age_approx = current_year - birth_year
print(f"You are approximately {age_approx} years old")
print()

# ============================================
# 5. Float Input
# ============================================
print("--- Float Input ---")
price = float(input("Enter a price: $"))
tax = price * 0.08
total = price + tax
print(f"Price: ${price:.2f}")
print(f"Tax (8%): ${tax:.2f}")
print(f"Total: ${total:.2f}")
print()

# ============================================
# 6. Multiple Inputs
# ============================================
print("--- Multiple Inputs ---")
first_name = input("First name: ")
last_name = input("Last name: ")
city = input("City: ")
print()
print(f"Profile: {first_name} {last_name} from {city}")

print()
print("=" * 50)
print("Interactive demo complete!")
print("=" * 50)

"""
Example 3: Complete Interactive Program - Personal Profile Creator
Python Programming Learning 2026 - Post 03

A complete program that demonstrates input, output, and f-strings.
Run this to create your personal Python programmer profile!

Author: Sitharaj Seenivasan
"""

# ============================================
# Program: Personal Profile Creator
# ============================================

# Header
print()
print("╔" + "═" * 48 + "╗")
print("║" + " " * 12 + "PYTHON PROGRAMMER PROFILE" + " " * 11 + "║")
print("║" + " " * 14 + "Profile Generator v1.0" + " " * 12 + "║")
print("╚" + "═" * 48 + "╝")
print()

# Collect user information
print("Please answer the following questions:")
print("-" * 50)
print()

name = input("Your name: ")
age = input("Your age: ")
country = input("Your country: ")
programming_level = input("Programming experience (beginner/intermediate/advanced): ")
goal = input("What do you want to build with Python? ")
hours_per_week = input("Hours you can dedicate per week: ")
favorite_food = input("Your favorite food (for fun!): ")

# Calculate estimated completion
hours = int(hours_per_week) if hours_per_week.isdigit() else 5
weeks_to_complete = 240 // hours  # Approximate hours for 120 posts

# Generate profile
print()
print("╔" + "═" * 48 + "╗")
print("║" + " " * 16 + "YOUR PROFILE" + " " * 20 + "║")
print("╠" + "═" * 48 + "╣")
print()
print(f"  👤 Name: {name}")
print(f"  🎂 Age: {age}")
print(f"  🌍 Country: {country}")
print(f"  📊 Level: {programming_level.capitalize()}")
print(f"  🎯 Goal: {goal}")
print()
print("  " + "-" * 44)
print()
print(f"  📅 Study Plan: {hours_per_week} hours/week")
print(f"  ⏱️  Est. Completion: ~{weeks_to_complete} weeks")
print(f"  🍕 Fuel: {favorite_food}")
print()
print("╠" + "═" * 48 + "╣")
print("║" + " " * 14 + "PERSONALIZED MESSAGE" + " " * 14 + "║")
print("╠" + "═" * 48 + "╣")
print()

# Personalized message based on level
if programming_level.lower() == "beginner":
    message = "Perfect starting point! Take your time with each post."
elif programming_level.lower() == "intermediate":
    message = "Great foundation! Focus on phases 6-10 for growth."
else:
    message = "Welcome, pro! Check out phases 10-12 for advanced topics."

print(f"  {message}")
print()
print(f"  Remember, {name}: You're not just learning Python")
print(f"  You're building the skills to create {goal}!")
print()
print("╚" + "═" * 48 + "╝")
print()
print(f"Good luck, {name}! 🐍")
print("Let's start with Post 01 when you're ready.")
print()

# Sample run output (when user provides input):
# 
# ╔════════════════════════════════════════════════╗
# ║            PYTHON PROGRAMMER PROFILE           ║
# ║              Profile Generator v1.0            ║
# ╚════════════════════════════════════════════════╝
# 
# Please answer the following questions:
# --------------------------------------------------
# 
# Your name: Alex
# Your age: 25
# Your country: Canada
# Programming experience (beginner/intermediate/advanced): beginner
# What do you want to build with Python? web applications
# Hours you can dedicate per week: 10
# Your favorite food (for fun!): pizza
# 
# ╔════════════════════════════════════════════════╗
# ║                YOUR PROFILE                    ║
# ╠════════════════════════════════════════════════╣
# 
#   👤 Name: Alex
#   🎂 Age: 25
#   🌍 Country: Canada
#   📊 Level: Beginner
#   🎯 Goal: web applications
# 
#   --------------------------------------------
# 
#   📅 Study Plan: 10 hours/week
#   ⏱️  Est. Completion: ~24 weeks
#   🍕 Fuel: pizza
# 
# ╠════════════════════════════════════════════════╣
# ║              PERSONALIZED MESSAGE              ║
# ╠════════════════════════════════════════════════╣
# 
#   Perfect starting point! Take your time with each post.
# 
#   Remember, Alex: You're not just learning Python
#   You're building the skills to create web applications!
# 
# ╚════════════════════════════════════════════════╝
# 
# Good luck, Alex! 🐍
# Let's start with Post 01 when you're ready.

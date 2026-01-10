# Contributing to Python Programming Learning 2026

Thank you for your interest in contributing to this educational resource! This guide will help you get started.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Reporting Issues](#reporting-issues)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Content Standards](#content-standards)

---

## Code of Conduct

This project adheres to a code of conduct that all contributors are expected to follow:

- **Be Respectful**: Treat all community members with respect
- **Be Inclusive**: Welcome newcomers and help them learn
- **Be Constructive**: Focus on improving the content, not criticizing individuals
- **Be Patient**: Remember this is an educational resource for learners

---

## How Can I Contribute?

### 🐛 Fix Errors or Typos

Found a typo, broken link, or code error? We appreciate fixes of all sizes!

1. Fork the repository
2. Create a branch: `git checkout -b fix/typo-in-post-05`
3. Make your fix
4. Submit a pull request

### 📝 Improve Explanations

Is something unclear? Help make it better:

1. Open an issue describing what's confusing
2. Suggest improved wording
3. Or submit a PR with your improvements

### 💡 Add Examples

Have a great example that illustrates a concept?

1. Ensure it follows our [code standards](#python-code-standards)
2. Add clear comments explaining what the code does
3. Submit a PR to the appropriate post's `examples/` folder

### 🌍 Translations

Want to translate content to another language?

1. Open an issue to discuss the scope
2. Create a language-specific branch
3. Maintain the same folder structure

---

## Reporting Issues

When reporting issues, please include:

### For Code Errors:
```markdown
**Post Number**: 07
**File**: examples/example_2.py
**Expected Behavior**: Should print 15.5
**Actual Behavior**: Throws TypeError
**Python Version**: 3.12.1
**OS**: macOS 14.0
```

### For Content Issues:
```markdown
**Post Number**: 15
**Section**: "Iterating Over Nested Structures"
**Issue**: The explanation assumes knowledge of list comprehensions not yet covered
**Suggestion**: Add a brief explanation or link to Post 91
```

---

## Suggesting Enhancements

We welcome suggestions for:

- New examples or use cases
- Additional exercises
- Better explanations
- New topics (for future versions)

Open an issue with the `enhancement` label and describe:
- What you'd like to see
- Why it would be helpful
- Where it should go in the curriculum

---

## Pull Request Process

### Before You Start:

1. Check existing issues and PRs to avoid duplicates
2. For major changes, open an issue first to discuss

### Creating Your PR:

1. Fork and clone the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/improve-string-examples
   ```
3. Make your changes following our style guidelines
4. Test all code examples:
   ```bash
   python -m py_compile posts/*/examples/*.py
   ```
5. Commit with clear messages:
   ```bash
   git commit -m "Add practical example for string slicing in Post 08"
   ```
6. Push and create a Pull Request

### PR Checklist:

- [ ] Code follows PEP-8 style guidelines
- [ ] All Python examples run without errors
- [ ] Documentation is updated if needed
- [ ] Commit messages are clear and descriptive

---

## Style Guidelines

### Python Code Standards

All Python code must:

1. **Follow PEP-8**: Use 4-space indentation, proper naming conventions
2. **Be Beginner-Readable**: Clear variable names, no clever one-liners
3. **Include Comments**: Explain what the code does, especially for learners
4. **Be Self-Contained**: Each example should run independently

```python
# ✅ Good Example
# Calculate the average of a list of numbers
numbers = [10, 20, 30, 40, 50]

# Sum all numbers and divide by count
total = sum(numbers)
count = len(numbers)
average = total / count

print(f"The average is: {average}")
```

```python
# ❌ Bad Example (too terse, no explanation)
print(sum([10,20,30,40,50])/5)
```

### Markdown Standards

- Use ATX-style headers (`#`, `##`, `###`)
- Include blank lines around headers and code blocks
- Use fenced code blocks with language specifiers
- Limit line length to ~100 characters for readability

---

## Content Standards

### Every Post Should Include:

1. Clear learning objectives
2. Progressive explanation (simple → complex)
3. At least 3 working Python examples
4. Common mistakes section
5. Exercises for practice
6. Author footer

### Avoid:

- Jargon without explanation
- Assumptions about prior knowledge (unless stated)
- Deprecated Python features
- Platform-specific code (unless clearly marked)

---

## Recognition

All contributors will be acknowledged in:
- The repository's contributors list
- The post they contributed to (for significant additions)

---

## Questions?

If you have questions about contributing:
1. Check existing issues
2. Open a new issue with the `question` label
3. Be patient for a response

Thank you for helping make Python education better! 🐍

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026  

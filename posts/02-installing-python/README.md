# Post 02: Installing Python & Environment Setup

[← Previous: Why Python in 2026](../01-why-python-in-2026/) | [Back to Index](../../README.md) | [Next: Your First Python Program →](../03-your-first-python-program/)

---

## 📋 Post Index

**Series**: Python Programming Learning 2026  
**Post Number**: 02 of 120  
**Phase**: 1 – Foundations  
**Difficulty**: Beginner  
**Estimated Reading Time**: 20 minutes

---

## 🎯 Target Audience

This post is for:

- **Complete beginners** setting up Python for the first time
- **Users on any operating system** (Windows, macOS, Linux)
- **Developers** who want a professional Python setup
- **Anyone** who wants to follow along with this series

---

## 📚 Learning Objectives

By the end of this post, you will:

1. Understand Python versions and which to install
2. Install Python on your specific operating system
3. Verify your Python installation
4. Set up a code editor (VS Code recommended)
5. Understand the difference between Python and pip
6. Run your first Python command in the terminal

---

## 💡 Why This Matters in 2026

A proper development environment is your foundation for everything that follows. Getting this right means:

- **No frustrating errors** when running examples
- **Professional workflow** from day one
- **Easy package management** for libraries you'll need
- **Consistent experience** across all 120 posts

Take your time with this post. A solid setup now saves hours of debugging later.

---

## 🔍 Understanding Python Versions

### Python 3 vs Python 2

**Always use Python 3.** Python 2 reached end-of-life on January 1, 2020, and is no longer maintained. All modern Python development uses Python 3.

### Which Python 3 Version?

As of 2026, the recommended versions are:

| Version | Status | Recommendation |
|---------|--------|----------------|
| Python 3.12 | Active | ✅ Recommended |
| Python 3.13 | Active | ✅ Also good |
| Python 3.11 | Security fixes only | Acceptable |
| Python 3.10 or older | Various | Not recommended |

This series is tested with **Python 3.12+**.

---

## 💻 Installation by Operating System

### Installing on Windows

#### Step 1: Download Python

1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Click the yellow "Download Python 3.12.x" button
3. The installer (`.exe` file) will download

#### Step 2: Run the Installer

1. Open the downloaded installer
2. **CRITICAL**: Check "Add Python to PATH" at the bottom ✅
3. Click "Install Now"
4. Wait for installation to complete
5. Click "Close"

```
┌─────────────────────────────────────────────────────┐
│  Install Python 3.12.x                              │
│                                                     │
│  ☑️ Add Python 3.12 to PATH  ← CHECK THIS!          │
│                                                     │
│  [Install Now]                                      │
└─────────────────────────────────────────────────────┘
```

#### Step 3: Verify Installation

Open **Command Prompt** (search for "cmd") and type:

```cmd
python --version
```

Expected output:
```
Python 3.12.x
```

Also verify pip:
```cmd
pip --version
```

Expected output:
```
pip 24.x from ... (python 3.12)
```

---

### Installing on macOS

#### Option 1: Using the Official Installer (Recommended for Beginners)

1. Go to [python.org/downloads](https://www.python.org/downloads/)
2. Click "Download Python 3.12.x"
3. Open the downloaded `.pkg` file
4. Follow the installation wizard
5. Click "Install"

#### Step 2: Verify Installation

Open **Terminal** (Cmd + Space, type "Terminal") and type:

```bash
python3 --version
```

Expected output:
```
Python 3.12.x
```

**Note for macOS users**: Use `python3` instead of `python` (macOS has a system Python).

Verify pip:
```bash
pip3 --version
```

#### Option 2: Using Homebrew (Recommended for Developers)

If you have Homebrew installed:

```bash
brew install python@3.12
```

Then verify:
```bash
python3 --version
```

---

### Installing on Linux

#### Ubuntu / Debian

```bash
# Update package list
sudo apt update

# Install Python 3.12
sudo apt install python3.12 python3.12-venv python3-pip

# Verify installation
python3.12 --version
```

#### Fedora

```bash
sudo dnf install python3.12

python3 --version
```

#### Arch Linux

```bash
sudo pacman -S python python-pip

python --version
```

---

## ⚙️ Setting Up Your Code Editor

### Why VS Code?

Visual Studio Code is the most popular editor for Python development. It's:

- **Free and open source**
- **Cross-platform** (Windows, macOS, Linux)
- **Excellent Python support** with extensions
- **Industry standard** for many developers

### Installing VS Code

1. Go to [code.visualstudio.com](https://code.visualstudio.com/)
2. Download for your operating system
3. Run the installer and follow prompts

### Installing the Python Extension

1. Open VS Code
2. Click the Extensions icon (left sidebar) or press `Ctrl+Shift+X`
3. Search for "Python"
4. Install the one by **Microsoft** (verified publisher)

```
┌─────────────────────────────────────────────────────┐
│  Extensions: Marketplace                            │
│                                                     │
│  🔍 Python                                          │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  Python                                      │   │
│  │  Microsoft ✓                                 │   │
│  │  ⭐⭐⭐⭐⭐ (100M+ installs)                   │   │
│  │  [Install]                                   │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

### Configure Python Interpreter

1. Open VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
3. Type "Python: Select Interpreter"
4. Choose Python 3.12.x

---

## 🔧 Understanding Key Components

### What is Python?

`python` (or `python3`) is the **interpreter** that runs your Python code.

```bash
# Run a Python script
python my_script.py

# Start interactive Python shell
python
```

### What is pip?

`pip` is Python's **package manager**. It installs libraries from PyPI.

```bash
# Install a package
pip install requests

# List installed packages
pip list

# Uninstall a package
pip uninstall requests
```

### What is a Virtual Environment?

A virtual environment is an isolated Python environment for your project. We'll cover this in detail in Post 79, but here's a preview:

```bash
# Create a virtual environment
python -m venv myenv

# Activate it (Windows)
myenv\Scripts\activate

# Activate it (macOS/Linux)
source myenv/bin/activate

# Deactivate
deactivate
```

---

## 🖥️ Your First Python Commands

### Using the Interactive Shell

Open your terminal and type `python` (or `python3` on macOS/Linux):

```
$ python
Python 3.12.x (main, ...) 
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

The `>>>` prompt means Python is ready for your commands.

Try these:

```python
>>> print("Hello, Python!")
Hello, Python!

>>> 2 + 2
4

>>> "Python" * 3
'PythonPythonPython'

>>> exit()
```

Type `exit()` or press `Ctrl+D` (macOS/Linux) or `Ctrl+Z` then Enter (Windows) to exit.

### Running a Python File

1. Create a file called `hello.py` with this content:
   ```python
   print("My Python installation works!")
   ```

2. Open terminal in the same directory

3. Run it:
   ```bash
   python hello.py
   ```

4. See the output:
   ```
   My Python installation works!
   ```

---

## ⚠️ Common Installation Problems & Solutions

### Problem: "python is not recognized"

**Cause**: Python wasn't added to PATH during installation.

**Windows Solution**:
1. Re-run the installer
2. Click "Modify"
3. Check "Add Python to PATH"

**Alternative**: Use the full path:
```cmd
C:\Users\YourName\AppData\Local\Programs\Python\Python312\python.exe --version
```

### Problem: `python` runs Python 2 on macOS/Linux

**Solution**: Use `python3` instead of `python`:
```bash
python3 --version
python3 hello.py
```

### Problem: pip installs packages globally

**Solution**: Use virtual environments (covered in Post 79) or the `--user` flag:
```bash
pip install --user package_name
```

### Problem: Permission denied on Linux

**Solution**: Don't use `sudo` with pip. Use `--user`:
```bash
pip install --user package_name
```

---

## 📝 Step-by-Step Verification Checklist

Run these commands to verify your setup:

| Command | Expected Result |
|---------|-----------------|
| `python --version` (or `python3 --version`) | Python 3.12.x |
| `pip --version` (or `pip3 --version`) | pip 24.x |
| `python -c "print('Hello')"` | Hello |

If all three work, you're ready to proceed!

---

## ✅ Best Practices for Your Setup

1. **Always use Python 3.12+** for new projects
2. **Add Python to PATH** during installation
3. **Use VS Code** with the Python extension
4. **Learn virtual environments** early (Post 79)
5. **Keep Python updated** for security and features

---

## 💼 Real-World Setup Scenarios

### Scenario 1: Learning Python (You!)
- Install Python 3.12
- Install VS Code
- You're ready!

### Scenario 2: Data Science
- Python 3.12
- VS Code or Jupyter Notebook
- `pip install numpy pandas matplotlib`

### Scenario 3: Web Development
- Python 3.12
- VS Code
- `pip install django` or `pip install fastapi`

### Scenario 4: Professional Development
- Python 3.12
- VS Code with extensions
- Virtual environments for each project
- Git for version control

---

## 📝 Mini Exercises

1. **Verification Exercise**: Open your terminal and run all three commands from the checklist above. Screenshot your results.

2. **Interactive Exercise**: In the Python shell, calculate:
   - 100 / 7
   - 2 ** 10 (2 to the power of 10)
   - len("Python")

3. **File Exercise**: Create a file called `setup_check.py` with:
   ```python
   import sys
   print(f"Python version: {sys.version}")
   print("Setup complete!")
   ```
   Run it and verify the output.

---

## 🔮 What's Next?

In **Post 03: Your First Python Program**, you'll:

- Write your first complete Python program
- Learn about the `print()` function in depth
- Understand how Python executes code
- Create interactive programs with `input()`

Your environment is ready. Let's write some code!

---

## 📖 Summary

| Task | Status |
|------|--------|
| Install Python 3.12+ | ✅ completed |
| Add to PATH | ✅ completed |
| Verify with `python --version` | ✅ completed |
| Install VS Code | ✅ completed |
| Install Python extension | ✅ completed |
| Run first command | ✅ completed |

---

## 🔗 Additional Resources

- [Official Python Downloads](https://www.python.org/downloads/)
- [VS Code Download](https://code.visualstudio.com/)
- [VS Code Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Python Setup Guide (Official)](https://docs.python.org/3/using/index.html)

---

[← Previous: Why Python in 2026](../01-why-python-in-2026/) | [Back to Index](../../README.md) | [Next: Your First Python Program →](../03-your-first-python-program/)

---

Author: Sitharaj Seenivasan  
Series: Python Programming Learning 2026

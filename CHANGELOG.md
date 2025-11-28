# Change Log

All notable changes to the "luma" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.1] - 2025-11-28

### Added

- Syntax highlighting for Luma language (`.luma` files)
  - Keywords: `let`, `var`, `fn`, `if`, `else`, `for`, `while`, `do`, `end`, `match`, `return`, `break`, `continue`, `in`, `await`, `import`
  - Comments: Single-line (`--`) and multi-line (`--[[ ]]`)
  - Strings with interpolation support (`${expression}`)
  - Numbers: Decimal, hexadecimal, binary, and scientific notation
  - Constants: `true`, `false`, `null`, `Infinity`, `NaN`
  - Types: Built-in and custom types
  - Operators: Arithmetic, comparison, logical, and assignment
  - Functions: Definitions and calls
- Language configuration
  - Comment toggling support
  - Bracket matching and auto-closing
  - Auto-indentation rules
  - Code folding for blocks
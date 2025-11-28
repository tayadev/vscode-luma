# Luma Language Support for VS Code

Provides syntax highlighting and language support for the [Luma](https://github.com/tayadev/luma) programming language.

## Features

### Syntax Highlighting

Full syntax highlighting support for Luma source files (`.luma`):

- **Keywords**: `let`, `var`, `fn`, `if`, `else`, `for`, `while`, `do`, `end`, `match`, `return`, `break`, `continue`, `in`, `await`, `import`
- **Comments**: Single-line (`--`) and multi-line (`--[[ ]]`)
- **Strings**: Double-quoted strings with interpolation (`${expression}`)
- **Numbers**: Decimal, hexadecimal (`0xFF`), binary (`0b1010`), and scientific notation (`1.5e3`)
- **Constants**: `true`, `false`, `null`, `Infinity`, `NaN`
- **Types**: Built-in types like `Number`, `Boolean`, `String`, `List`, `Table`, `Result`, `Option`, `Promise`, and custom types
- **Operators**: Arithmetic, comparison, logical, and assignment operators
- **Functions**: Function definitions and calls

### Language Configuration

- Comment toggling (line and block comments)
- Bracket matching and auto-closing
- Auto-indentation
- Code folding for blocks (`if`/`end`, `fn`/`end`, etc.)

## Requirements

No additional requirements. Just install and open a `.luma` file.

## Extension Settings

This extension does not contribute any settings at this time.

## Known Issues

None at this time.

## Release Notes

### 0.0.1

Initial release:
- Syntax highlighting for Luma language
- Language configuration for comments, brackets, and indentation

---

## For more information

- [Luma Language Repository](https://github.com/tayadev/luma)
- [Luma Language Specification](https://github.com/tayadev/luma/blob/main/SPEC.md)

**Enjoy!**

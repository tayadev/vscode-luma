# vscode-luma

Luma language support for Visual Studio Code.

## Features

This extension provides syntax highlighting for the [Luma programming language](https://github.com/tayadev/luma).

### Syntax Highlighting

- **Keywords**: `let`, `var`, `fn`, `if`, `else`, `do`, `end`, `while`, `for`, `in`, `match`, `return`, `break`, `continue`, `await`
- **Constants**: `true`, `false`, `null`, `Infinity`, `NaN`
- **Comments**: Single-line (`--`) and multi-line (`--[[ ]]`)
- **Strings**: With interpolation support (`${expression}`)
- **Numbers**: Decimal, hexadecimal (`0xFF`), binary (`0b1010`), and scientific notation (`1.5e3`)
- **Types**: Primitive types (`Number`, `Boolean`, `String`, `Null`, `Any`), collections (`List`, `Table`), and result types (`Result`, `Option`, `Promise`)
- **Operators**: Arithmetic, comparison, logical, and assignment operators
- **Special variables**: `self`, `__parent`, operator overloads (`__add`, `__sub`, etc.)

### Language Features

- **Bracket matching**: Automatic matching of `{}`, `[]`, `()`
- **Auto-closing pairs**: Automatic closing of brackets and strings
- **Code folding**: Fold `do...end`, `if...end`, `while...end`, `for...end`, `match...end`, and `fn...end` blocks
- **Indentation**: Automatic indentation for control structures

## Installation

1. Download or clone this repository
2. Copy the extension folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions\`
   - **macOS/Linux**: `~/.vscode/extensions/`
3. Restart VS Code

## Example

```luma
-- This is a single-line comment

--[[
  This is a multi-line comment
]]

let message = "Hello, ${name}!"

let fib = fn(n: Number): Number do
  if n <= 1 do
    n
  else do
    fib(n - 1) + fib(n - 2)
  end
end

let result = fib(10)
print(result)
```

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT

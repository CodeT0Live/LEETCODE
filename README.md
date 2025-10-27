# Simple TypeScript Debugging Project

A minimal TypeScript project set up for VS Code debugging practice.

## Project Structure
```
├── src/
│   └── index.ts          # Main TypeScript file
├── .vscode/
│   └── launch.json       # VS Code debug configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## How to Debug in VS Code

1. **Open the project in VS Code**
2. **Set breakpoints** by clicking in the left margin next to line numbers in `src/index.ts`
3. **Start debugging** by pressing `F5` or going to Run > Start Debugging
4. **Choose "Debug TypeScript"** from the configuration dropdown

## Good Places to Set Breakpoints

Try setting breakpoints on these lines in `src/index.ts`:
- Line 1: `console.log("Hello World!");`
- Line 5: `const message = \`Hello, \${name}!\`;`
- Line 11: `const result = a + b;`
- Line 16: `const greeting = greet(userName);`

## Available Scripts

- `npm run dev` - Run the TypeScript file directly
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript

## Debugging Tips

1. **Step Over (F10)**: Execute the current line and move to the next
2. **Step Into (F11)**: Enter into function calls
3. **Step Out (Shift+F11)**: Exit the current function
4. **Continue (F5)**: Run until the next breakpoint
5. **Variables Panel**: View current variable values
6. **Debug Console**: Evaluate expressions while debugging

## What You'll See

When you run the debugger, the program will:
1. Print "Hello World!"
2. Call the `greet()` function with "Developer"
3. Call the `add()` function with 5 and 3
4. Print the results and finish

Perfect for practicing stepping through code and inspecting variables!

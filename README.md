
# 🧮 JavaScript Calculator

A functional calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations as well as advanced scientific functions like sine, cosine, tangent, square root, factorial, exponentiation, and more.

## ✨ Features

- Basic operations: `+`, `-`, `×`, `÷`, `^`
- Scientific functions: `sin`, `cos`, `tan`, `sqrt`, `x²`, `x!`
- Sign toggle with `+/-` button
- Clear button (`C`) to reset calculator
- Real-time display updates as you input

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Artheek18/js-calculator.git
   ```

2. Open `index.html` in your browser.

## Website

You can access the live version of this calculator by visiting: [Calculator Project](https://artheek18.github.io/calculator-project/)

## 🛠️ Code Structure

- **Functions**: `add`, `subtract`, `multiply`, `divide`, `exponent`, `factorial`, `sqrt`, `sin`, `cos`, `tan`
- **Main Handler**: `operate(input1, input2, operator)`
- **Display Logic**: `updateDisplay()`, input capture, button listeners
- **Global State**: `input1`, `input2`, `operator`, and `isSecondInput`

## 🧠 How It Works

- Input is captured by clicking on buttons.
- Numbers are stored in `input1` and `input2`.
- When an operator is selected, the calculator waits for the second input.
- Upon pressing `=`, the `operate()` function calculates and displays the result.
- Scientific functions (like `sin`, `cos`, etc.) operate immediately on the current input.


## 📌 To Do

- Add keyboard support
- Add memory functions (M+, MR, MC)
- Dark mode toggle 🌙
- Fix Brackets()
- possibly add other functions such as log

## 📄 License

MIT License

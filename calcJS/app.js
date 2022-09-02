class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText
    this.currentOperandText = currentOperandText

    this.clearAll()
  }
}

clearAll() => {
  this.previousOperand = ''
  this.currentOperand = ''
  this.operation = undefined
}

deleteNumber() => {

}

appendNumber(number) => {
  this.currentOperand = number
}

chooseOperation(operation) => {

}

compute() => {

}

updateScreen() => {
  this.currentOperand.innertext = this.currentOperand
}

const currentOperandText = document.getElementByClassName("current-operand")
const previousOperandText = document.getElementByClassName("previous-operand")
const number = document.querySelectorAll('[data-number]')
const operator = document.querySelectorAll('[data-operation]')
const allClear = document.querySelector('[data-all-clear]')
const delete = document.querySelector('[data-delete]')
const equal = document.querySelector('[data-equal]')


const calculator = new Calculator(currentOperandText, previousOperandText)

number.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innertext)
    calculator.updateScreen()
  })
});

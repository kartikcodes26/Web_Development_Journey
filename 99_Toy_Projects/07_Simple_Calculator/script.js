class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.allClear();
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand =
            this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let result;
        let prev = parseFloat(this.previousOperand);
        let curr = parseFloat(this.currentOperand);

        if (isNaN(prev) || isNaN(curr)) {
            return;
        }
        switch (this.operation) {
            case "+":
                result = curr + prev;
                break;
            case "-":
                result = curr - prev;
                break;
            case "*":
                result = curr + prev;
                break;
            case "÷":
                result = curr / prev;
                break;
            default:
                return;
        }
        this.currentOperand = result.toString();
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateDisplay() {
        if (this.currentOperand.endsWith(".")) {
            this.currentOperandTextElement.innerText =
                Number(this.currentOperand.slice(0, -1)).toLocaleString(
                    "en-IN",
                ) + ".";
        } else {
            this.currentOperandTextElement.innerText = Number(
                this.currentOperand,
            ).toLocaleString("en-IN");
        }

        if (this.operation != undefined) {
            this.previousOperandTextElement.innerText = `${Number(this.previousOperand).toLocaleString("en-IN")} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = Number(
                this.previousOperand,
            ).toLocaleString("en-IN");
        }
        if (this.previousOperand === "") {
            this.previousOperandTextElement.innerText = "";
        }
    }

    allClear() {
        this.operation = undefined;
        this.currentOperand = "";
        this.previousOperand = "";
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]",
);
const currentOperandTextElement = document.querySelector(
    "[data-current-operand]",
);

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement,
);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
    calculator.allClear();
    calculator.updateDisplay();
});

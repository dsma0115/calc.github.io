let calculations1 = [];
let results1 = [];
let calculations2 = [];
let results2 = [];

function calculate(calculatorNumber) {
    // Reset results for each calculation
    if (calculatorNumber === 1) {
        results1 = []; // Reset results for Calculator 1
    } else {
        results2 = []; // Reset results for Calculator 2
    }

    let x = parseFloat(document.getElementById(`number1_${calculatorNumber}`).value);
    let y = parseFloat(document.getElementById(`number2_${calculatorNumber}`).value);
    let operator = document.getElementById(`operator${calculatorNumber}`).value;
    let result;

    // Validate input
    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
    } else {
        switch (operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                result = y !== 0 ? x / y : "Error: Division by zero";
                break;
            case "%":
                result = x % y;
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // Store results and display
    if (calculatorNumber === 1) {
        calculations1.push({ x, operator, y, result });
        if (typeof result === "number") {
            results1.push(result);
        }
        displayResults(calculatorNumber, x, operator, y, result);
        displaySummary(calculatorNumber, results1);
    } else {
        calculations2.push({ x, operator, y, result });
        if (typeof result === "number") {
            results2.push(result);
        }
        displayResults(calculatorNumber, x, operator, y, result);
        displaySummary(calculatorNumber, results2);
    }
}

function displayResults(calculatorNumber, x, operator, y, result) {
    const resultDiv = document.getElementById(`result${calculatorNumber}`);
    resultDiv.innerHTML += `<table>
        <tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>
        <tr><td>${x}</td><td>${operator}</td><td>${y}</td><td>${result}</td></tr>
    </table>`;
}

function displaySummary(calculatorNumber, results) {
    const summaryDiv = document.getElementById(`summary${calculatorNumber}`);
    summaryDiv.innerHTML = ""; // Clear previous summary

    if (results.length > 0) {
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((a, b) => a + b, 0);
        let avg = total / results.length;

        summaryDiv.innerHTML += "<table>";
        summaryDiv.innerHTML += "<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>";
        summaryDiv.innerHTML += `<tr><td>${min}</td><td>${max}</td><td>${avg}</td><td>${total}</td></tr>`;
        summaryDiv.innerHTML += "</table>";
    }
}

// Optional: Loading results dynamically
function loadResults(calculatorNumber) {
    // Simulate a loading process, e.g., fetching data or calculations
    const loadingDiv = document.getElementById(`loading${calculatorNumber}`);
    loadingDiv.style.display = 'block'; // Show loading indicator

    setTimeout(() => {
        loadingDiv.style.display = 'none'; // Hide loading after delay
        // You can call calculate(calculatorNumber) or perform other operations here
    }, 1000); // Adjust the timeout as needed
}

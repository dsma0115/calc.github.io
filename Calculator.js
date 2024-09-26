let results = [];

function calculate() {
    while (true) {
        // Get user inputs
        let x = prompt("Enter the first number (x):");
        if (x === null) break; // Exit loop if cancel is clicked
        let y = prompt("Enter the second number (y):");
        if (y === null) break;
        let operator = prompt("Enter an operator (+, -, *, /, %):");
        if (operator === null) break;

        x = parseFloat(x);
        y = parseFloat(y);
        let result;

        // Perform calculation or check for errors
        if (isNaN(x) || isNaN(y)) {
            result = "Error: Non-numeric input";
        } else {
            switch (operator) {
                case '+':
                    result = x + y;
                    break;
                case '-':
                    result = x - y;
                    break;
                case '*':
                    result = x * y;
                    break;
                case '/':
                    result = y !== 0 ? x / y : "Error: Division by zero";
                    break;
                case '%':
                    result = x % y;
                    break;
                default:
                    result = "Error: Invalid operator";
            }
        }

        // Store valid results for summary
        if (typeof result === 'number') {
            results.push(result);
        }

        // Display table row for the current calculation
        document.write("<table border='1'>");
        document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
        document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
        document.write("</table><br>");
    }

    if (results.length > 0) {
        // Calculate summary statistics
        let min = Math.min(...results);
        let max = Math.max(...results);
        let total = results.reduce((a, b) => a + b, 0);
        let avg = total / results.length;

        // Display summary table
        document.write("<table border='1'>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
        document.write("</table>");
    }
}

// Start the calculation process
calculate();

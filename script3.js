function multiplyNumbers() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let result = num1 * num2;
    document.getElementById('result').innerText = `Result: ${num1} * ${num2} = ${result}`;
}

function divideNumbers() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    if (num2 == 0) {
        document.getElementById('result').innerText = "Division by zero is not allowed";
    } else {
        let result = num1 / num2;
        document.getElementById('result').innerText = `Result: ${num1} / ${num2} = ${result}`;
    }
}

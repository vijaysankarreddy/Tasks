function reverseNumber() {
    let number = document.getElementById('numberInput').value;
    let reversedNumber = number.split('').reverse().join('');
    document.getElementById('result').innerText = `Reversed Number: ${reversedNumber}`;
}

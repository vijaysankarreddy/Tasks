function sortString() {
    let inputString = document.getElementById('stringInput').value;
    let sortedString = inputString.split('').sort().join('');
    document.getElementById('result').innerText = `Alphabetically Sorted String: ${sortedString}`;
}

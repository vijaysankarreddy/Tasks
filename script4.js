function showDate() {
    let now = new Date();
    let date = now.toLocaleDateString();
    document.getElementById('datetime').innerText = `Date: ${date}`;
}

function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById('datetime').innerText = `Time: ${time}`;
}

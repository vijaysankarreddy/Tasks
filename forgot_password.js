function handleForgotPassword() {
    const phoneInput = document.getElementById('phone').value.trim();
    const messageElement = document.getElementById('message');
    
    if (phoneInput === '' || !/^\d{10}$/.test(phoneInput)) {
        messageElement.innerText = 'Please enter a valid 10-digit phone number.';
        return false;
    }
    
    const maskedPhone = phoneInput.slice(0, -5).replace(/\d/g, '*') + phoneInput.slice(-5);
    messageElement.innerText = `A link has been sent to this phone number: ${maskedPhone}`;
    
    // Prevent actual form submission
    return false;
}

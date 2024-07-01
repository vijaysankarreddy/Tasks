function validateForm() {
    let isValid = true;
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let website = document.getElementById('website').value.trim();
    let message = document.getElementById('message').value.trim();

    // Clear previous error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('websiteError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('formStatus').innerText = '';

    // Name validation
    if (name === '') {
        document.getElementById('nameError').innerText = 'Required field';
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Enter a valid email';
        isValid = false;
    }

    // Website URL validation
    let urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([^\s]*)?$/i;
    if (website === '' || !urlPattern.test(website)) {
        document.getElementById('websiteError').innerText = 'Enter a valid URL';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').innerText = 'Message cannot be empty';
        isValid = false;
    }

    if (isValid) {
        // Store data in local storage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('website', website);
        localStorage.setItem('message', message);
        
        // Redirect to a new page
        window.location.href = 'submitted.html';
    } else {
        document.getElementById('formStatus').innerText = 'Form not submitted. Please correct the errors above.';
    }

    return false; // Prevent form submission
}

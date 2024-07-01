document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Reset error messages
    resetErrors();

    // Validate form fields
    let isValid = true;

    // First Name validation
    let firstName = document.getElementById('firstName').value.trim();
    if (!firstName) {
        setError('firstName', 'First Name is required');
        isValid = false;
    }

    // Last Name validation
    let lastName = document.getElementById('lastName').value.trim();
    if (!lastName) {
        setError('lastName', 'Last Name is required');
        isValid = false;
    }

    // Email validation
    let email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        setError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Password strength validation
    let password = document.getElementById('password').value.trim();
    let passwordStrength = checkPasswordStrength(password);
    displayPasswordStrength(passwordStrength);

    // Re-enter Password validation
    let rePassword = document.getElementById('rePassword').value.trim();
    if (password !== rePassword) {
        setError('rePassword', 'Passwords do not match');
        isValid = false;
    }

    // Gender validation
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        setError('gender', 'Please select a gender');
        isValid = false;
    }

    // Age validation
    let age = document.getElementById('age').value.trim();
    if (!age || isNaN(age) || age < 1 || age > 100) {
        setError('age', 'Please enter a valid age');
        isValid = false;
    }

    // Phone Number validation
    let phone = document.getElementById('phone').value.trim();
    if (!phone.match(/^\d{10}$/)) {
        setError('phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }

    // Address validation
    let address = document.getElementById('address').value.trim();
    if (!address) {
        setError('address', 'Address is required');
        isValid = false;
    }

    // State validation
    let state = document.getElementById('state').value.trim();
    if (!state) {
        setError('state', 'State is required');
        isValid = false;
    }

    // Country validation
    let country = document.getElementById('country').value.trim();
    if (!country) {
        setError('country', 'Country is required');
        isValid = false;
    }

    // Language validation
    let language = document.getElementById('language').value.trim();
    if (!language) {
        setError('language', 'Language is required');
        isValid = false;
    }

    // Declaration checkbox validation
    let declaration = document.getElementById('declaration').checked;
    if (!declaration) {
        setError('declaration', 'Please agree to the declaration');
        isValid = false;
    }

    if (isValid) {
        // Form submission logic (replace with actual submission or redirection)
        alert('Form submitted successfully!');
        console.log({
            firstName,
            lastName,
            email,
            password,
            gender: gender.value,
            age,
            phone,
            address,
            state,
            country,
            language,
            declaration
        });

        // Redirect to a success page or perform other actions
        // window.location.href = 'success.html';
    }
});

function isValidEmail(email) {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkPasswordStrength(password) {
    // Password strength logic
    if (password.length < 6) {
        return 'weak';
    } else if (password.length < 10) {
        return 'moderate';
    } else {
        return 'strong';
    }
}

function displayPasswordStrength(strength) {
    // Display password strength message
    let strengthElement = document.getElementById('passwordStrength');
    let message = 'Password Strength: ';
    switch (strength) {
        case 'weak':
            message += 'Poor';
            strengthElement.style.color = 'red';
            break;
        case 'moderate':
            message += 'Medium';
            strengthElement.style.color = 'orange';
            break;
        case 'strong':
            message += 'Strong';
            strengthElement.style.color = 'green';
            break;
        default:
            message = '';
    }
    strengthElement.textContent = message;
}

function setError(inputId, errorMessage) {
    // Set error message for the input field
    let errorElement = document.getElementById(inputId + 'Error');
    errorElement.textContent = errorMessage;
}

function resetErrors() {
    // Clear all error messages
    let errorElements = document.querySelectorAll('small[id$="Error"]');
    errorElements.forEach(function(errorElement) {
        errorElement.textContent = '';
    });
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve values from the fields
    const name = document.querySelector('input[name="fullname"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check for empty fields and email format
    if (!name) {
        alert('Please enter your full name.');
        return;
    }

    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!message) {
        alert('Please enter your message.');
        return;
    }

    // Show confirmation dialog with the entered data
    const confirmationMessage = `
        Please confirm the details below before sending the email:
        Name: ${name}
        Email: ${email}
        Message: ${message}
    `;

    if (confirm(confirmationMessage)) {
        // Submit the form programmatically for Netlify to handle
        this.submit();
    } else {
        alert('Submission cancelled. You can modify your details.');
    }
});

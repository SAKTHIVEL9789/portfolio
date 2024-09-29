// Initialize EmailJS with your User ID
(function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send email using EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('message-status').innerText = 'Message sent successfully!';
            document.getElementById('message-status').style.color = 'green';
        }, function(error) {
            console.error('FAILED...', error);
            document.getElementById('message-status').innerText = 'Failed to send the message.';
            document.getElementById('message-status').style.color = 'red';
        });

    // Clear form fields after submission
    document.getElementById('contact-form').reset();
});

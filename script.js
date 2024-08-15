document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Form submission intercepted. Sending form...");
    
    emailjs.sendForm('risoolinaja', 'risoolintemplate', this)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            document.getElementById('modal-body-content').innerText = 'Message sent successfully!';
            $('#responseModal').modal('show');
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.error('Failed to send email:', error);
            document.getElementById('modal-body-content').innerText = 'Message sending failed. Please try again.';
            $('#responseModal').modal('show');
        });
});

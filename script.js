document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Dapatkan nilai dari form
    var user_name = document.getElementById('name').value;
    var user_message = document.getElementById('message').value;

    // Buat object untuk dikirim ke emailJS
    var emailParams = {
        from_name: user_name,
        to_name: 'Risol-In Aja',  // Nama penerima atau bisa dikosongkan
        message: user_message
    };

    // Kirim email
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
        .then(function(response) {
            document.getElementById('modal-body-content').innerText = 'Message sent successfully!';
            $('#responseModal').modal('show');
            document.getElementById('contact-form').reset();
        }, function(error) {
            document.getElementById('modal-body-content').innerText = 'Message sending failed. Please try again.';
            $('#responseModal').modal('show');
            console.log('Failed...', error);
        });
});

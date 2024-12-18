document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Collecting form data
    let formData = new FormData(this);

    // Send form data using Fetch API
    fetch('http://localhost/shirley/submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())  // Get the response text
    .then(data => {
        // Display the response message in the successMessage div
        const successMessage = document.getElementById('successMessage');
        successMessage.innerHTML = data;
        successMessage.classList.remove('hidden');
        
        // Reset the form fields
        document.getElementById('registrationForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        const successMessage = document.getElementById('successMessage');
        successMessage.innerHTML = "<p style='color: red;'>An error occurred while submitting the form. Please try again later.</p>";
        successMessage.classList.remove('hidden');
    });
    
});
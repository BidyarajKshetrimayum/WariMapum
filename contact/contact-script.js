document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const messageStatus = document.getElementById('message-status');
    const successPopup = document.getElementById('success-popup');

    fetch('/send_email', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            successPopup.style.display = 'block';
            messageStatus.textContent = '';
            messageStatus.classList.remove('error');
            form.reset();
            setTimeout(() => {
                successPopup.style.display = 'none';
            }, 3000); // Hide popup after 3 seconds
        } else if (data.error === "invalid_email") {
            messageStatus.textContent = 'Invalid email address.';
            messageStatus.classList.add('error');
        } else if (data.error === "existing_email") {
            messageStatus.textContent = 'Email address already exists.';
            messageStatus.classList.add('error');
        } else {
            messageStatus.textContent = 'Failed to send message. Please try again.';
            messageStatus.classList.add('error');
        }
    })
    .catch(error => {
        messageStatus.textContent = 'An error occurred. Please try again.';
        messageStatus.classList.add('error');
    });
});

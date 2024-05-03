document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const errorContainer = document.querySelector('.error-container');

    function sendEmail() {
      const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}<br>`;

      Email.send({
        SecureToken: "4d7a0e73-d215-4fd6-b609-e2eb1cf2aa86",
        To: "a4010768@gmail.com",
        From: "a4010768@gmail.com",
        Subject: subject.value,
        Body: bodyMessage,
      }).then(message => {
        if (message === "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "There was an error sending your message.",
            icon: "error",
          });
        }
      });
    }

    function checkInputs() {
      let isValid = true;
      [name, email, phone, subject, message].forEach(item => {
        if (!item.value.trim()) {
          item.classList.add('error');
          isValid = false;
        } else {
          item.classList.remove('error');
        }
      });

      errorContainer.textContent = isValid ? '' : 'Please fill out all required fields correctly.';
      return isValid;
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (checkInputs()) {
        sendEmail();
        form.reset();
      }
    });
});

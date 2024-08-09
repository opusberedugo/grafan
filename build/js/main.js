let menuButton = document.querySelector(".nav-menu-button");
    let menuOptions = document.querySelector("nav .options");
  
    menuButton.addEventListener("click", (e)=>{
      menuOptions.classList.toggle("hidden");
    })


    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name-label').value.trim();
      const email = document.getElementById('email-label').value.trim();
      const message = document.getElementById('message-input').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        Swal.fire({
          icon: 'error',
          title: 'All fields are required',
          text: 'Please fill in all fields before submitting the form.'
        });
        return;
      }

      // Email validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid email address',
          text: 'Please enter a valid email address.'
        });
        return;
      }

      // Send the form data using fetch
      fetch('https://formsubmit.co/opusberedugo@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _captcha: 'false', // Disable default captcha if you are not using it
          _next: 'https://yourwebsite.com/thank-you.html'
        })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Message sent',
            text: 'Your message has been sent successfully!'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error sending your message. Please try again later.'
          });
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error sending your message. Please try again later.'
        });
      });
    });
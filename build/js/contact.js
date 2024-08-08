let APIKey = '6d091dffd4567ba656ace2e5417603c25108208a5c07911bdf241e0d21cc84e1';

$(document).ready(function () {
  $('#contactForm').on('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var nameInput = $('#name').val().trim();
    var email = $('#email').val().trim();
    var subjectInput = $('#subject').val().trim();
    var messageInput = $('#message').val().trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate form fields
    if (!nameInput || !email || !subjectInput || !messageInput) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields!'
      });
      return;
    } else if (!emailPattern.test(email)) {
      // Validate email format
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.'
      });
      return;
    } else {
      $.ajax({
        url: "https://formsubmit.co/ajax/opusberedugo@gmail.com",
        method: "POST",
        data: {
          replyto: email.value,
          subject: subjectInput.value,
          name: nameInput.value,
          message: "I'm from Devro LABS"
        },
        dataType: "json"
      }).then((data) => {
        console.log(data);
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Message Sent',
        //   text: 'Your message has been sent successfully.'
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     $('#contactForm')[0].reset(); // Reset the form fields
        //   }
        // })
      })
    }

  })
});

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
  
    var errorMessages = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerHTML = '';
    }
  
    var isValid = true;
    if (name === '') {
      document.getElementById('name-error').innerHTML = 'Please enter your name.';
      isValid = false;
    }
    if (email === '') {
      document.getElementById('email-error').innerHTML = 'Please enter your email.';
      isValid = false;
    }
    if (message === '') {
      document.getElementById('message-error').innerHTML = 'Please enter your message.';
      isValid = false;
    }
  
    if (isValid) {
      submitForm();
    }
  }
  
  function submitForm() {
    // Here you can add code to submit the form data
    alert('Feedback submitted successfully!');
    // Clear form fields after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
  
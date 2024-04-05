document.addEventListener('DOMContentLoaded', function() {

    if(localStorage.getItem('contactFormData')) {
      const formData = JSON.parse(localStorage.getItem('contactFormData'));
      document.getElementById('fullname').value = formData.fullname;
      document.getElementById('email').value = formData.email;
      document.getElementById('message').value = formData.message;
    }


    document.querySelector('.btn-sub').addEventListener('click', function() {
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const formData = {
        fullname: fullname,
        email: email,
        message: message
      };

      localStorage.setItem('contactFormData', JSON.stringify(formData));


      alert('Thank You!');
    });
  });

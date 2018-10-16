import $ from 'jquery';


$("form").on("submit", function(e) {
  e.preventDefault();



  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const phone = $('#phone').val();
  const email = $('#email').val();
  const message = $('#message').val();
  console.log(firstName, lastName, phone, email, message);
  validateForm({
    firstName,
    lastName,
    phone,
    email,
    message
  });
});

function validateForm (data) {
  const email = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

  if (data.firstName.length < 2) {
    $('#firstName').addClass('is-danger');
  }
  if (data.lastName.length < 2) {
    $('#lastName').addClass('is-danger');
  }
  if (isNaN(data.phone)) {
    $('#phone').addClass('is-danger');
  }
  if (email.test(data.phone)) {
    $('#phone').addClass('is-danger');
  }
}



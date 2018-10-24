import $ from 'jquery';
let ErrorsArray = [];

// $("form").on("submit", function(e) {
$("#submit").on("click", function (e) {
  e.preventDefault();

  const firstName = $('#firstName').val();
  const lastName = $('#lastName').val();
  const phone = $('#phone').val();
  const email = $('#email').val();
  const message = $('#message').val();
  console.log(firstName, lastName, phone, email, message);
  // validateForm();
});

$('#firstName, #lastName, #phone, #email, #message').on('keydown', function (e) {
// $('#firstName, #lastName, #phone, #email, #message').change(function (e) {
  // e.preventDefault();
  // console.log(e.currentTarget.id);
  $(this.id).removeClass('is-danger');
  // $('#submit').attr("disabled", false);
  validateForm();
  const updatedErrorArray = ErrorsArray.filter(e => e !== this.id);
  ErrorsArray = updatedErrorArray;
  console.log(this.id, ErrorsArray);
});

function validateForm () {
  const email = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
console.log($('#firstName').val());
  if ($('#firstName').val().length < 2) {
    $('#firstName').addClass('is-danger');
    if (!$('#firstName').hasClass('is-danger')) ErrorsArray.push('firstName');
    $('#submit').attr("disabled", true);
  }
  if ($('#lastName').val().length < 2) {
    $('#lastName').addClass('is-danger');
    if (!$('#lastName').hasClass('is-danger')) ErrorsArray.push('lastName');
    $('#submit').attr("disabled", true);
  }
  if (isNaN($('#phone').val()) || $('#phone').val().length === 10) {
    $('#phone').addClass('is-danger');
    if (!$('#phone').hasClass('is-danger')) ErrorsArray.push('phone');
    $('#submit').attr("disabled", true);
  }
  if (email.test($('#email').val())) {
    $('#email').addClass('is-danger');
    if (!$('#email').hasClass('is-danger')) ErrorsArray.push('email');
    $('#submit').attr("disabled", true);
  }
}



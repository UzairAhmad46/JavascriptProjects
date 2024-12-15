var nameError = document.getElementById("nameError");
var phoneErorr = document.getElementById("phoneErorr");
var emailErorr = document.getElementById("emailErorr");
var MassageErorr = document.getElementById("MassageErorr");
var submitErorr = document.getElementById("buttonErorr");

function validationName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validatephone() {
  var phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneErorr.innerHTML = "phone no is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneErorr.innerHTML = "phone no  should be ten digits ";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneErorr.innerHTML = "Only digits";
    return false;
  }

  phoneErorr.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailErorr.innerHTML = "email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailErorr.innerHTML = "Invalid Email";
    return false;
  }
  emailErorr.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateMessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;
  if (left > 0) {
    MassageErorr.innerHTML = left + "more characters  required";
    return false;
  }

  MassageErorr.innerHTML = '<i class="fa-solid fa-check"></i>';
}

function validateForm() {
  if (
    !validationName() ||
    !validatephone ||
    !validateEmail ||
    !validateMessage
  ) {
    submitErorr.innerHTML = "Please fill all the required fields";
    return false;
  }
}

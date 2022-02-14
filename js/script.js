const form = document.getElementById('form');
const name = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const birthday = document.getElementById('birthday');
const checkbox = document.getElementById('checkb');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const fullnameValue = fullname.Value();
  const emailValue = email.Value();
  const phoneValue = phone.Value();
  const passwordValue = password.Value();
  const birthdayValue = birthday.Value();

  if(fullnameValue === '') {
    setErrorFor(fullname, "Fullname Invalid");
  }else if(!isFullname(fullnameValue)) {
    setErrorFor(fullname, "Fullname Invalid");
  }

  if(emailValue === '') {
    setErrorFor(email, "Email Invalid");
  }else if(!isEmail(emailValue)) {
    setErrorFor(email, "Email Invalid");
  }

  if(phoneValue === '') {
    setErrorFor(phone, "Phone Invalid");
  }else if(!isPhone(phoneValue)) {
    setErrorFor(phone, "Phone Invalid");
  }

  if(passwordValue === '') {
    setErrorFor(password, "Password Invalid");
  }else if(!isPassword(passwordValue)) {
    setErrorFor(password, "Password Invalid");
  }

  if(birthdayValue === '') {
    setErrorFor(birthday, "Age Invalid");
  }else if(!isBirthay(birthdayValue)) {
    setErrorFor(birthday, "Age Invalid");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const span = formControl.querySelector('span');

  span.innerText = message;

  formControl.className = 'form-control error';
}

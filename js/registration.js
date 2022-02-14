const init = () => {


  const inputName = document.querySelector('input[type="text"]');
  const inputEmail = document.querySelector('input[type="email"]');
  const inputTel = document.querySelector('input[type="tel"]');
  const inputPassword = document.querySelector('input[type="password"]');
  const inputDate = document.querySelector('input[type="date"]');
  const inputCheckbox = document.querySelector('input[type="checkbox"]');
  const submitButton = document.querySelector('#register');
/*
  if(submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();

      //https://reqres.in/api/login
      fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: inputName.value,
          email: inputEmail.value,
          tel: inputTel.value,
          password: inputPassword.value,
          date: inputDate.value,
        })
      }).then((Response) => {
        return  Response.json();
      }).then((data) => {
        console.log(data)
      })
    })
  }*/
//  console.log(inputName,inputEmail,inputTel,inputPassword,inputDate,inputCheckbox,submitButton)
}

window.onload = init;
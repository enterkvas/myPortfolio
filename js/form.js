"use strict"
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if(error === 0){
      form.classList.add('_sending');
      // let response = await fetch('sendmail.php', {
      //   method: 'POST', 
      //   body: formData
      // });
      // if(response.ok) {
      //   let result = await response.json();
      //   alert(result.message);
      //   form.reset();
      //   form.classList.remove('_sending');
      // } else {
      //   alert('Error');
      //   form.classList.remove('_sending');
      // }
    } else {
      alert('Fill in required fields!');
    }
  }

  function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for(let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.value === '') {
        formAddError(input, 'Fill in required fields!');
        error++;
      } else if(input.classList.contains('form__email')) {
        // if(emailTest(input)){
          formAddError(input, 'dkfdl');          
          error++;
        // };
      } 
    }
    return error;
  }
  function formAddError(input, text) {
    // input.parentElement.classList.add('_error');
    input.classList.add('_error');
    const formItems = input.parentNode;
    const errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;    
    // input.classList.add('_error');
    formItems.append(errorLabel);
  }
  function formRemoveError(input) {
    // input.parentElement.classList.remove('_error');
    const formItems = input.parentNode;
    if(input.classList.contains('_error')){
      formItems.querySelector('.error-label').remove();
    input.classList.remove('_error');
    }    
  }
  // Email test function
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
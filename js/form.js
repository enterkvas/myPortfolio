"use strict"
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);
//------------------------------------------------
  // Function for submitting the entire form:
  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form);

    let formData = new FormData(form);

    if(error === 0){
      form.classList.add('_sending');	  
	  
      let response = await fetch('sendmail.php', {
        method: 'POST', 
        body: formData
      });
      if(response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert('Error');
        form.classList.remove('_sending');
      }
    } else {
      alert('Fill in required fields!');
    }
  }  
  //-----------------------------------------------
  // Function for validation:  
  function formValidate(form){
    let error = 0;

    const inputTel = document.querySelector('.form__tel');
    const errorLabel = document.createElement('label');

    // Checking that required fields are complete:
    let formReq = document.querySelectorAll('._req');

    for(let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if(input.value === '') {
        formAddError(input, 'Fill in required fields!');
        error++;

      } else if(input.classList.contains('form__email')){        
        if(emailTest(input)){         
          error++;
        }           
      }                     
    }
    //----------------------------------------

    function formAddErrorForTel(inputTel, text){
      const parentTel = inputTel.parentNode;
      parentTel.classList.add('errorTel');
      inputTel.classList.add('_error');
      errorLabel.classList.add('form__label');
      errorLabel.textContent = text;
      parentTel.append(errorLabel);
    }
  
    function formRemoveErrorForTel(inputTel){
      const parentTel = inputTel.parentNode;
      if(inputTel.classList.contains('_error')){
        parentTel.querySelector('.form__label').remove();
        inputTel.classList.remove('_error');
      }
    }
    // Phone number testing function:
    function phoneTest(inputTel){
      return !/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(inputTel.value);
    }

    if(inputTel.value !==''){
      formRemoveErrorForTel(inputTel);
      if(phoneTest(inputTel)){
        formAddErrorForTel(inputTel, 'The first character must be a number or a plus. The last character is a number only. Parentheses, spaces and hyphens are allowed. From 4 to 14 characters in total.');
        error++;
      } else {
        formRemoveErrorForTel(inputTel);
      }
    }

    return error;
  }  
  //-------------------------------------------------
  function formAddError(input, text){
    input.classList.add('_error');
    const formItems = input.parentNode;
    const errorLabel = document.createElement('label');
    errorLabel.classList.add('form__label');
    errorLabel.textContent = text;        
    formItems.append(errorLabel);
  }

  function formRemoveError(input){
    const formItems = input.parentNode;
    if(input.classList.contains('_error')){
      formItems.querySelector('.form__label').remove();
      input.classList.remove('_error');
    }    
  }
  // Email test function:
  function emailTest(input){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  //-------------------------------
});
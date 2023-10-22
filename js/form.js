// jQuery Validate JS
$("#form").validate({
  rules: {
    name: { required: true },
    email: { 
      required: true, 
      email: true 
    },
    // skype:  { required: true },
    // phone:  { required: true },
    message: { required: true }
  },

  messages: {
    name: {
      required: "Пожалуйста, введите свое имя"},
    email: {
      required: "Пожалуйста, введите свой email",
      email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
    },
    message: "Пожалуйста, введите текст сообщения"
  },

  submitHandler: function(form) {
    ajaxFormSubmit();
  }

})

// Функция AJAX запрса на сервер
function ajaxFormSubmit(){
  var string = $("#form").serialize(); // Соханяем данные введенные в форму в строку. 

  // Формируем ajax запрос
  $.ajax({
    type: "POST", // Тип запроса - POST
    url: "php/mail.php", // Куда отправляем запрос
    data: string, // Какие даные отправляем, в данном случае отправляем переменную string
    
    // Функция если все прошло успешно
    success: function(html){
      $("#form").slideUp(800);
      $('#answer').html(html);
    }
  });

  // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
  return false; 
}
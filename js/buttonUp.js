"use strict";
// =========== Button Up =======
function btn_up() {
  const btn_upElement = document.createElement('div');
  btn_upElement.className = 'btn_up';
  document.body.append(btn_upElement); 

  btn_upElement.addEventListener('click', function (e) {    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    btn_upElement.classList.toggle('active');
    e.preventDefault();
  });
  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords){ btn_upElement.classList.add('active'); }
    if (scrolled < coords){ btn_upElement.classList.remove('active'); }
  }
  window.addEventListener('scroll', trackScroll);
}
setTimeout(btn_up, 2000);
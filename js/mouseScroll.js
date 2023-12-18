"use strict";
//mouse__scroll/Smooth Scrolling
const mouseScroll = document.querySelector('.mouse__scroll');
mouseScroll.addEventListener('click', function(e) {  
  if (mouseScroll.dataset.mouse && document.querySelector(mouseScroll.dataset.mouse)) {
    const mouseBlock = document.querySelector(mouseScroll.dataset.mouse);
    const mouseBlockValue = mouseBlock.getBoundingClientRect().top;				
    window.scrollTo ({top: mouseBlockValue,	behavior: "smooth"});
    
  }  
  e.preventDefault();   
});
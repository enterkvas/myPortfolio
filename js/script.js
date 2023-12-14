"use strict";
// Burger menu
const iconBurger = document.querySelector('.burger-btn'),
  navList = document.querySelector('.menu-list');
iconBurger.addEventListener("click", function(e) {
  iconBurger.classList.toggle('_active');
  navList.classList.toggle('_active');
});
// Burger Menu Link Items /Smooth Scrolling
const menuLinks = document.querySelectorAll('.menu-list__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		const w = document.body.clientWidth;
		if (w < 992) {
			navList.classList.toggle('_active');			
      iconBurger.classList.toggle('_active');		
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top;				
				window.scrollTo ({top: gotoBlockValue,	behavior: "smooth"});
			}			
		} else if (w > 991) {			
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {				
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				if (window.pageYOffset === 0) {
					const gotoBlockValue = gotoBlock.getBoundingClientRect().top;	
					window.scrollTo ({top: gotoBlockValue,	behavior: "smooth"});				
				} else if (window.pageYOffset > 0) {
					const gotoBlockValue = gotoBlock.getBoundingClientRect().top;
					window.scrollTo ({top: gotoBlockValue,	behavior: "smooth"});				
				}				
			}			
		}		
		e.preventDefault();
	}	
};
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

// filter
const list = document.querySelector('#categories'),
  blocks = document.querySelectorAll('.card'),
  filters = list.querySelectorAll('.filter');
list.addEventListener('click', e => {
  if(e.target.classList.contains('filter')) {
    const filter = e.target.dataset.id;
    if(filter === 'all') {
      blocks.forEach(block => {
        block.style.display = 'block';
      }); 
    } else {
        blocks.forEach(block => {
          if(block.classList.contains(filter)) {
            block.style.display = 'block';
          } else {
            block.style.display = 'none';
          }
        });
      }      
    
    filters.forEach(filter => filter.classList.remove('filter--active'));
    e.target.classList.add('filter--active');
  }
});
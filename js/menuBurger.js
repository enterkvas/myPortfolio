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
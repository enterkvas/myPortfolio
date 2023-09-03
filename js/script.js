"use strict";
// Burger menu
const iconBurger = document.querySelector('.burger-btn'),
  // mouseScroll = document.querySelector('.mouse__scroll'),  
  navList = document.querySelector('.menu-list');
iconBurger.addEventListener("click", function(e) {
  iconBurger.classList.toggle('_active');
  navList.classList.toggle('_active');
  // window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Burger Menu Link Items /Smooth Scrolling
const menuLinks = document.querySelectorAll('.menu__link');
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

    if (scrolled > coords) { btn_upElement.classList.add('active'); }
    if (scrolled < coords) { btn_upElement.classList.remove('active'); }
  }
  window.addEventListener('scroll', trackScroll);
}
setTimeout(btn_up, 2000);

// ================ filter var_1 ================

// const filterRow = document.querySelectorAll('.card');
// document.querySelector('.works__categories').addEventListener('click', event => {
//   if(event.target.tagName !== 'LI') return false;
//   let filterClass = event.target.dataset['f'];
//   console.log(filterClass);
//   filterRow.forEach( elem => {
//     elem.classList.remove('hide');
//     if(!elem.classList.contains(filterClass) && filterClass !== 'all') {
//       elem.classList.add('hide');
//     }
//   });
// });
// MixItUp - фильтрация работ в портфолио

// ================= filter var_2 ==================

// let categories = document.querySelector('#categories'),
//     cards = document.querySelectorAll('.card'),
//     filters = document.querySelectorAll('.filter')
// function filter() {
//   categories.addEventListener('click', event => {
//     let targetId = event.target.dataset.id,
//     targetMy = event.target

//     if (targetMy.classList.contains('filter')) {
//       filters.forEach(filter => filter.classList.remove('act')) 
//       targetMy.classList.add('act')
//     }  
    
//     if(!['design','bootstrap','education','order'].includes(targetId)) targetId = 'card'
//     // console.log(targetId);

//     switch(targetId) {
//       case 'all':
//         getCards('card')
//         break
//       case 'design':case 'bootstrap':case 'educational':case 'order':
//         getCards(targetId)
//         break      
//     }
//   })
// }
// filter()

// function getCards(className) {
//   cards.forEach(card => {
//     if (card.classList.contains(className)) {
//       card.style.display = 'block'
//     } else {
//       card.style.display = 'none'
//     }
//   })
// }

// ================= filter var_4 ==================

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
    // li = li.classList.remove('act'));
    e.target.classList.add('filter--active');
  }
});
  
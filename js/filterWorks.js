"use strict";
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
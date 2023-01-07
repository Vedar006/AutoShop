export function basketCount() {

  const basketCounter = document.querySelector('.header-basket__count');
  const modalItems = document.querySelectorAll('.modal-item');

  if(modalItems.length) {
    basketCounter.textContent = modalItems.length;
  }else {
       basketCounter.style.display = 'none';
  }
  }


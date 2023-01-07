export function itemsDelete() {

  // const modalItem = document.querySelector('.modal-item');
  const modalItemsDelete = document.querySelectorAll('.modal-item__delete');

  modalItemsDelete.forEach((e) => {
    e.addEventListener('click', () => {

      e.closest('.modal-item').remove();

      basketCount();
    });

  });

}

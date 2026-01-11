const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);

// Закриття Modal при кліку на фон
modal.addEventListener('click', event => {
  if (event.target === modal) {
    toggleModal();
  }
});

// Закриття Modal при натиску на esc
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
    toggleModal();
  }
});

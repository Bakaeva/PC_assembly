const modalWindow = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.modal__button');
const closeButton = document.querySelector('.modal__close');
const body = document.querySelector('body');

modalButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll');
    })
})

modalWindow.addEventListener('click', e => {
    const isModal = e.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll');
    }
})

closeButton.addEventListener('click', e => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll');
})
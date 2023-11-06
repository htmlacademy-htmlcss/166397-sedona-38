let wantHereButton = document.querySelector('.want-here');
let modal = document.querySelector('.modal-container');
let modalCloseButton = document.querySelector('.modal-close-button');

wantHereButton.onclick = function (evt) {
  evt.preventDefault();

  modal.classList.remove('modal-container-close');
}

modalCloseButton.onclick = function () {
  modal.classList.add('modal-container-close');
}

('use strict');
import gallery from './gallery-items.js';
const listImages = document.querySelector('.js-gallery');
const modalWindow = document.querySelector('.js-lightbox');
const imageOriginal = document.querySelector('.lightbox__image');
const btnCloseModal = document.querySelector('.lightbox__button');
const orerlayModal = document.querySelector('.lightbox__content');
listImages.addEventListener('click', openModalWindow);
renderImages(gallery);
function renderImages(array) {
  array.forEach(e => {
    const itemImage = `
    <li class="gallery__item">
    <a class="gallery__link" href="${e.original}"  >
    <img
    class="gallery__image"
    src="${e.preview}"
    data-source="${e.original}"
    alt="${e.description}"
    />
    </a>
    </li>
    `;
    listImages.insertAdjacentHTML('beforeend', itemImage);
  });
}
function openModalWindow(e) {
  orerlayModal.addEventListener('click', clickToOverlayForCloseModal);
  btnCloseModal.addEventListener('click', closeModalWindow);
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  modalWindow.classList.add('is-open');
  const currentLinkImageOriginal = e.target.dataset.source;
  imageOriginal.setAttribute('src', currentLinkImageOriginal);
  window.addEventListener('keydown', handleKeyPress);
}
function closeModalWindow() {
  imageOriginal.removeAttribute('src');
  modalWindow.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
}
function handleKeyPress(e) {
  if (e.code === 'ArrowLeft') prevImgKeyPress(gallery);
  if (e.code === 'ArrowRight') nextImgKeyPress(gallery);
  if (e.code !== 'Escape') return;
  closeModalWindow();
}
function clickToOverlayForCloseModal(e) {
  if (e.currentTarget !== e.target) return;
  closeModalWindow();
}
function prevImgKeyPress(array) {
  const currentIdx = findIdx(array);
  const prevLinkImg = array[currentIdx - 1].original;
  imageOriginal.setAttribute('src', prevLinkImg);
}
function nextImgKeyPress(array) {
  const currentIdx = findIdx(array);
  const prevLinkImg = array[currentIdx + 1].original;
  imageOriginal.setAttribute('src', prevLinkImg);
}
function findIdx(array) {
  const currentImg = imageOriginal.src;
  const item = array.find(arr => currentImg === arr.original);
  const idxImg = array.indexOf(item);
  return idxImg;
}

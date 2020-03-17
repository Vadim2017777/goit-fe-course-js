import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
gallery.addEventListener('click', handleClickImage);
const closeModalBtn = document.querySelector(`[data-action="close-lightbox"]`);
const lightbox = document.querySelector('.js-lightbox');
const wideImage = document.querySelector('.lightbox__image');
closeModalBtn.addEventListener('click', handleCloseModal);
const overlay = document.querySelector('.lightbox__content');
overlay.addEventListener('click', handleCloseModal);
const nextImgBtn = document.querySelector(`[data-action="next-image"]`);
nextImgBtn.addEventListener('click', nextImage);

insertGallery(galleryItems);
function insertGallery(galleryItems) {
  galleryItems.forEach(item => {
    let li = document.createElement('li');

    li.insertAdjacentHTML(
      'afterbegin',
      `<a
          class="gallery__link"
          href="${item.original}"
        >
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>`,
    );
    gallery.append(li);
  });
}

function handleClickImage(e) {
  e.preventDefault();
  window.addEventListener('keydown', handleKeyPress);
  wideImage.src = e.target.dataset.source;
  wideImage.alt = e.target.alt;
  lightbox.classList.add('is-open');
}

function handleCloseModal(e) {
  if (e.target != e.currentTarget) {
    return;
  }
  window.removeEventListener('keydown', handleKeyPress);
  lightbox.classList.remove('is-open');
  wideImage.src = '';
  wideImage.alt = '';
}

function handleKeyPress(e) {
  if (e.code != 'Escape') {
    return;
  }

  lightbox.classList.remove('is-open');
  wideImage.src = '';
  wideImage.alt = '';
}

// function nextImage() {
//   let currentImage;
//   galleryItems.forEach((item, index) => {
//     if (wideImage.src === item.original) {
//       currentImage = index;
//     }
//     return currentImage;
//   });

//   wideImage.src = galleryItems[currentImage + 1].original;
// }
const currentImage = findImage(galleryItems);
function nextImage() {
  const currentImage = findImage(galleryItems);
  console.log(galleryItems[currentImage]);

  // wideImage.src = galleryItems[currentImage + 1].original;
}

function findImage(galleryItems) {
  let currentImage;

  galleryItems.forEach((item, index) => {
    if (wideImage.src === item.original) {
      currentImage = index;
    }
    return currentImage;
  });

  let nextImage = galleryItems[currentImage + 1].original;

  console.log(currentImage);
  console.log(nextImage);
  return nextImage;
}

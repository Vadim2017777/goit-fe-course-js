import galleryItems from './gallery-items.js';
const gallery = document.querySelector('.js-gallery');
const galleryOnClickImage = gallery.addEventListener('click', handleClickImage);
gallery.addEventListener();

insertGallery(galleryItems);
function insertGallery(galleryItems) {
  galleryItems.forEach(item => {
    let li = document.createElement('li');

    li.insertAdjacentHTML(
      'afterbegin',
      `<span
          class="gallery__link"
          href="${item.original}"
        >
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </span>`,
    );
    gallery.append(li);
  });
}

function handleClickImage(e) {
  //   const lightbox = document.querySelector('.js-lightbox');
  e.target.src = e.target.dataset.source;
  console.log(e.target.src);

  //   lightbox.classList.add('is-open');
}

// e.target.dataset.source

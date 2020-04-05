'use strict';

const lazyLoad = target => {
  const options = {
    rootMargin: '-40px 0px',
    threshold: 0.01,
  };

  const io = new IntersectionObserver((entreis, observer) => {
    entreis.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;

        const src = img.dataset.lazy;
        img.setAttribute('src', src);
        observer.disconnect();
      }
    });
  }, options);
  io.observe(target);
};

const images = document.querySelectorAll('.gallery__image');

images.forEach(image => {
  lazyLoad(image);
});

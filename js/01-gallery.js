import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const ellGallery = document.querySelector('.gallery')
function newGallary(items) {
    return items
    .map((item) => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`)
    .join('')
};
ellGallery.innerHTML = newGallary(galleryItems);
ellGallery.addEventListener("click", clickOn);
function clickOn(event) {
  
  event.preventDefault();
  
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  ellGallery.addEventListener("keyup", event => {
    if (event.code === "Escape") {
      instance.close();
    }
  })
}
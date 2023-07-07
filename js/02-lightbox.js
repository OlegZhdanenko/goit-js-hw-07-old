import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);
const ellGallery = document.querySelector('.gallery')
function newGallary(items) {
    return items
    .map((item) => `<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`)
    .join('')
};
ellGallery.innerHTML = newGallary(galleryItems);
const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    
});
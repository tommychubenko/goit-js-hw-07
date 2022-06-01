import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

function importGallery(images) {
    const galleryItems = images.map(image =>

`<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`).join("")
        ;
    
    gallery.insertAdjacentHTML('afterbegin' , galleryItems);  
    
};


function openModal(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    }
    else {
        event.preventDefault();
        console.log(event.target.nodeName);        
        var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
        
    }

}


document.addEventListener('click', openModal);

importGallery(galleryItems);


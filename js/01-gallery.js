import { galleryItems } from './gallery-items.js';

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

const gallery = document.querySelector('.gallery');

function importGallery(images) {
    const galleryItems = images.map(image =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"/></a ></div>`).join("")
        ;
    
    gallery.insertAdjacentHTML('afterbegin' , galleryItems);  
    
};

function openModal(event) {
    if (event.target.nodeName !== 'IMG') {
        return
    }
    else {
        event.preventDefault()
        console.log(event.target.nodeName)
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset['source']}" width="800" height="600">
`)

        instance.show()
    }

}
;

document.addEventListener('click', openModal)



importGallery(galleryItems);



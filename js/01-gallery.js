import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery  = document.querySelector('div.gallery');

const galleryEl = document.createElement("ul");
galleryEl.classList.add('gallery');

gallery.append(galleryEl);
console.log(gallery);



const pictureElements = galleryItems.map(
    img => `<li class = "gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" data-source="${img.original}" alt="${img.description}">
    </a></li>`
).join('');
galleryEl.insertAdjacentHTML("beforeend", pictureElements);

document.querySelectorAll('a.gallery__link').forEach(
    function (element) {
        element.addEventListener('click', showPicture);
    }
)

function showPicture(event) {
    event.preventDefault();
    const picture = event.target.getAttribute('data-source');
    const instance = basicLightbox.create(`
        <img src="${picture}" width="100%">
    `);
    instance.show();
}

/*
Создай галерею с возможностью клика по её элементам и просмотра 
полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. 
Разбей его на несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному 
шаблону элемента галереи.
Реализация делегирования на div.gallery и получение url большого изображения.
Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min)файлы библиотеки.
Открытие модального окна по клику на элементе галереи. Для этого 
ознакомься с документацией и примерами.
Замена значения атрибута src элемента <img> в модальном окне перед открытием.
Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
*/
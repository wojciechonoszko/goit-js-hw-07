import { galleryItems } from './gallery-items.js';
// Change code below this line

const previewImages = [];
const originalImages = [];
const descriptionImages = [];

for (const image of galleryItems){
    previewImages.push(image.preview);
    originalImages.push(image.original);
    descriptionImages.push(image.description);
};

console.log(previewImages[0]);
// console.log(previewImages);
// console.log(originalImages);
// console.log(descriptionImages);

const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", selectItem);

// function selectItem(event) {
//     if (event.target.nodeName !== "BUTTON"){
//         return;
//     }
// }

createImageGallery();

function createImageGallery(){
    const items= [];
    for (let i = 0; i < galleryItems.length; i++) {
        const item = document.createElement("img");
        item.src = `${previewImages[i]}`;
        item.classList.add("item");
        items.push(item);

    }
    gallery.append(...items);
}

console.log(galleryItems);

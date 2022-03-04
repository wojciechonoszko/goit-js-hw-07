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


const modalLink = document.querySelector(".url")
createImageGallery();
// gallery.addEventListener("click", selectItem());

// function selectItem(event) {
//     if (event.target.nodeName !== "BUTTON"){
//         return;
//     }
// }

function createImageGallery(){
    const items= [];
    const urlLinks = [];
    for (let i = 0; i < galleryItems.length; i++) {
        const urlLink = document.createElement("a");
        urlLink.href = `${originalImages[i]}`;
        urlLink.classList.add("url");
        const item = document.createElement("img");
        item.src = `${previewImages[i]}`;
        item.classList.add("item");
        item.data-source = "large-image.jpg";
        
        items.push(item);
        urlLinks.push(urlLink);

    }
    gallery.append(...items);
   gallery.append(...urlLinks);
   //urlLinks[0].insertAdjacentHTML("afterbegin", items[0]);
   modalLink.insertAdjacentHTML("afterbegin", items[0]);

}

console.log(galleryItems);

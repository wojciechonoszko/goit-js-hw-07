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


const modalLink = document.querySelector(".gallery__link");
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
        urlLink.classList.add("gallery__link");
        
        const item = document.createElement("img");
        item.src = `${previewImages[i]}`;
        item.classList.add("gallery__image");
        item["data-source"] = `${previewImages[i]}`;
        item.setAttribute('data-source', `${previewImages[i]}`);
        
        items.push(item);
        urlLinks.push(urlLink);
        
        

    }
    
    gallery.append(...items);
   gallery.append(...urlLinks);
   
   for (let x = 0; x < urlLinks.length; x++){
    urlLinks[x].appendChild(items[x]); 
}
}

console.log(galleryItems);

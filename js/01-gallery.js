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



const gallery = document.querySelector(".gallery");

createImageGallery();
const modalLinks = [];
const modalLink = document.querySelector(".gallery__link");


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
        item["data-source"] = `${originalImages[i]}`;
        item.setAttribute('data-source', `${originalImages[i]}`);
        item.alt = `${descriptionImages[i]}`;

        items.push(item);
        urlLinks.push(urlLink);

    }
    
    gallery.append(...items);
   gallery.append(...urlLinks);
   console.log(urlLinks[0].href)
   
   for (let x = 0; x < urlLinks.length; x++){
    urlLinks[x].appendChild(items[x]); 
    urlLinks[x].addEventListener("click", (event) => {
        event.preventDefault();
    })
    const galleryImage = document.querySelector('.gallery__image');
    console.log(galleryImage)
    galleryImage.onclick = () => {
        const modalImage = basicLightbox.create(`<img src=`+`${galleryImage["data-source"]}`+`>`
        );

modalImage.show()
    
    }
    
}
}

console.log(galleryItems);


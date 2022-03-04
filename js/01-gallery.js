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

createImageGallery();
const modalLinks = [];
const modalLink = document.querySelectorAll(".gallery__link");
//console.log(modalLink);

// for (const link of modalLink){
//     modalLinks.push(link);
// }
// console.log(modalLinks);


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
        item.alt = `${descriptionImages[i]}`;

        items.push(item);
        urlLinks.push(urlLink);

        
        

    }
    
    gallery.append(...items);
   gallery.append(...urlLinks);
   
   for (let x = 0; x < urlLinks.length; x++){
    urlLinks[x].appendChild(items[x]); 
    urlLinks[x].addEventListener("click", (event) => {
        event.preventDefault();
    })
    urlLinks[x].onclick = () => {

        basicLightbox.create('
            <img width="1400" height="900" src=`${urlLinks[x]}`>
        '').show()
    
    }
}
}

console.log(galleryItems);

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// const imageInstance = basicLightbox.create(document.querySelector('gallery__link'));
// document.querySelector('a.image').onclick = imageInstance.show

document.querySelector('.gallery__link').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

}
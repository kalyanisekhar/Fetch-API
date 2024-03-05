const imageContainer = document.getElementById('image-container');
const loadMoreBtn = document.getElementById('load-more-btn');
let start=0;
const limit=9;

async function fatchImages(start , limit){

try{
    const responce = await fatch ("https://via.placeholder.com/150/92c952")
if (!responce.ok) {
   
    throw new Error('network responce is not ok');
}
const data =await responce.json();
displayImages(data)
}
catch(error){
    console.error('Error fetching images:',error.message);
}
}

function displayImages(images){
    images.forEach(image =>{
        const imageItem =document.createElement('div');
        imageItem.classList.add('image-item');

        const imgElement =document.createElement('img');
        imgElement.src=image.url;
        imgElement.alt=image.title;

        imageItem.appendChild(imgElement);
        imageContainer.appendChild(imageItem);
    }) ;
      
}
function loadMoreImages(){
    start +=limit;
    fetchImages(start, limit);
}
fetchImages(start, limit)
